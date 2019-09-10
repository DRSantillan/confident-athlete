import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Progress  Day: 10  Type: trust-breakdown */
const type = 'trust-breakdown';
const area = 'progress';
const inputBreakDown = document.getElementsByClassName(type);

const saveTrustBreakdown = () => {
	saveTextBoxes(inputBreakDown, area, type);
};

const clearTrustBreakdown = () => {
	clearTextBoxes(inputBreakDown, area, type);
};

const loadTrustBreakdown = () => {
	loadTextBoxes(inputBreakDown, area, type);
};

export { saveTrustBreakdown, clearTrustBreakdown, loadTrustBreakdown };
