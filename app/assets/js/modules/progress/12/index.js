import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputCompMental = document.getElementsByClassName('comp-mentality');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveCompetitionMentality = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputCompMental.length; i++) {
		let answers = {};
		answers.day = page;
		answers.id = inputCompMental[i].id;
		answers.value = inputCompMental[i].value;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.mentality = answersArray;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.mentality = answersArray;
	} else {
		pageData.progress.mentality = answersArray;
	}

	savePageData(pageData, program);
};

const clearCompetitionMentality = () => {
	let pageData = loadData();
	pageData.progress.mentality.forEach(item => {
		if (item.day === page) {
			delete pageData.progress.mentality;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputCompMental);
};

const loadCompetitionMentality = () => {
	let pageData = loadData();
	if (pageData === undefined || pageData.progress === undefined) {
		return;
	}
	pageData.progress.mentality.forEach((item, index) => {
		if (inputCompMental[index].id === item.id) {
			inputCompMental[index].value = item.value;
		}
	});
};

export {
	loadCompetitionMentality,
	clearCompetitionMentality,
	saveCompetitionMentality
};
