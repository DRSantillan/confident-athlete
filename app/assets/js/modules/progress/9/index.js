import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Progress  Day: 9  Type: training-mindset */
const type = 'training-mindset';
const area = 'progress';
const inputTrainingMindset = document.getElementsByClassName(type);

const saveMindset = () => {
	saveTextBoxes(inputTrainingMindset, area, type);
};

const clearMindset = () => {
	clearTextBoxes(inputTrainingMindset, area, type);
};

const loadMindset = () => {
	loadTextBoxes(inputTrainingMindset, area, type);
};

export { saveMindset, clearMindset, loadMindset };
