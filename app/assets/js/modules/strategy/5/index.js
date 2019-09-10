import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 5  Type: strict-expectations,expectations,change-expectations */
const type = 'strict-expectations';
const type2 = 'expectations';
const type3 = 'change-expectations';
const area = 'strategy';
const inputStrictExpect = document.getElementsByClassName(
	'strict-expectations'
);
const inputExpect = document.getElementsByClassName(type2);
const inputChange = document.getElementsByClassName(type3);

const saveStrictExpectations = () => {
	saveTextBoxes(inputStrictExpect, 'strategy', type);
};
const clearStrictExpectations = () => {
	clearTextBoxes(inputStrictExpect, 'strategy', type);
};
const loadStrictExpectations = () => {
	loadTextBoxes(inputStrictExpect, 'strategy', type);
};
const saveExpectations = () => {
	saveTextBoxes(inputExpect, 'strategy', type2);
};
const clearExpectations = () => {
	clearTextBoxes(inputExpect, 'strategy', type2);
};
const loadExpectations = () => {
	loadTextBoxes(inputExpect, 'strategy', type2);
};
const saveChangeExpectations = () => {
	saveTextBoxes(inputChange, 'strategy', type3);
};
const clearChangeExpectations = () => {
	clearTextBoxes(inputChange, 'strategy', type3);
};
const loadChangeExpectations = () => {
	loadTextBoxes(inputChange, 'strategy', type3);
};

export {
	saveStrictExpectations,
	clearStrictExpectations,
	loadStrictExpectations,
	saveExpectations,
	clearExpectations,
	loadExpectations,
	saveChangeExpectations,
	clearChangeExpectations,
	loadChangeExpectations
};
