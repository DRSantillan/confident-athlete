import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';

const inputAwareness = document.getElementsByClassName('awareness');

const saveAwareness = () => {
	saveTextBoxes(inputAwareness, 'progress', 'awareness');
};

const clearAwareness = () => {
	clearTextBoxes(inputAwareness, 'progress', 'awareness');
};

const loadAwareness = () => {
	loadTextBoxes(inputAwareness, 'progress', 'awareness');
};

export { saveAwareness, clearAwareness, loadAwareness };
