import { saveSliders, clearSliders, loadSliders } from '../../../lib';

const inputLifeBalance = document.getElementsByClassName('life-balance');

const saveLifeBalance = () => {
	saveSliders(inputLifeBalance, 'progress', 'lifebalance');
};

const clearLifeBalance = () => {
	clearSliders(inputLifeBalance, 'progress', 'lifebalance');
};

const loadLifeBalance = () => {
	loadSliders(inputLifeBalance, 'progress', 'lifebalance');
};

export { loadLifeBalance, clearLifeBalance, saveLifeBalance };
