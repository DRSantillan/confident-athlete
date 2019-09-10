import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
const inputTop5 = document.getElementsByClassName('top5-mindsets');

const saveTop5NFMindsets = () => {
	saveTextBoxes(inputTop5, 'strategy', 'top5mindsets');
};
const clearTop5NFMindsets = () => {
	clearTextBoxes(inputTop5, 'strategy', 'top5mindsets');
};
const loadTop5NFMindsets = () => {
	loadTextBoxes(inputTop5, 'strategy', 'top5mindsets');
};

export { saveTop5NFMindsets, clearTop5NFMindsets, loadTop5NFMindsets };
