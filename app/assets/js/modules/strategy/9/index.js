import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputCompMind = document.getElementsByClassName('competition-mindset');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveCompetitionMindset = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputCompMind.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputCompMind[i].id;
		answers.value = inputCompMind[i].value;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.competitionmindset = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.competitionmindset = answersArray;
	} else {
		pageData.strategy.competitionmindset = answersArray;
	}

	savePageData(pageData, program);
};

const clearCompetitionMindset = () => {
	let pageData = loadData();
	pageData.strategy.competitionmindset.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.competitionmindset;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputCompMind);
};

const loadCompetitionMindset = () => {
	let pageData = loadData();
	if (pageData === undefined || pageData.strategy === undefined) {
		return;
	}
	pageData.strategy.competitionmindset.forEach((item, index) => {
		if (inputCompMind[index].id === item.id) {
			inputCompMind[index].value = item.value;
		}
	});
};

export {
	loadCompetitionMindset,
	clearCompetitionMindset,
	saveCompetitionMindset
};
