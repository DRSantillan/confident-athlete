import { saveSliders, clearSliders, loadSliders } from '../../../lib';
/* Area: Progress  Day: 14  Type: performers-practice-mindset */
const type = 'life-balance';
const area = 'progress';
const inputLifeBalance = document.getElementsByClassName(type);

const saveLifeBalance = () => {
	saveSliders(inputLifeBalance, area, type);
};

const clearLifeBalance = () => {
	clearSliders(inputLifeBalance, area, type);
};

const loadLifeBalance = () => {
	loadSliders(inputLifeBalance, area, type);
};

export { loadLifeBalance, clearLifeBalance, saveLifeBalance };
