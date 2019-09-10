import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 13  Type: practice-routines */
const type = 'practice-routines';
const area = 'strategy';
const inputPractice = document.getElementsByClassName(type);

const savePracticeRoutines = () => {
	saveTextBoxes(inputPractice, area, type);
};
const clearPracticeRoutines = () => {
	clearTextBoxes(inputPractice, area, type);
};
const loadPracticeRoutines = () => {
	loadTextBoxes(inputPractice, area, type);
};

export { savePracticeRoutines, clearPracticeRoutines, loadPracticeRoutines };
