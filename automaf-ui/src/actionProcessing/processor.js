import { Player } from '../data/Player';
import { block_map } from './roles/block';
import { investigate_map } from './roles/investigate';
import { villager_map } from './roles/villager';

/*
Concepts:
  * Abstract State Modifier (ASM): a pure function which
    accepts an actor state and a target state and
    returns the changed aspects of the actor and target states
    as the result of an action being taken.
    An ASM abides by the following rules:
    * It must not assume that an actor is capable of
      acting just because the ASM exists. It should check
      to ensure the actor can act before acting.
    * It must be deterministic.
    * It must be pure (in the sense that Redux uses pure).
    * It must only return the *changed* fields in a state, 
      not an entire state.
    * All data returned must be immutable.
    * If nothing about the state changes as the result of an action, 
      it should return an empty object.
    * If a system of ASMs exists where two ASMs could generate
      contradictory outcomes for a player's state, those ASMs must NEVER
      be scheduled in the same subphase.
*/

/*
List of all possible fields in a player's state:
Note: Not all players will have all of these fields defined.
Note: a + indicates that the field is mandatory.
Note: a * indicates that the field is immutable and should not be changed.

+ alignment: The character's real alignment.
+ apparent_alignment: What the character's alignment will appear as on investigates.
blocked: If true, the player is currently blocked. Default: false.
+ character_name: The player's character name.
+ full_name*: The "player_name (character_name)" combo.
+ items: A list of items possessed by the player. 
+ living: If true, the player is alive.
+ player_id*: The player's unique identifier.
+ player_name*: The player's real name.
+ role: The player's role.
item_generator_type: The type of item that an item generator will generate. Default: null
phase_kill_type: The type of phase that a phase kill may kill during (normally "day" or "night"). Defualt: null
investigate_type: The type of investigate that an investigator is. Default: normal.
*/

/**Returns the result of action being taken
 * @param {Player} actor 
 * @param {Player} target
 * @param {string} type the type of action being taken
 */
function processAction(actor, target, type, subphase) {

}

const actionMap = Object.assign(
  block_map,
  investigate_map,
  villager_map,
);
