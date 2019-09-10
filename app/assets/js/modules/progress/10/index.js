import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';

const inputBreakDown = document.getElementsByClassName('trust-breakdown');

const saveTrustBreakdown = () => {
	saveTextBoxes(inputBreakDown, 'progress', 'breakdown');
};

const clearTrustBreakdown = () => {
	clearTextBoxes(inputBreakDown, 'progress', 'breakdown');
};

const loadTrustBreakdown = () => {
	loadTextBoxes(inputBreakDown, 'progress', 'breakdown');
};

export { saveTrustBreakdown, clearTrustBreakdown, loadTrustBreakdown };
