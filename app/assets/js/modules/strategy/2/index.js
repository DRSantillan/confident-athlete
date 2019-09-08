import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const input6Traits = document.getElementsByClassName('six-traits');
const inputTriggerSituations = document.getElementsByClassName(
	'trigger-situations'
);

const program = getProgram();
const page = getPage();
const today = getDate();

const save6Traits = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < input6Traits.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = input6Traits[i].id;
		answers.value = input6Traits[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.traits = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.traits = answersArray;
	} else {
		pageData.strategy.traits = answersArray;
	}

	savePageData(pageData, program);
};
const clear6Traits = () => {
	let pageData = loadData();
	pageData.strategy.traits.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.traits;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(input6Traits);
};
const load6Traits = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.traits === undefined
	) {
		return;
	}
	pageData.strategy.traits.forEach((item, index) => {
		if (input6Traits[index].id === item.id) {
			input6Traits[index].value = item.value;
		}
	});
};

const saveTriggerSituations = () => {
	let pageData = loadData();
	let arr = [];

	for (let i = 0; i < inputTriggerSituations.length; i++) {
		let answerObj = {};
		answerObj.id = inputTriggerSituations[i].id;
		answerObj.value = inputTriggerSituations[i].value;

		arr.push(answerObj);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.triggers = arr;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.triggers = arr;
	} else {
		pageData.strategy.triggers = arr;
	}

	savePageData(pageData, program);
};

const clearTriggerSituations = () => {
	let pageData = loadData();
	delete pageData.strategy.triggers;
	savePageData(pageData, program);
	setInputsToDefault(inputTriggerSituations);
};

const loadTriggerSituations = () => {
	let pageData = loadData();
	if (pageData === undefined) {
		return;
	} else if (pageData.strategy === undefined) {
		return;
	}

	for (let key in pageData.strategy.triggers) {
		for (let i = 0; i < inputTriggerSituations.length; i++) {
			inputTriggerSituations[i].value = pageData.strategy.triggers[i].value;
		}
	}
};

export {
	save6Traits,
	clear6Traits,
	load6Traits,
	loadTriggerSituations,
	clearTriggerSituations,
	saveTriggerSituations
};
