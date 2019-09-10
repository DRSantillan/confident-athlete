import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../lib';
/* Area: Contract  Day: Commitment  Type: performers-practice-mindset */
//const type = 'fear-self-trust';
const area = 'contract';
const inputContract = document.getElementsByClassName(area);

const saveCommitment = () => {
	saveTextBoxes(inputContract, area);
};
const clearCommitment = () => {
	clearTextBoxes(inputContract, area);
};
const loadCommitment = () => {
	loadTextBoxes(inputContract, area);
};

export { saveCommitment, clearCommitment, loadCommitment };
