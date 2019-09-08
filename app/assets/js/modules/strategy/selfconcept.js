import { savePageData, loadData } from '../../db';
import {
	getDate,
	getProgram,
	getPage,
	setCheckBoxesToDefault
} from '../../lib';

const chkboxes = document.getElementsByClassName('self-concept');

const today = getDate();
const page = getPage();
const program = getProgram();

const saveSelfConcept = () => {
	let pageData = loadData();
	let answersArray = [];

	for (let i = 0; i < chkboxes.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = chkboxes[i].id;
		answers.value = chkboxes[i].checked;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.selfconcept = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.selfconcept = answersArray;
	} else {
		pageData.selfconcept = answersArray;
	}

	savePageData(pageData, program);
};
const clearSelfConcept = () => {
	let pageData = loadData();
	pageData.selfconcept.forEach(item => {
		if (item.day === page) {
			delete pageData.selfconcept;
		}
	});
	savePageData(pageData, program);
	setCheckBoxesToDefault(chkboxes);
};

const loadSelfConcept = () => {
	let pageData = loadData();
	if (pageData === undefined || pageData.selfconcept === undefined) {
		return;
	}
	pageData.selfconcept.forEach((item, index) => {
		if (chkboxes[index].id === item.id) {
			chkboxes[index].checked = item.value;
		}
	});
};

export { saveSelfConcept, clearSelfConcept, loadSelfConcept };
