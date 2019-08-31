import { savePageData, loadData, clearData } from '../db/index';
import { getDate, getProgram, getPage, setCheckBoxesToDefault } from './util';

const chkboxes = document.getElementsByClassName('tableOne-assessment');

const saveTableOneAnswers = () => {
	let pageData = loadData();
	let answersArray = [];

	for (let i = 0; i < chkboxes.length; i++) {
		let answers = {};

		answers.date = getDate();
		answers.day = getPage();
		answers.id = chkboxes[i].id;
		answers.value = chkboxes[i].checked;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.tableOne = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.tableOne = answersArray;
	} else {
		pageData.strategy.tableOne = answersArray;
	}

	savePageData(pageData, getProgram());
};
const clearTableOneAnswers = () => {
	const pageData = loadData();
	const program = getProgram();
	const page = getPage();

	pageData.strategy.tableOne.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.tableOne;
		}
	});
	savePageData(pageData, program);
	setCheckBoxesToDefault(chkboxes);
};

const loadTableOneAnswers = () => {
	const pageData = loadData();

	if (pageData === undefined) {
		return;
	}
	pageData.strategy.tableOne.forEach((item, index) => {
		if (chkboxes[index].id === item.id) {
			chkboxes[index].checked = item.value;
		}
	});
};

export { saveTableOneAnswers, clearTableOneAnswers, loadTableOneAnswers };
