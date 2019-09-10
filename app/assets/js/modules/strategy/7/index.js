import {
	saveCheckBoxes,
	clearCheckBoxes,
	loadCheckBoxes,
	saveTextBoxes,
	clearTextBoxes,
	loadTextBoxes
} from '../../../lib';

const chkboxDefMind = document.getElementsByClassName('defensive-mindset');
const inputMenPerf = document.getElementsByClassName('mental-performance');

const saveDefensiveMindset = () => {
	saveCheckBoxes(chkboxDefMind, 'strategy', 'defensivemindset');
};
const clearDefensiveMindset = () => {
	clearCheckBoxes(chkboxDefMind, 'strategy', 'defensivemindset');
};
const loadDefensiveMindset = () => {
	loadCheckBoxes(chkboxDefMind, 'strategy', 'defensivemindset');
};
const saveMentalPerformance = () => {
	saveTextBoxes(inputMenPerf, 'strategy', 'mentalperformance');
};
const clearMentalPerformance = () => {
	clearTextBoxes(inputMenPerf, 'strategy', 'mentalperformance');
};
const loadMentalPerformance = () => {
	loadTextBoxes(inputMenPerf, 'strategy', 'mentalperformance');
};

export {
	saveDefensiveMindset,
	clearDefensiveMindset,
	loadDefensiveMindset,
	saveMentalPerformance,
	clearMentalPerformance,
	loadMentalPerformance
};
