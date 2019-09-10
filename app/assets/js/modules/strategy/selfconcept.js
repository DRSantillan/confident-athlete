import { saveCheckBoxes, clearCheckBoxes, loadCheckBoxes } from '../../lib';
/* Area: Contract  Day: SelfConcept  Type: self-concept */
const type = 'self-concept';
const area = 'self-concept';
const chkboxes = document.getElementsByClassName(area);

const saveSelfConcept = () => {
	saveCheckBoxes(chkboxes, area);
};
const clearSelfConcept = () => {
	clearCheckBoxes(chkboxes, area);
};

const loadSelfConcept = () => {
	loadCheckBoxes(chkboxes, area);
};

export { saveSelfConcept, clearSelfConcept, loadSelfConcept };
