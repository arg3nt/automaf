import { ALIGNMENT_TYPES } from '../alignmentTypes';
// Defines ASMs for when an investigate is acting.

function default_investigate_action(actor, target) {
    const default_outcome = default_action_checks(actor, target);
    if (default_outcome) {
        return default_outcome;
    }

    let alignment_result;
    switch(actor.investigate_type) {
        case INVESTIGATE_TYPES.INFALLIBLE:
            alignment_result = target.alignment;
            break;
        case INVESTIGATE_TYPES.NAIVE:
            alignment_result = ALIGNMENT_TYPES.TOWN;
            break;
        case INVESTIGATE_TYPES.PARANOID:
            alignment_result = ALIGNMENT_TYPES.MAFIA;
            break;
        case INVESTIGATE_TYPES.INSANE:
            alignment_result = !target.apparent_alignment;
            break;
        case INVESTIGATE_TYPES.NORMAL:
        default:
            alignment_result = target.apparent_alignment;
            break;
    };

    const outcome = {
        'messages': {
            [actor.player_id]: `You investigated ${target.player_name} and found them to be ${alignment_result}.`
        }
    };
    return outcome;
}

export const INVESTIGATE_TYPES = {
    NORMAL: 'normal',
    INSANE: 'insane',
    NAIVE: 'naive',
    PARANOID: 'paranoid',
    INFALLIBLE: 'infallible',
};

export const investigate_map = {
    investigate_block: default_investigate_action,
    invesigate_investigate: default_investigate_action,
    investigate_item_generator: default_investigate_action,
    investigate_phase_kill: default_investigate_action,
    investigate_villager: default_investigate_action
};
