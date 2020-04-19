import { Player } from "./Player";
import { MAX_PLAYERS, MAX_SUBPHASE_COUNT } from './limits';


/**
 * Returns true iff a grid passes validation.
 * @param {Array<Array<Array<function>>>} grid
 */
function gridIsValid(grid) {
    if (grid.length > MAX_SUBPHASE_COUNT) {
        return false;
    }
    let playerCount = -1;
    for (let i = 0; i < grid.length; i++) {
        if (playerCount == -1) {
            playerCount = grid[i].length;
            if (playerCount > MAX_PLAYERS) {
                return false;
            }
        }
        if (grid[i].length != playerCount) {
            return false;
        }
        for (const subgrid of grid[i]) {
            if (subgrid.length != playerCount) {
                return false;
            }
            for (const el of subgrid) {
                if (typeof el != "function") {
                    return false;
                }
            }
        }
    }

    return true;
}

/**
 * Build an instance of ActionMatrix.
 * @param {Array<Player>} players 
 * @param {Array<Array<Array<function>>>} grid 
 * @param {int} current_phase 
 */
export function ActionMatrixBuilder(
    players=null, grid=null, current_phase=-1) {
        if (!gridIsValid(grid)) {
            return false;
        }

        if (grid && players && grid[0].length != players.length) {
            return false;
        }
        return ActionMatrixImpl(players, grid, current_phase);
}

/**
 * Represents the set of all actions recorded for a particular game.
 * There should be one ActionMatrix for each game.
 */
export class ActionMatrix {}

class ActionMatrixImpl extends ActionMatrix {
    /**
     * Initialize an ActionMatrix.
     * @param {Array<Player>} players A list of players (player indices must
     *  correspond to grid indices).
     * @param {Array<Array<Array<function>>>} grid A 3d array of function pointers.
     *  All values should be ASMs. The first dimension represents the subphase number,
     *  the second dimension represents the actor, and the third dimension represents
     *  the target.
     * @param {int} current_phase The current game phase.
     */
    constructor(players, grid, current_phase) {
        // Create a map from players to indices.
        this.playerToIndex = {};
        for (let i=0; i<players.length; i++) {
            const player = players[i].id;
            this.playerToIndex[player] = i;
        }

        this.players = players;
        this.grid = grid;
        this.current_phase = current_phase;
        this.regenerateCache();
    }

    /**
     * Adds a player to the game and returns
     * a boolean indicating whether the action
     * was successful or not. A player can only
     * be added to a game before the game starts.
     * @param {Player} player 
     */
    addPlayer(player) {
        if (!this.grid) {
            const index = this.players.length;
            this.players.push(player);
            this.playerToIndex[player] = index;
            return true;
        }
        return false;
    }
    
    /**
     * Creates or updates an action in the ActionMatrix.
     * Note that this function expects to be passed an ASM,
     * it is *not* responsible for generating the ASM.
     * @param {Array<Player>} actors
     * @param {Array<Player>} targets
     * @param {function} asm
     * @param {int} subphase
     */
    createOrUpdateAction(actors, targets, asm, subphase) {
        if (subphase > MAX_SUBPHASE_COUNT) {
            return false;
        }
        for (const actor of actors) {
            for (const target of targets) {
                const actorIndex = this.playerToIndex[actor.id];
                const targetIndex = this.playerToIndex[target.id];
                //TODO: Generate subphase grids when a subphase is not found.
                this.grid[subphase][actorIndex][targetIndex] = asm;
            }
        }
    }

    /**
     * Regenerate the cache of state changes.
     * @param {int} from_subphase The subphase to begin generating the cache from. 
     */
    regenerateCache(from_subphase=1) {
        if (from_subphase < 1 || from_subphase > this.grid.length) {
            return;
        }

        
    }

    /**
     * Gets the current game's phase index.
     */
    getCurrentPhase() {
        return this.current_phase;
    }

    /**
     * Gets a player's state at a subphase.
     */
    getPlayerState(player, subphase) {
        const playerIndex = this.playerToIndex[player];
        return this._getPlayerStates(playerIndex, subphase, false);
    }

    /**
     * Gets a player's state at all subphases.
     * @param {Player} player
     */
    getAllPlayerStates(player) {
        const playerIndex = this.playerToIndex[player];
        return this._getPlayerStates(playerIndex, this.grid.length, true);
    }

    /**
     * Gets a player's state at a subphase or a list of states at all 
     * subphases leading up to that subphase.
     * @param {int} playerIndex The index of the player
     * @param {int} subphase The subphase index we wish to get state for
     * @param {boolean} get_all Whether to get states of all subphases or just the state at subphase.
     */
    _getPlayerStates(playerIndex, subphase, get_all=false) {
        if (subphase > this.grid.length) {
            return false;
        }
        let states = [];
        let intermediateState = {};
        // For each subphase:
        for (let i=0; i < subphase; i++) {
            // For each player in the grid:
            for (let j=0; j < this.grid[i].length; j++) {
                // Calculate the modification to the state
                const actorStateMod = this.grid[i][j][playerIndex](this.players[j], this.players[playerIndex])['actor'];
                const targetStateMod = this.grid[i][playerIndex][j](this.players[playerIndex], this.players[j])['target'];
                
                intermediateState = Object.assign(intermediateState, actorStateMod, targetStateMod);
            }
            if (get_all) {
                states.push(Object.assign({}, intermediateState));
            }
        }
        if (get_all) {
            return states;
        } else {
            return intermediateState;
        }
    }
}