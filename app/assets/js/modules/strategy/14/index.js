import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 14  Type: life-roles,recreational-activities */
const type = 'life-roles';
const type2 = 'recreational-activities';
const area = 'strategy';
const inputRoles = document.getElementsByClassName(type);
const inputRec = document.getElementsByClassName(type2);

const saveRoles = () => {
	saveTextBoxes(inputRoles, area, type);
};
const clearRoles = () => {
	clearTextBoxes(inputRoles, area, type);
};
const loadRoles = () => {
	loadTextBoxes(inputRoles, area, type);
};
const saveRecretional = () => {
	saveTextBoxes(inputRec, area, type2);
};
const clearRecretional = () => {
	clearTextBoxes(inputRec, area, type2);
};
const loadRecretional = () => {
	loadTextBoxes(inputRec, area, type2);
};

export {
	saveRoles,
	clearRoles,
	loadRoles,
	saveRecretional,
	clearRecretional,
	loadRecretional
};
