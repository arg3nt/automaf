/**
 * Creates an empty action where nothing happens!
 * Most useful in cases where an actor's state prevents
 * them from acting.
 */
export function empty_action(_, _) {
    const outcome = {
        'actor': {},
        'target': {}
    };
    return outcome;
}

/**
 * Does a standard set of action checks to determine whether
 * an actor can actually act. Returns null if the actor's
 * action can proceed as normal.

 * @param {object} actor The actor's state prior to acting.
 * @param {object} target The target's state prior to acting.
 */
export function default_action_checks(actor, target) {
    // Check for states which would block an action.
    if (actor.blocked || !actor.living) {
        return emptyAction(actor, target);
    }
    return null;
}