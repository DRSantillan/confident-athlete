import { savePageData, loadData } from '../../../db';
import { saveSliders, clearSliders, loadSliders } from '../../../lib';

const inputSuccessFear = document.getElementsByClassName('success-fear-driven');

const saveSuccessFear = () => {
	saveSliders(inputSuccessFear, 'progress', 'successfear');
};

const clearSuccessFear = () => {
	clearSliders(inputSuccessFear, 'progress', 'successfear');
};

const loadSuccessFear = () => {
	loadSliders(inputSuccessFear, 'progress', 'successfear');
};

export { loadSuccessFear, clearSuccessFear, saveSuccessFear };
