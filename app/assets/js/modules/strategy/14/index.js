import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
const inputRoles = document.getElementsByClassName('roles');
const inputRec = document.getElementsByClassName('recreational-activities');

const saveRoles = () => {
	saveTextBoxes(inputRoles, 'strategy', 'roles');
};
const clearRoles = () => {
	clearTextBoxes(inputRoles, 'strategy', 'roles');
};
const loadRoles = () => {
	loadTextBoxes(inputRoles, 'strategy', 'roles');
};
const saveRecretional = () => {
	saveTextBoxes(inputRec, 'strategy', 'recreational');
};
const clearRecretional = () => {
	clearTextBoxes(inputRec, 'strategy', 'recreational');
};
const loadRecretional = () => {
	loadTextBoxes(inputRec, 'strategy', 'recreational');
};

export {
	saveRoles,
	clearRoles,
	loadRoles,
	saveRecretional,
	clearRecretional,
	loadRecretional
};
