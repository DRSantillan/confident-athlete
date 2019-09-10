import { saveCheckBoxes, clearCheckBoxes, loadCheckBoxes } from '../../../lib';

const chkboxes = document.getElementsByClassName('fear-trust');

const saveFearTrust = () => {
	saveCheckBoxes(chkboxes, 'strategy', 'feartrust');
};
const clearFearTrust = () => {
	clearCheckBoxes(chkboxes, 'strategy', 'feartrust');
};

const loadFearTrust = () => {
	loadCheckBoxes(chkboxes, 'strategy', 'feartrust');
};

export { saveFearTrust, clearFearTrust, loadFearTrust };
