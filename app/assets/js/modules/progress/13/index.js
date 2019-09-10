import { saveCheckBoxes, clearCheckBoxes, loadCheckBoxes } from '../../../lib';
/* Area: Progress  Day: 13  Type: performers-practice-mindset */
const type = 'performers-practice-mindset';
const area = 'progress';
const chkboxes = document.getElementsByClassName(type);

const savePracticeMindset = () => {
	saveCheckBoxes(chkboxes, area, type);
};

const clearPracticeMindset = () => {
	clearCheckBoxes(chkboxes, area, type);
};

const loadPracticeMindset = () => {
	loadCheckBoxes(chkboxes, area, type);
};
export { savePracticeMindset, clearPracticeMindset, loadPracticeMindset };
