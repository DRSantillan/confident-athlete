import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputComBreakdown = document.getElementsByClassName('common-breakdowns');
const inputCompSit = document.getElementsByClassName(' competitive-situtation');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveCommonBreakDowns = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputComBreakdown.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputComBreakdown[i].id;
		answers.value = inputComBreakdown[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.commonbreakdowns = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.commonbreakdowns = answersArray;
	} else {
		pageData.strategy.commonbreakdowns = answersArray;
	}

	savePageData(pageData, program);
	//console.log(answersArray);
};
const clearCommonBreakDowns = () => {
	let pageData = loadData();
	pageData.strategy.commonbreakdowns.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.commonbreakdowns;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputComBreakdown);
};
const loadCommonBreakDowns = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.commonbreakdowns === undefined
	) {
		return;
	}
	pageData.strategy.commonbreakdowns.forEach((item, index) => {
		if (inputComBreakdown[index].id === item.id) {
			inputComBreakdown[index].value = item.value;
		}
	});
};

const saveCompetitiveSituations = () => {
	let pageData = loadData();
	let arr = [];

	for (let i = 0; i < inputCompSit.length; i++) {
		let answerObj = {};
		answerObj.id = inputCompSit[i].id;
		answerObj.value = inputCompSit[i].value;

		arr.push(answerObj);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.competitivesituations = arr;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.competitivesituations = arr;
	} else {
		pageData.strategy.competitivesituations = arr;
	}

	savePageData(pageData, program);
};

const clearCompetitiveSituations = () => {
	let pageData = loadData();
	delete pageData.strategy.competitivesituations;
	savePageData(pageData, program);
	setInputsToDefault(inputCompSit);
};

const loadCompetitiveSituations = () => {
	let pageData = loadData();
	if (pageData === undefined) {
		return;
	} else if (pageData.strategy === undefined) {
		return;
	}

	for (let key in pageData.strategy.competitivesituations) {
		for (let i = 0; i < inputCompSit.length; i++) {
			inputCompSit[i].value = pageData.strategy.competitivesituations[i].value;
		}
	}
};

export {
	saveCommonBreakDowns,
	clearCommonBreakDowns,
	loadCommonBreakDowns,
	loadCompetitiveSituations,
	clearCompetitiveSituations,
	saveCompetitiveSituations
};
