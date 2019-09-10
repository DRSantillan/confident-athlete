import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Progress  Day: 3  Type: top5-characteristics*/
const type = 'top5-characteristics';
const area = 'progress';
const inputTop5Char = document.getElementsByClassName(type);

const saveTop5Char = () => {
	saveTextBoxes(inputTop5Char, area, type);
};

const clearTop5Char = () => {
	clearTextBoxes(inputTop5Char, area, type);
};

const loadTop5Char = () => {
	loadTextBoxes(inputTop5Char, area, type);
};

export { saveTop5Char, clearTop5Char, loadTop5Char };
