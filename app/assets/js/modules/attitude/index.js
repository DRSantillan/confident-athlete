import {
	getPage,
	saveCheckBoxes,
	loadCheckBoxes,
	clearCheckBoxes
} from '../../lib';

const chkboxes = document.getElementsByClassName('mental-assessment');

const saveAttitude = () => {
	saveCheckBoxes(chkboxes, 'attitude', getPage());
};

const clearAttitude = () => {
	clearCheckBoxes(chkboxes, 'attitude', getPage());
};

const loadAttitude = () => {
	loadCheckBoxes(chkboxes, 'attitude', getPage());
};

export { saveAttitude, clearAttitude, loadAttitude };
