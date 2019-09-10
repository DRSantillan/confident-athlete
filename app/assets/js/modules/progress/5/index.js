import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';

const inputExpectConf = document.getElementsByClassName('expect-confidence');

const saveExpectConfidence = () => {
	saveTextBoxes(inputExpectConf, 'progress', 'expectations');
};

const clearExpectConfidence = () => {
	clearTextBoxes(inputExpectConf, 'progress', 'expectations');
};

const loadExpectConfidence = () => {
	loadTextBoxes(inputExpectConf, 'progress', 'expectations');
};

export { saveExpectConfidence, clearExpectConfidence, loadExpectConfidence };
