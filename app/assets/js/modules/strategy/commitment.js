import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../lib';
const inputContract = document.getElementsByClassName('contract');

const saveCommitment = () => {
	saveTextBoxes(inputContract, 'contract');
};
const clearCommitment = () => {
	clearTextBoxes(inputContract, 'contract');
};
const loadCommitment = () => {
	loadTextBoxes(inputContract, 'contract');
};

export { saveCommitment, clearCommitment, loadCommitment };
