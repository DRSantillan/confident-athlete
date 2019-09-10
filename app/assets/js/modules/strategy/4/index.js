import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 4  Type: non-functional-beliefs,new-functional-beliefs,ineffective-beliefs */
const type = 'non-functional-beliefs';
const type2 = 'new-functional-beliefs';
const type3 = 'ineffective-beliefs';
const area = 'strategy';
const inputTop5Beliefs = document.getElementsByClassName(type);

const inputNewBelief = document.getElementsByClassName(type2);
const inputIneffectiveBelief = document.getElementsByClassName(type3);
const saveTop5NFBeliefs = () => {
	saveTextBoxes(inputTop5Beliefs, area, type);
};
const clearTop5NFBeliefs = () => {
	clearTextBoxes(inputTop5Beliefs, area, type);
};
const loadTop5NFBeliefs = () => {
	loadTextBoxes(inputTop5Beliefs, area, type);
};

const saveIneffectiveBelief = () => {
	saveTextBoxes(inputIneffectiveBelief, area, type3);
};
const clearIneffectiveBelief = () => {
	clearTextBoxes(inputIneffectiveBelief, area, type3);
};
const loadIneffectiveBelief = () => {
	loadTextBoxes(inputIneffectiveBelief, area, type3);
};

const saveNewBelief = () => {
	saveTextBoxes(inputNewBelief, area, type2);
};
const clearNewBelief = () => {
	clearTextBoxes(inputNewBelief, area, type2);
};
const loadNewBelief = () => {
	loadTextBoxes(inputNewBelief, area, type2);
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
