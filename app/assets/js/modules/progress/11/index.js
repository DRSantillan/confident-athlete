import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Progress  Day: 11  Type: functional-mindset */
const type = 'functional-mindset';
const area = 'progress';
const inputFuncMind = document.getElementsByClassName(type);

const saveFunctionalMindset = () => {
	saveTextBoxes(inputFuncMind, area, type);
};

const clearFunctionalMindset = () => {
	clearTextBoxes(inputFuncMind, area, type);
};

const loadFunctionalMindset = () => {
	loadTextBoxes(inputFuncMind, area, type);
};

export { saveFunctionalMindset, clearFunctionalMindset, loadFunctionalMindset };
