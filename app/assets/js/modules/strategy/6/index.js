import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputTop5HotReaction = document.getElementsByClassName(
	'top5-hot-reaction'
);
const inputOldNew = document.getElementsByClassName('old-new-selftalk');
const inputChange = document.getElementsByClassName('change-expectations');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveTop5HotButtonsReactions = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputTop5HotReaction.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputTop5HotReaction[i].id;
		answers.value = inputTop5HotReaction[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.hot5buttonsreactions = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.hot5buttonsreactions = answersArray;
	} else {
		pageData.strategy.hot5buttonsreactions = answersArray;
	}

	savePageData(pageData, program);
	//console.log(answersArray);
};
const clearTop5HotButtonsReactions = () => {
	let pageData = loadData();
	pageData.strategy.hot5buttonsreactions.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.hot5buttonsreactions;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputTop5HotReaction);
};
const loadTop5HotButtonsReactions = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.hot5buttonsreactions === undefined
	) {
		return;
	}
	pageData.strategy.hot5buttonsreactions.forEach((item, index) => {
		if (inputTop5HotReaction[index].id === item.id) {
			inputTop5HotReaction[index].value = item.value;
		}
	});
};

const saveOldNewSelfTalk = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputOldNew.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputOldNew[i].id;
		answers.value = inputOldNew[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.oldnewtalk = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.oldnewtalk = answersArray;
	} else {
		pageData.strategy.oldnewtalk = answersArray;
	}

	savePageData(pageData, program);
	//console.log(answersArray);
};
const clearOldNewSelfTalk = () => {
	let pageData = loadData();
	pageData.strategy.oldnewtalk.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.oldnewtalk;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputOldNew);
};
const loadOldNewSelfTalk = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.oldnewtalk === undefined
	) {
		return;
	}
	pageData.strategy.oldnewtalk.forEach((item, index) => {
		if (inputOldNew[index].id === item.id) {
			inputOldNew[index].value = item.value;
		}
	});
};

export {
	saveTop5HotButtonsReactions,
	clearTop5HotButtonsReactions,
	loadTop5HotButtonsReactions,
	saveOldNewSelfTalk,
	clearOldNewSelfTalk,
	loadOldNewSelfTalk
};
