import { savePageData, loadData } from '../../../db';
import {
	getProgram,
	getPage,
	clearTextBoxes,
	saveTextBoxes,
	loadTextBoxes
} from '../../../lib';

const inputTop5Char = document.getElementsByClassName('top5');

const program = getProgram();
const page = getPage();

const saveTop5Char = () => {
	saveTextBoxes(inputTop5Char, 'progress', 'top5');
};

const clearTop5Char = () => {
	clearTextBoxes(inputTop5Char, 'progress', 'top5');
};

const loadTop5Char = () => {
	loadTextBoxes(inputTop5Char, 'progress', 'top5');
};

export { saveTop5Char, clearTop5Char, loadTop5Char };
