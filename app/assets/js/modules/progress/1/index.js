import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';

/* Area: Progress  Day: 1  Type: Awareness*/
const type = 'self-awareness';
const area = 'progress';
const inputAwareness = document.getElementsByClassName(type);

const saveAwareness = () => {
	saveTextBoxes(inputAwareness, area, type);
};

const clearAwareness = () => {
	clearTextBoxes(inputAwareness, area, type);
};

const loadAwareness = () => {
	loadTextBoxes(inputAwareness, area, type);
};

export { saveAwareness, clearAwareness, loadAwareness };
