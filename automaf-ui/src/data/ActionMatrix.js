import { Player } from "./Player";

/**
 * Represents the set of all actions recorded for a particular game.
 * There should be one ActionMatrix for each game.
 */
export default class ActionMatrix {
    /**
     * Initialize an ActionMatrix.
     * @param {Array<Player>} players A list of players (player indices must
     *  correspond to grid indices).
     * @param {Array<Array<function>>} grid A 3d array of function pointers.
     *  All values should be ASMs. The first dimension represents the subphase number,
     *  the second dimension represents the actor, and the third dimension represents
     *  the target.
     */
    ActionMatrix(players=null, grid=null) {
        // Create a map from players to indices.
        this.playerToIndex = {};
        for (let i=0; i<players.length; i++) {
            const player = players[i];
            this.playerToIndex[player] = i;
        }

        this.players = players;
        this.grid = grid;
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
        for (const actor of actors) {
            for (const target of targets) {
                const actorIndex = this.playerToIndex[actor];
                const targetIndex = this.playerToIndex[target];
                this.grid[subphase][actorIndex][targetIndex] = asm;
            }
        }
    }

    /**
     * Gets the current game's subphase.
     */
    getCurrentSubPhase() {
        return this.grid.length-1;
    }
}