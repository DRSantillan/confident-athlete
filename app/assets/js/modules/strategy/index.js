import {
	saveCheckBoxes,
	clearCheckBoxes,
	loadCheckBoxes,
	saveTextBoxes,
	clearTextBoxes,
	loadTextBoxes,
	saveSliders,
	clearSliders,
	loadSliders
} from '../../lib';
/* Area: Strategy  Day: 1  Type: fear-self-trust */
const types = [
	'fear-self-trust',
	'perfectionism-traits',
	'trigger-situations',
	'non-functional-mindsets',
	'non-functional-beliefs',
	'ineffective-beliefs',
	'new-functional-beliefs',
	'strict-expectations',
	'expectations',
	'change-expectations',
	'hot-button-reactions',
	'positive-negative-talk',
	'defensive-mindset',
	'mental-performance',
	'social-approval',
	'competition-mindset',
	'common-trust-breakdowns',
	'competitive-situtations',
	'sports-specific-plan',
	'unbeatable-trust',
	'practice-routines',
	'life-roles',
	'recreational-activities'
];

const area = 'strategy';

const chkboxes = document.getElementsByClassName(types[0]);

const saveFearTrust = () => {
	saveCheckBoxes(chkboxes, area, types[0]);
};
const clearFearTrust = () => {
	clearCheckBoxes(chkboxes, area, types[0]);
};

const loadFearTrust = () => {
	loadCheckBoxes(chkboxes, area, types[0]);
};
/* End Area: Strategy  Day: 1 */

/* Area: Strategy  Day: 2  Type: perfectionism-traits,trigger-situations */

const input6Traits = document.getElementsByClassName(types[1]);
const inputTriggerSituations = document.getElementsByClassName(types[2]);

const save6Traits = () => {
	saveTextBoxes(input6Traits, area, types[1]);
};
const clear6Traits = () => {
	clearTextBoxes(input6Traits, area, types[1]);
};
const load6Traits = () => {
	loadTextBoxes(input6Traits, area, types[1]);
};

const saveTriggerSituations = () => {
	saveTextBoxes(inputTriggerSituations, area, types[2]);
};

const clearTriggerSituations = () => {
	clearTextBoxes(inputTriggerSituations, area, types[2]);
};

const loadTriggerSituations = () => {
	loadTextBoxes(inputTriggerSituations, area, types[2]);
};

/* End Area: Strategy  Day: 2 */
/* Area: Strategy  Day: 3  Type: non-functional-mindsets */

const inputTop5 = document.getElementsByClassName(types[3]);

const saveTop5NFMindsets = () => {
	saveTextBoxes(inputTop5, area, types[3]);
};
const clearTop5NFMindsets = () => {
	clearTextBoxes(inputTop5, area, types[3]);
};
const loadTop5NFMindsets = () => {
	loadTextBoxes(inputTop5, area, types[3]);
};
/* End Area: Strategy  Day: 3 */

/* Area: Strategy  Day: 4  Type: non-functional-beliefs,new-functional-beliefs,ineffective-beliefs */

const inputTop5Beliefs = document.getElementsByClassName(types[4]);
const inputIneffectiveBelief = document.getElementsByClassName(types[5]);
const inputNewBelief = document.getElementsByClassName(types[6]);

const saveTop5NFBeliefs = () => {
	saveTextBoxes(inputTop5Beliefs, area, types[4]);
};
const clearTop5NFBeliefs = () => {
	clearTextBoxes(inputTop5Beliefs, area, types[4]);
};
const loadTop5NFBeliefs = () => {
	loadTextBoxes(inputTop5Beliefs, area, types[4]);
};

const saveIneffectiveBelief = () => {
	saveTextBoxes(inputIneffectiveBelief, area, types[5]);
};
const clearIneffectiveBelief = () => {
	clearTextBoxes(inputIneffectiveBelief, area, types[5]);
};
const loadIneffectiveBelief = () => {
	loadTextBoxes(inputIneffectiveBelief, area, types[5]);
};

const saveNewBelief = () => {
	saveTextBoxes(inputNewBelief, area, types[6]);
};
const clearNewBelief = () => {
	clearTextBoxes(inputNewBelief, area, types[6]);
};
const loadNewBelief = () => {
	loadTextBoxes(inputNewBelief, area, types[6]);
};
/* End Area: Strategy  Day: 4 */
/* Area: Strategy  Day: 5  Type: strict-expectations,expectations,change-expectations */

const inputStrictExpect = document.getElementsByClassName(types[7]);
const inputExpect = document.getElementsByClassName(types[8]);
const inputChange = document.getElementsByClassName(types[9]);

const saveStrictExpectations = () => {
	saveTextBoxes(inputStrictExpect, 'strategy', types[7]);
};
const clearStrictExpectations = () => {
	clearTextBoxes(inputStrictExpect, 'strategy', types[7]);
};
const loadStrictExpectations = () => {
	loadTextBoxes(inputStrictExpect, 'strategy', types[7]);
};
const saveExpectations = () => {
	saveTextBoxes(inputExpect, 'strategy', types[8]);
};
const clearExpectations = () => {
	clearTextBoxes(inputExpect, 'strategy', types[8]);
};
const loadExpectations = () => {
	loadTextBoxes(inputExpect, 'strategy', types[8]);
};
const saveChangeExpectations = () => {
	saveTextBoxes(inputChange, 'strategy', types[9]);
};
const clearChangeExpectations = () => {
	clearTextBoxes(inputChange, 'strategy', types[9]);
};
const loadChangeExpectations = () => {
	loadTextBoxes(inputChange, 'strategy', types[9]);
};

/* End Area: Strategy  Day: 5 */
/* Area: Strategy  Day: 6  Type: hot-button-reactions,positive-negative-talk */

const inputTop5HotReaction = document.getElementsByClassName(types[10]);
const inputOldNew = document.getElementsByClassName(types[11]);

const saveTop5HotButtonsReactions = () => {
	saveTextBoxes(inputTop5HotReaction, area, types[10]);
};
const clearTop5HotButtonsReactions = () => {
	clearTextBoxes(inputTop5HotReaction, area, types[10]);
};
const loadTop5HotButtonsReactions = () => {
	loadTextBoxes(inputTop5HotReaction, area, types[10]);
};

const saveOldNewSelfTalk = () => {
	saveTextBoxes(inputOldNew, area, types[11]);
};
const clearOldNewSelfTalk = () => {
	clearTextBoxes(inputOldNew, area, types[11]);
};
const loadOldNewSelfTalk = () => {
	loadTextBoxes(inputOldNew, area, types[11]);
};

/* End Area: Strategy  Day: 6 */
/* Area: Strategy  Day: 7  Type: defensive-mindset,mental-performance */

const chkboxDefMind = document.getElementsByClassName(types[12]);
const inputMenPerf = document.getElementsByClassName(types[13]);

const saveDefensiveMindset = () => {
	saveCheckBoxes(chkboxDefMind, area, types[12]);
};
const clearDefensiveMindset = () => {
	clearCheckBoxes(chkboxDefMind, area, types[12]);
};
const loadDefensiveMindset = () => {
	loadCheckBoxes(chkboxDefMind, area, types[12]);
};
const saveMentalPerformance = () => {
	saveTextBoxes(inputMenPerf, area, types[13]);
};
const clearMentalPerformance = () => {
	clearTextBoxes(inputMenPerf, area, types[13]);
};
const loadMentalPerformance = () => {
	loadTextBoxes(inputMenPerf, area, types[13]);
};

/* End Area: Strategy  Day: 7 */
/* Area: Strategy  Day: 8  Type: social-approval */

const chkboxSocApp = document.getElementsByClassName(types[14]);

const saveSocialApproval = () => {
	saveCheckBoxes(chkboxSocApp, area, types[14]);
};
const clearSocialApproval = () => {
	clearCheckBoxes(chkboxSocApp, area, types[14]);
};

const loadSocialApproval = () => {
	loadCheckBoxes(chkboxSocApp, area, types[14]);
};

/* End Area: Strategy  Day: 8 */

/* Area: Strategy  Day: 9  Type: competition-mindset */

const inputCompMind = document.getElementsByClassName(types[15]);

const saveCompetitionMindset = () => {
	saveSliders(inputCompMind, area, types[15]);
};

const clearCompetitionMindset = () => {
	clearSliders(inputCompMind, area, types[15]);
};

const loadCompetitionMindset = () => {
	loadSliders(inputCompMind, area, types[15]);
};

/* End Area: Strategy  Day: 9 */
/* Area: Strategy  Day: 10  Type: common-breakdowns,competitive-situtations */

const inputComBreakdown = document.getElementsByClassName(types[16]);
const inputCompSit = document.getElementsByClassName(types[17]);

const saveCommonBreakDowns = () => {
	saveTextBoxes(inputComBreakdown, area, types[16]);
};
const clearCommonBreakDowns = () => {
	clearTextBoxes(inputComBreakdown, area, types[16]);
};
const loadCommonBreakDowns = () => {
	loadTextBoxes(inputComBreakdown, area, types[16]);
};

const saveCompetitiveSituations = () => {
	saveTextBoxes(inputCompSit, area, types[17]);
};

const clearCompetitiveSituations = () => {
	clearTextBoxes(inputCompSit, area, types[17]);
};

const loadCompetitiveSituations = () => {
	loadTextBoxes(inputCompSit, area, types[17]);
};

/* End Area: Strategy  Day: 10 */
/* Area: Strategy  Day: 11  Type: sports-specific-plan */

const inputPlan = document.getElementsByClassName(types[18]);

const saveSportsPlan = () => {
	saveTextBoxes(inputPlan, area, types[18]);
};
const clearSportsPlan = () => {
	clearTextBoxes(inputPlan, area, types[18]);
};
const loadSportsPlan = () => {
	loadTextBoxes(inputPlan, area, types[18]);
};

/* End Area: Strategy  Day: 11 */
/* Area: Strategy  Day: 12  Type: unbeatable-trust */

const inputUnbeatTrust = document.getElementsByClassName(types[19]);

const saveUnbeatableTrust = () => {
	saveTextBoxes(inputUnbeatTrust, area, types[19]);
};
const clearUnbeatableTrust = () => {
	clearTextBoxes(inputUnbeatTrust, area, types[19]);
};
const loadUnbeatableTrust = () => {
	loadTextBoxes(inputUnbeatTrust, area, types[19]);
};

/* End Area: Strategy  Day: 12 */
/* Area: Strategy  Day: 13  Type: practice-routines */

const inputPractice = document.getElementsByClassName(types[20]);

const savePracticeRoutines = () => {
	saveTextBoxes(inputPractice, area, types[20]);
};
const clearPracticeRoutines = () => {
	clearTextBoxes(inputPractice, area, types[20]);
};
const loadPracticeRoutines = () => {
	loadTextBoxes(inputPractice, area, types[20]);
};

/* End Area: Strategy  Day: 13 */
/* Area: Strategy  Day: 14  Type: life-roles,recreational-activities */

const inputRoles = document.getElementsByClassName(types[21]);
const inputRec = document.getElementsByClassName(types[22]);

const saveRoles = () => {
	saveTextBoxes(inputRoles, area, types[21]);
};
const clearRoles = () => {
	clearTextBoxes(inputRoles, area, types[21]);
};
const loadRoles = () => {
	loadTextBoxes(inputRoles, area, types[21]);
};
const saveRecretional = () => {
	saveTextBoxes(inputRec, area, types[22]);
};
const clearRecretional = () => {
	clearTextBoxes(inputRec, area, types[22]);
};
const loadRecretional = () => {
	loadTextBoxes(inputRec, area, types[22]);
};

/* End Area: Strategy  Day: 14 */
export {
	saveFearTrust,
	clearFearTrust,
	loadFearTrust,
	save6Traits,
	clear6Traits,
	load6Traits,
	loadTriggerSituations,
	clearTriggerSituations,
	saveTriggerSituations,
	saveTop5NFMindsets,
	clearTop5NFMindsets,
	loadTop5NFMindsets,
	saveTop5NFBeliefs,
	clearTop5NFBeliefs,
	loadTop5NFBeliefs,
	saveIneffectiveBelief,
	clearIneffectiveBelief,
	loadIneffectiveBelief,
	saveNewBelief,
	clearNewBelief,
	loadNewBelief,
	saveStrictExpectations,
	clearStrictExpectations,
	loadStrictExpectations,
	saveExpectations,
	clearExpectations,
	loadExpectations,
	saveChangeExpectations,
	clearChangeExpectations,
	loadChangeExpectations,
	saveTop5HotButtonsReactions,
	clearTop5HotButtonsReactions,
	loadTop5HotButtonsReactions,
	saveOldNewSelfTalk,
	clearOldNewSelfTalk,
	loadOldNewSelfTalk,
	saveDefensiveMindset,
	clearDefensiveMindset,
	loadDefensiveMindset,
	saveMentalPerformance,
	clearMentalPerformance,
	loadMentalPerformance,
	saveSocialApproval,
	clearSocialApproval,
	loadSocialApproval,
	loadCompetitionMindset,
	clearCompetitionMindset,
	saveCompetitionMindset,
	saveCommonBreakDowns,
	clearCommonBreakDowns,
	loadCommonBreakDowns,
	loadCompetitiveSituations,
	clearCompetitiveSituations,
	saveCompetitiveSituations,
	saveSportsPlan,
	clearSportsPlan,
	loadSportsPlan,
	saveUnbeatableTrust,
	clearUnbeatableTrust,
	loadUnbeatableTrust,
	savePracticeRoutines,
	clearPracticeRoutines,
	loadPracticeRoutines,
	saveRoles,
	clearRoles,
	loadRoles,
	saveRecretional,
	clearRecretional,
	loadRecretional
};
