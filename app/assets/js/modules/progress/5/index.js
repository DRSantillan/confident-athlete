import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Progress  Day: 5  Type: performance-expectations */
const type = 'performance-expectations';
const area = 'progress';
const inputExpectConf = document.getElementsByClassName(type);

const saveExpectConfidence = () => {
	saveTextBoxes(inputExpectConf, area, type);
};

const clearExpectConfidence = () => {
	clearTextBoxes(inputExpectConf, area, type);
};

const loadExpectConfidence = () => {
	loadTextBoxes(inputExpectConf, area, type);
};

export { saveExpectConfidence, clearExpectConfidence, loadExpectConfidence };
