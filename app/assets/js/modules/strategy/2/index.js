import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 2  Type: perfectionism-traits,trigger-situations */
const type = 'perfectionism-traits';
const type2 = 'trigger-situations';
const area = 'strategy';
const input6Traits = document.getElementsByClassName(type);
const inputTriggerSituations = document.getElementsByClassName(type2);

const save6Traits = () => {
	saveTextBoxes(input6Traits, area, type);
};
const clear6Traits = () => {
	clearTextBoxes(input6Traits, area, type);
};
const load6Traits = () => {
	loadTextBoxes(input6Traits, area, type);
};

const saveTriggerSituations = () => {
	saveTextBoxes(inputTriggerSituations, area, type2);
};

const clearTriggerSituations = () => {
	clearTextBoxes(inputTriggerSituations, area, type2);
};

const loadTriggerSituations = () => {
	loadTextBoxes(inputTriggerSituations, area, type2);
};

export {
	save6Traits,
	clear6Traits,
	load6Traits,
	loadTriggerSituations,
	clearTriggerSituations,
	saveTriggerSituations
};
