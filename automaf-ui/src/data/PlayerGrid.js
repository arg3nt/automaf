import { Player } from './Player';

/**
 * PlayerGrid tracks the list of Players and how their
 * state changes throughout the game.
 */
export default class PlayerGrid {
    /**
     * Inititializes a PlayerGrid.
     * @param {Array<Player>} players 
     * @param {ActionGrid} grid
     */
    PlayerGrid(players, grid=null) {
        this.players = players;
        this.grid = grid;
    }

}