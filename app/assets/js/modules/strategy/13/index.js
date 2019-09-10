import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
const inputPractice = document.getElementsByClassName('practice-routines');

const savePracticeRoutines = () => {
	saveTextBoxes(inputPractice, 'strategy', 'practiceroutines');
};
const clearPracticeRoutines = () => {
	clearTextBoxes(inputPractice, 'strategy', 'practiceroutines');
};
const loadPracticeRoutines = () => {
	loadTextBoxes(inputPractice, 'strategy', 'practiceroutines');
};

export { savePracticeRoutines, clearPracticeRoutines, loadPracticeRoutines };
