// Some common-sense maximums to ensure the system doesn't become unbearably laggy
// with realtime updates.
// If we end up hitting performance issues, we can switch to a manual recalculation
// system and do away with these limits.

export const MAX_SUBPHASE_COUNT = 1000;
export const MAX_SUBPHASE_TYPES = 10;
export const MAX_PHASE_TYPES = 5;
export const MAX_PLAYERS = 100;