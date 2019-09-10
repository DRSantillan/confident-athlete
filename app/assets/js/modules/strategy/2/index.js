import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';

const input6Traits = document.getElementsByClassName('six-traits');
const inputTriggerSituations = document.getElementsByClassName(
	'trigger-situations'
);

const save6Traits = () => {
	saveTextBoxes(input6Traits, 'strategy', 'traits');
};
const clear6Traits = () => {
	clearTextBoxes(input6Traits, 'strategy', 'traits');
};
const load6Traits = () => {
	loadTextBoxes(input6Traits, 'strategy', 'traits');
};

const saveTriggerSituations = () => {
	saveTextBoxes(inputTriggerSituations, 'strategy', 'triggers');
};

const clearTriggerSituations = () => {
	clearTextBoxes(inputTriggerSituations, 'strategy', 'triggers');
};

const loadTriggerSituations = () => {
	loadTextBoxes(inputTriggerSituations, 'strategy', 'triggers');
};

export {
	save6Traits,
	clear6Traits,
	load6Traits,
	loadTriggerSituations,
	clearTriggerSituations,
	saveTriggerSituations
};
