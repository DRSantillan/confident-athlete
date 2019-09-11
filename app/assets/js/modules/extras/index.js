import {
	saveTextBoxes,
	clearTextBoxes,
	loadTextBoxes,
	saveCheckBoxes,
	clearCheckBoxes,
	loadCheckBoxes
} from '../../lib';
/* Area: Contract  Day: Commitment   */

const areas = ['contract', 'self-concept'];
const inputContract = document.getElementsByClassName(areas[0]);

const saveCommitment = () => {
	saveTextBoxes(inputContract, areas[0]);
};
const clearCommitment = () => {
	clearTextBoxes(inputContract, areas[0]);
};
const loadCommitment = () => {
	loadTextBoxes(inputContract, areas[0]);
};

/* Area: SelfConcept  Day: appendix   */

const chkboxes = document.getElementsByClassName(areas[1]);

const saveSelfConcept = () => {
	saveCheckBoxes(chkboxes, areas[1]);
};
const clearSelfConcept = () => {
	clearCheckBoxes(chkboxes, areas[1]);
};

const loadSelfConcept = () => {
	loadCheckBoxes(chkboxes, areas[1]);
};

export {
	saveSelfConcept,
	clearSelfConcept,
	loadSelfConcept,
	saveCommitment,
	clearCommitment,
	loadCommitment
};
