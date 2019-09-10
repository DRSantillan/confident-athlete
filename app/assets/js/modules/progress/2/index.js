import { saveSliders, clearSliders, loadSliders } from '../../../lib';
/* Area: Progress  Day: 2  Type: success-fear */
const type = 'success-fear';
const area = 'progress';
const inputSuccessFear = document.getElementsByClassName(type);

const saveSuccessFear = () => {
	saveSliders(inputSuccessFear, area, type);
};

const clearSuccessFear = () => {
	clearSliders(inputSuccessFear, area, type);
};

const loadSuccessFear = () => {
	loadSliders(inputSuccessFear, area, type);
};

export { loadSuccessFear, clearSuccessFear, saveSuccessFear };
