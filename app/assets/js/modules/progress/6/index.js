import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Progress  Day: 6  Type: hot-buttons */
const type = 'hot-buttons';
const area = 'progress';
const inputHotButtons = document.getElementsByClassName(type);

const saveHotButtons = () => {
	saveTextBoxes(inputHotButtons, area, type);
};

const clearHotButtons = () => {
	clearTextBoxes(inputHotButtons, area, type);
};

const loadHotButtons = () => {
	loadTextBoxes(inputHotButtons, area, type);
};

export { saveHotButtons, clearHotButtons, loadHotButtons };
