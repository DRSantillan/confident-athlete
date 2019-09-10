import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 12  Type: unbeatable-trust */
const type = 'unbeatable-trust';
const area = 'strategy';
const inputUnbeatTrust = document.getElementsByClassName(type);

const saveUnbeatableTrust = () => {
	saveTextBoxes(inputUnbeatTrust, area, type);
};
const clearUnbeatableTrust = () => {
	clearTextBoxes(inputUnbeatTrust, area, type);
};
const loadUnbeatableTrust = () => {
	loadTextBoxes(inputUnbeatTrust, area, type);
};

export { saveUnbeatableTrust, clearUnbeatableTrust, loadUnbeatableTrust };
