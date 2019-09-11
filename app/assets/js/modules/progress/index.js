import {
	saveTextBoxes,
	clearTextBoxes,
	loadTextBoxes,
	saveSliders,
	clearSliders,
	loadSliders,
	saveTxtChecks,
	loadTxtChecks,
	clearTxtChecks,
	saveCheckBoxes,
	clearCheckBoxes,
	loadCheckBoxes
} from '../../lib';

const types = [
	'self-awareness',
	'success-fear',
	'top5-characteristics',
	'functional-mindset-performance',
	'performance-expectations',
	'hot-buttons',
	'process-goals',
	'mind-reader',
	'training-mindset',
	'trust-breakdown',
	'functional-mindset',
	'competition-mentality',
	'life-balance'
];
const area = 'progress';
/* Area: Progress  Day: 1  Type: Awareness*/

const inputAwareness = document.getElementsByClassName(types[0]);

const saveSelfAwareness = () => {
	saveTextBoxes(inputAwareness, area, types[0]);
};
const clearSelfAwareness = () => {
	clearTextBoxes(inputAwareness, area, types[0]);
};
const loadSelfAwareness = () => {
	console.log(types[0]);
	loadTextBoxes(inputAwareness, area, types[0]);
};
/* End  Area: Progress  Day: 1*/

/* Area: Progress  Day: 2  Type: success-fear */

const inputSuccessFear = document.getElementsByClassName(types[1]);

const saveSuccessFear = () => {
	saveSliders(inputSuccessFear, area, types[1]);
};

const clearSuccessFear = () => {
	clearSliders(inputSuccessFear, area, types[1]);
};

const loadSuccessFear = () => {
	loadSliders(inputSuccessFear, area, types[1]);
};
/* End  Area: Progress  Day: 2*/
/* Area: Progress  Day: 3  Type: top5-characteristics */
const inputTop5Char = document.getElementsByClassName(types[2]);

const saveTop5Characteristics = () => {
	saveTextBoxes(inputTop5Char, area, types[2]);
};

const clearTop5Characteristics = () => {
	clearTextBoxes(inputTop5Char, area, types[2]);
};

const loadTop5Characteristics = () => {
	loadTextBoxes(inputTop5Char, area, types[2]);
};
/* End  Area: Progress  Day: 3*/

/* Area: Progress  Day: 4  Type: functional-mindset-performance */
const inputPerformFunctional = document.getElementsByClassName(types[3]);

const saveFunctionalMindsetPerformance = () => {
	saveSliders(inputPerformFunctional, area, types[3]);
};

const clearFunctionalMindsetPerformance = () => {
	clearSliders(inputPerformFunctional, area, types[3]);
};

const loadFunctionalMindsetPerformance = () => {
	loadSliders(inputPerformFunctional, area, types[3]);
};
/* End  Area: Progress  Day: 4*/

/* Area: Progress  Day: 5  Type: performance-expectations */

const inputExpectConf = document.getElementsByClassName(types[4]);

const savePerformanceExpectations = () => {
	saveTextBoxes(inputExpectConf, area, types[4]);
};

const clearPerformanceExpectations = () => {
	clearTextBoxes(inputExpectConf, area, types[4]);
};

const loadPerformanceExpectations = () => {
	loadTextBoxes(inputExpectConf, area, types[4]);
};
/* End  Area: Progress  Day: 5*/

/* Area: Progress  Day: 6  Type: hot-buttons */

const inputHotButtons = document.getElementsByClassName(types[5]);

const saveHotButtons = () => {
	saveTextBoxes(inputHotButtons, area, types[5]);
};

const clearHotButtons = () => {
	clearTextBoxes(inputHotButtons, area, types[5]);
};

const loadHotButtons = () => {
	loadTextBoxes(inputHotButtons, area, types[5]);
};
/* End  Area: Progress  Day: 6 */
/* Area: Progress  Day: 7  Type: process-goals */

const inputProcessGoal = document.getElementsByClassName(types[6]);

const saveProcessGoals = () => {
	saveTextBoxes(inputProcessGoal, area, types[6]);
};

const clearProcessGoals = () => {
	clearTextBoxes(inputProcessGoal, area, types[6]);
};

const loadProcessGoals = () => {
	loadTextBoxes(inputProcessGoal, area, types[6]);
};

/* End  Area: Progress  Day: 7 */

/* Area: Progress  Day: 8  Type: mind-reader */

const inputMindRead = document.getElementsByClassName(types[7]);

const saveMindReader = () => {
	saveTxtChecks(inputMindRead, area, types[7]);
};

const clearMindReader = () => {
	clearTxtChecks(inputMindRead, area, types[7]);
};

const loadMindReader = () => {
	loadTxtChecks(inputMindRead, area, types[7]);
};
/* End  Area: Progress  Day: 8*/
/* Area: Progress  Day: 9  Type: training-mindset */

const inputTrainingMindset = document.getElementsByClassName(types[8]);

const saveMindset = () => {
	saveTextBoxes(inputTrainingMindset, area, types[8]);
};

const clearMindset = () => {
	clearTextBoxes(inputTrainingMindset, area, types[8]);
};

const loadMindset = () => {
	loadTextBoxes(inputTrainingMindset, area, types[8]);
};
/* End  Area: Progress  Day: 9 */
/* Area: Progress  Day: 10  Type: trust-breakdown */

const inputBreakDown = document.getElementsByClassName(types[9]);

const saveTrustBreakdown = () => {
	saveTextBoxes(inputBreakDown, area, types[9]);
};

const clearTrustBreakdown = () => {
	clearTextBoxes(inputBreakDown, area, types[9]);
};

const loadTrustBreakdown = () => {
	loadTextBoxes(inputBreakDown, area, types[9]);
};
/* End  Area: Progress  Day: 10*/
/* Area: Progress  Day: 11  Type: functional-mindset */

const inputFuncMind = document.getElementsByClassName(types[10]);

const saveFunctionalMindset = () => {
	saveTextBoxes(inputFuncMind, area, types[10]);
};

const clearFunctionalMindset = () => {
	clearTextBoxes(inputFuncMind, area, types[10]);
};

const loadFunctionalMindset = () => {
	loadTextBoxes(inputFuncMind, area, types[10]);
};

/* End  Area: Progress  Day: 11*/
/* Area: Progress  Day: 12  Type: competition-mentality */

const inputCompMental = document.getElementsByClassName(types[11]);

const saveCompetitionMentality = () => {
	saveSliders(inputCompMental, area, types[11]);
};

const clearCompetitionMentality = () => {
	clearSliders(inputCompMental, area, types[11]);
};

const loadCompetitionMentality = () => {
	loadSliders(inputCompMental, area, types[11]);
};
/* End  Area: Progress  Day: 12*/
/* Area: Progress  Day: 13  Type: performers-practice-mindset */

const chkboxes = document.getElementsByClassName(types[12]);

const savePracticeMindset = () => {
	saveCheckBoxes(chkboxes, area, types[12]);
};

const clearPracticeMindset = () => {
	clearCheckBoxes(chkboxes, area, types[12]);
};

const loadPracticeMindset = () => {
	loadCheckBoxes(chkboxes, area, types[12]);
};
/* End  Area: Progress  Day: 13*/
/* Area: Progress  Day: 14  Type: life-balance */

const inputLifeBalance = document.getElementsByClassName(types[13]);

const saveLifeBalance = () => {
	saveSliders(inputLifeBalance, area, types[13]);
};

const clearLifeBalance = () => {
	clearSliders(inputLifeBalance, area, types[13]);
};

const loadLifeBalance = () => {
	loadSliders(inputLifeBalance, area, types[13]);
};
/* End  Area: Progress  Day: 14*/
export {};
export {
	saveSelfAwareness,
	clearSelfAwareness,
	loadSelfAwareness,
	loadSuccessFear,
	clearSuccessFear,
	saveSuccessFear,
	saveTop5Characteristics,
	clearTop5Characteristics,
	loadTop5Characteristics,
	loadFunctionalMindsetPerformance,
	clearFunctionalMindsetPerformance,
	saveFunctionalMindsetPerformance,
	savePerformanceExpectations,
	clearPerformanceExpectations,
	loadPerformanceExpectations,
	saveHotButtons,
	clearHotButtons,
	loadHotButtons,
	saveProcessGoals,
	clearProcessGoals,
	loadProcessGoals,
	saveMindReader,
	clearMindReader,
	loadMindReader,
	saveMindset,
	clearMindset,
	loadMindset,
	saveTrustBreakdown,
	clearTrustBreakdown,
	loadTrustBreakdown,
	saveFunctionalMindset,
	clearFunctionalMindset,
	loadFunctionalMindset,
	loadCompetitionMentality,
	clearCompetitionMentality,
	saveCompetitionMentality,
	savePracticeMindset,
	clearPracticeMindset,
	loadPracticeMindset,
	loadLifeBalance,
	clearLifeBalance,
	saveLifeBalance
};
