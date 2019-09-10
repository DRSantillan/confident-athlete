import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';

const inputTop5Beliefs = document.getElementsByClassName('top5-beliefs');
const inputIneffectiveBelief = document.getElementsByClassName(
	'ineffective-belief'
);
const inputNewBelief = document.getElementsByClassName('new-belief');

const saveTop5NFBeliefs = () => {
	saveTextBoxes(inputTop5Beliefs, 'strategy', 'top5beliefs');
};
const clearTop5NFBeliefs = () => {
	clearTextBoxes(inputTop5Beliefs, 'strategy', 'top5beliefs');
};
const loadTop5NFBeliefs = () => {
	loadTextBoxes(inputTop5Beliefs, 'strategy', 'top5beliefs');
};

const saveIneffectiveBelief = () => {
	saveTextBoxes(inputIneffectiveBelief, 'strategy', 'ineffectivebelief');
};
const clearIneffectiveBelief = () => {
	clearTextBoxes(inputIneffectiveBelief, 'strategy', 'ineffectivebelief');
};
const loadIneffectiveBelief = () => {
	loadTextBoxes(inputIneffectiveBelief, 'strategy', 'ineffectivebelief');
};

const saveNewBelief = () => {
	saveTextBoxes(inputNewBelief, 'strategy', 'newbelief');
};
const clearNewBelief = () => {
	clearTextBoxes(inputNewBelief, 'strategy', 'newbelief');
};
const loadNewBelief = () => {
	loadTextBoxes(inputNewBelief, 'strategy', 'newbelief');
};

export {
	saveTop5NFBeliefs,
	clearTop5NFBeliefs,
	loadTop5NFBeliefs,
	saveIneffectiveBelief,
	clearIneffectiveBelief,
	loadIneffectiveBelief,
	saveNewBelief,
	clearNewBelief,
	loadNewBelief
};
