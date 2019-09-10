import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';

const inputStrictExpect = document.getElementsByClassName(
	'strict-expectations'
);
const inputExpect = document.getElementsByClassName('expectations');
const inputChange = document.getElementsByClassName('change-expectations');

const saveStrictExpectations = () => {
	saveTextBoxes(inputStrictExpect, 'strategy', 'strictexpectations');
};
const clearStrictExpectations = () => {
	clearTextBoxes(inputStrictExpect, 'strategy', 'strictexpectations');
};
const loadStrictExpectations = () => {
	loadTextBoxes(inputStrictExpect, 'strategy', 'strictexpectations');
};
const saveExpectations = () => {
	saveTextBoxes(inputExpect, 'strategy', 'expectations');
};
const clearExpectations = () => {
	clearTextBoxes(inputExpect, 'strategy', 'expectations');
};
const loadExpectations = () => {
	loadTextBoxes(inputExpect, 'strategy', 'expectations');
};
const saveChangeExpectations = () => {
	saveTextBoxes(inputChange, 'strategy', 'changeexpectations');
};
const clearChangeExpectations = () => {
	clearTextBoxes(inputChange, 'strategy', 'changeexpectations');
};
const loadChangeExpectations = () => {
	loadTextBoxes(inputChange, 'strategy', 'changeexpectations');
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
