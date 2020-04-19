import { empty_action } from '../roleUtil';
// Defines ASMs for when a villager acts on anyone.
// Since a villager has no power, this literally does nothing.


export const villager_map = {
    villager_block: empty_action,
    villager_investigate: empty_action,
    villager_item_generator: empty_action,
    villager_phase_kill: empty_action,
    villager_villager: empty_action,
};
