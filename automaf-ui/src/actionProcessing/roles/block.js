import { default_action_checks } from '../roleUtil';
// Defines ASMs for when a block is an actor.

function default_block_outcome(actor, target) {
    const default_outcome = default_action_checks(actor, target);
    if (default_outcome) {
        return default_outcome;
    }

    const outcome = {
        'actor': {},
        'target': {
            'blocked': true,
        },
    };
    return outcome;
}

export const block_map = {
    block_block: default_block_outcome,
    block_investigate: default_block_outcome,
    block_item_generator: default_block_outcome,
    block_phase_kill: default_block_outcome,
    block_villager: default_block_outcome,
};
