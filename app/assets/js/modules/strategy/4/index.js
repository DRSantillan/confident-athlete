import { savePageData, loadData, clearData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputTop5Beliefs = document.getElementsByClassName('top5-beliefs');
const inputIneffectiveBelief = document.getElementsByClassName(
	'ineffective-belief'
);
const inputNewBelief = document.getElementsByClassName('new-belief');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveTop5NFBeliefs = () => {
	console.log('savi');
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputTop5Beliefs.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputTop5Beliefs[i].id;
		answers.value = inputTop5Beliefs[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.top5beliefs = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.top5beliefs = answersArray;
	} else {
		pageData.strategy.top5beliefs = answersArray;
	}

	savePageData(pageData, program);
	//console.log(answersArray);
};
const clearTop5NFBeliefs = () => {
	let pageData = loadData();
	pageData.strategy.top5beliefs.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.top5beliefs;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputTop5Beliefs);
};
const loadTop5NFBeliefs = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.top5beliefs === undefined
	) {
		return;
	}
	pageData.strategy.top5beliefs.forEach((item, index) => {
		if (inputTop5Beliefs[index].id === item.id) {
			inputTop5Beliefs[index].value = item.value;
		}
	});
};

const saveIneffectiveBelief = () => {
	console.log('savi');
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputIneffectiveBelief.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputIneffectiveBelief[i].id;
		answers.value = inputIneffectiveBelief[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.ineffectivebelief = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.ineffectivebelief = answersArray;
	} else {
		pageData.strategy.ineffectivebelief = answersArray;
	}

	savePageData(pageData, program);
	//console.log(answersArray);
};
const clearIneffectiveBelief = () => {
	let pageData = loadData();
	pageData.strategy.ineffectivebelief.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.ineffectivebelief;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputTop5Beliefs);
};
const loadIneffectiveBelief = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.ineffectivebelief === undefined
	) {
		return;
	}
	pageData.strategy.ineffectivebelief.forEach((item, index) => {
		if (inputTop5Beliefs[index].id === item.id) {
			inputTop5Beliefs[index].value = item.value;
		}
	});
};

const saveNewBelief = () => {
	console.log('savi');
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputNewBelief.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputNewBelief[i].id;
		answers.value = inputNewBelief[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.newbelief = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.newbelief = answersArray;
	} else {
		pageData.strategy.newbelief = answersArray;
	}

	savePageData(pageData, program);
	//console.log(answersArray);
};
const clearNewBelief = () => {
	let pageData = loadData();
	pageData.strategy.newbelief.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.newbelief;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputNewBelief);
};
const loadNewBelief = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.newbelief === undefined
	) {
		return;
	}
	pageData.strategy.newbelief.forEach((item, index) => {
		if (inputNewBelief[index].id === item.id) {
			inputNewBelief[index].value = item.value;
		}
	});
};

export {
	saveTop5NFBeliefs,
	clearTop5NFBeliefs,
	loadTop5NFBeliefs,
	saveIneffectiveBelief,
	clearIneffectiveBelief,
	loadIneffectiveBelief,
	saveNewBelief,
	clearNewBelief,
	loadNewBelief
};
