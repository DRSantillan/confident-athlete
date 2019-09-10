import { savePageData, loadData } from '../../../db';
import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';

const inputTrainingMindset = document.getElementsByClassName(
	'training-mindset'
);

const saveMindset = () => {
	saveTextBoxes(inputTrainingMindset, 'progress', 'mindset');
};

const clearMindset = () => {
	clearTextBoxes(inputTrainingMindset, 'progress', 'mindset');
};

const loadMindset = () => {
	loadTextBoxes(inputTrainingMindset, 'progress', 'mindset');
};

export { saveMindset, clearMindset, loadMindset };
