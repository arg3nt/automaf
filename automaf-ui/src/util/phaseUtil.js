/**
 * Utilities for displaying phase data.
 */

/**
 * Converts a subphase number to a name.
 * @param {int} subphase 
 */
function subphaseToName(subphase) {
    const phaseNum = parseInt(subphase/SUBPHASE_TYPES.length);
    const displayPhaseNum = parseInt(phaseNum/PHASE_TYPES) + 1;

    const phaseTypeIndex = phaseNum % PHASE_TYPES.length;
    const phaseName = PHASE_TYPES[phaseTypeIndex] + " " + displayPhaseNum.toString();
    return phaseName;
}