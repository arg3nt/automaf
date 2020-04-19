import { PlayerGrid } from './PlayerGrid';

// Represents the types of subphases.
const DEFAULT_SUBPHASE_TYPES = {
    "INSTANT": "instant",               // For actions that instantly take place (during the phase)
    "PREEMPTIVE": "preemptive",         // For actions that pre-empt other end-of-phase actions (eg blocks)
    "END_OF_PHASE": "end_of_phase",     // The normal place for end-of-phase actions (eg kills)
    "POST_PHASE": "post_phase",         // The place for end-of-phase actions which take place after the normal end-of-phase actions (eg revives)
};

// Represents the types of phases.
const DEFAULT_PHASE_TYPES = [
    "DAY",
    "NIGHT",
];

export function GameBuilder(playerGrid, host, name, subphase_types=DEFAULT_SUBPHASE_TYPES, phase_types=DEFAULT_PHASE_TYPES) {
    //TODO: validation
    return GameImpl(playerGrid, host, name, subphase_types, phase_types);
}

export class Game {};

/**
 * Represents a game of Mafia.
 */
class GameImpl extends Game {
    /**
     * Initialize a Game.
     * @param {PlayerGrid} playerGrid The PlayerGrid for the game.
     * @param {string} host The game's host.
     * @param {string} name The game's name.
     * @param {object} subphase_types The types of subphases that can exist in the game.
     * @param {phase_types} phase_types The types of phases that can exist in the game.
     */
    constructor(playerGrid, host, name, subphase_types, phase_types) {
        this.host = host;
        this.name = name;
        this.pg = playerGrid;
        this.subphase_types = subphase_types;
        this.phase_types = phase_types;
    }

    getPhaseName() {
        const phaseNum = parseInt(this.pg.grid.getCurrentPhase()/this.subphase_types.length);
        const displayPhaseNum = parseInt(phaseNum/this.phase_types.length) + 1;
    
        const phaseTypeIndex = phaseNum % PHASE_TYPES.length;
        const phaseName = PHASE_TYPES[phaseTypeIndex] + " " + displayPhaseNum.toString();
        return phaseName;
    }
}