import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';

const inputFuncMind = document.getElementsByClassName('functional-mindset');

const saveFunctionalMindset = () => {
	saveTextBoxes(inputFuncMind, 'progress', 'mindset');
};

const clearFunctionalMindset = () => {
	clearTextBoxes(inputFuncMind, 'progress', 'mindset');
};

const loadFunctionalMindset = () => {
	loadTextBoxes(inputFuncMind, 'progress', 'mindset');
};

export { saveFunctionalMindset, clearFunctionalMindset, loadFunctionalMindset };
