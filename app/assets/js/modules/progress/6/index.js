import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';

const inputHotButtons = document.getElementsByClassName('hot-buttons');

const saveHotButtons = () => {
	saveTextBoxes(inputHotButtons, 'progress', 'hotbuttons');
};

const clearHotButtons = () => {
	clearTextBoxes(inputHotButtons, 'progress', 'hotbuttons');
};

const loadHotButtons = () => {
	loadTextBoxes(inputHotButtons, 'progress', 'hotbuttons');
};

export { saveHotButtons, clearHotButtons, loadHotButtons };
