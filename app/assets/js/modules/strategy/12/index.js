import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
const inputUnbeatTrust = document.getElementsByClassName('unbeatable-trust');

const saveUnbeatableTrust = () => {
	saveTextBoxes(inputUnbeatTrust, 'strategy', 'unbeatabletrust');
};
const clearUnbeatableTrust = () => {
	clearTextBoxes(inputUnbeatTrust, 'strategy', 'unbeatabletrust');
};
const loadUnbeatableTrust = () => {
	loadTextBoxes(inputUnbeatTrust, 'strategy', 'unbeatabletrust');
};

export { saveUnbeatableTrust, clearUnbeatableTrust, loadUnbeatableTrust };
