import { saveCheckBoxes, clearCheckBoxes, loadCheckBoxes } from '../../../lib';
/* Area: Strategy  Day: 1  Type: fear-self-trust */
const type = 'fear-self-trust';
const area = 'strategy';
const chkboxes = document.getElementsByClassName('fear-self-trust');

const saveFearTrust = () => {
	saveCheckBoxes(chkboxes, area, type);
};
const clearFearTrust = () => {
	clearCheckBoxes(chkboxes, area, type);
};

const loadFearTrust = () => {
	loadCheckBoxes(chkboxes, area, type);
};

export { saveFearTrust, clearFearTrust, loadFearTrust };
