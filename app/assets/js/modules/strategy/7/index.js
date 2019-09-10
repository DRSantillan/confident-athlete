import {
	saveCheckBoxes,
	clearCheckBoxes,
	loadCheckBoxes,
	saveTextBoxes,
	clearTextBoxes,
	loadTextBoxes
} from '../../../lib';
/* Area: Strategy  Day: 7  Type: defensive-mindset,mental-performance */
const type = 'defensive-mindset';
const type2 = 'mental-performance';
const area = 'strategy';
const chkboxDefMind = document.getElementsByClassName(type);
const inputMenPerf = document.getElementsByClassName(type2);

const saveDefensiveMindset = () => {
	saveCheckBoxes(chkboxDefMind, area, type);
};
const clearDefensiveMindset = () => {
	clearCheckBoxes(chkboxDefMind, area, type);
};
const loadDefensiveMindset = () => {
	loadCheckBoxes(chkboxDefMind, area, type);
};
const saveMentalPerformance = () => {
	saveTextBoxes(inputMenPerf, area, type2);
};
const clearMentalPerformance = () => {
	clearTextBoxes(inputMenPerf, area, type2);
};
const loadMentalPerformance = () => {
	loadTextBoxes(inputMenPerf, area, type2);
};

export {
	saveDefensiveMindset,
	clearDefensiveMindset,
	loadDefensiveMindset,
	saveMentalPerformance,
	clearMentalPerformance,
	loadMentalPerformance
};
