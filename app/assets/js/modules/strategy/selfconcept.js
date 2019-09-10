import { savePageData, loadData } from '../../db';
import {
	getDate,
	getProgram,
	getPage,
	setCheckBoxesToDefault,
	saveCheckBoxes,
	clearCheckBoxes,
	loadCheckBoxes
} from '../../lib';

const chkboxes = document.getElementsByClassName('self-concept');

const today = getDate();
const page = getPage();
const program = getProgram();

const saveSelfConcept = () => {
	saveCheckBoxes(chkboxes, 'selfconcept');
};
const clearSelfConcept = () => {
	clearCheckBoxes(chkboxes, 'selfconcept');
	/* let pageData = loadData();
	pageData.selfconcept.forEach(item => {
		if (item.day === page) {
			delete pageData.selfconcept;
		}
	});
	savePageData(pageData, program);
	setCheckBoxesToDefault(chkboxes); */
};

const loadSelfConcept = () => {
	loadCheckBoxes(chkboxes, 'selfconcept');
	/* let pageData = loadData();
	if (pageData === undefined || pageData.selfconcept === undefined) {
		return;
	}
	pageData.selfconcept.forEach((item, index) => {
		if (chkboxes[index].id === item.id) {
			chkboxes[index].checked = item.value;
		}
	}); */
};

export { saveSelfConcept, clearSelfConcept, loadSelfConcept };
