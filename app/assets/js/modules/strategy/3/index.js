import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 3  Type: non-functional-mindsets */
const type = 'non-functional-mindsets';
const area = 'strategy';
const inputTop5 = document.getElementsByClassName(type);

const saveTop5NFMindsets = () => {
	saveTextBoxes(inputTop5, area, type);
};
const clearTop5NFMindsets = () => {
	clearTextBoxes(inputTop5, area, type);
};
const loadTop5NFMindsets = () => {
	loadTextBoxes(inputTop5, area, type);
};

export { saveTop5NFMindsets, clearTop5NFMindsets, loadTop5NFMindsets };
