import {
	saveCheckBoxes,
	loadCheckBoxes,
	clearCheckBoxes, getUrlQuery
} from '../../lib';

const chkboxes = document.getElementsByClassName('mental-assessment');

const saveAttitude = () => {
	debugger
	saveCheckBoxes(chkboxes, 'attitude', getUrlQuery()[1]);
};

const clearAttitude = () => {
	clearCheckBoxes(chkboxes, 'attitude', getUrlQuery()[1]);
};

const loadAttitude = () => {
	loadCheckBoxes(chkboxes, 'attitude', getUrlQuery()[1]);
};

export { saveAttitude, clearAttitude, loadAttitude };
