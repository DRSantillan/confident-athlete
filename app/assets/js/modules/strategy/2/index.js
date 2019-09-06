import { savePageData, loadData, clearData } from '../../../db';
import {
	getDate,
	getProgram,
	getPage,
	setCheckBoxesToDefault,
	setInputsToDefault
} from '../../../lib';

const input6Traits = document.getElementsByClassName('six-traits');
const inputTriggerSituations = document.getElementsByClassName(
	'trigger-situations'
);
const pageData = loadData();
const program = getProgram();
const page = getPage();
const today = getDate();

const save6Traits = () => {
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
	//console.log(answersArray);
};
const clear6Traits = () => {
	pageData.strategy.traits.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.traits;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(input6Traits);
};
const load6Traits = () => {
	if (pageData === undefined || pageData.strategy === undefined) {
		return;
	}
	pageData.strategy.traits.forEach((item, index) => {
		if (input6Traits[index].id === item.id) {
			input6Traits[index].value = item.value;
		}
	});
};

const saveTriggerSituations = () => {
	let answerObj = {};

	for (let i = 0; i < inputTriggerSituations.length; i++) {
		getAnswers(inputTriggerSituations, i, 'q1', answerObj);
		getAnswers(inputTriggerSituations, i, 'q2', answerObj);
		getAnswers(inputTriggerSituations, i, 'q3', answerObj);
		getAnswers(inputTriggerSituations, i, 'q4', answerObj);
		getAnswers(inputTriggerSituations, i, 'q5', answerObj);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy['day' + page] = {};
		pageData.strategy['day' + page] = answerObj;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy['day' + page] = {};
		pageData.strategy['day' + page] = answerObj;
	} else {
		pageData.strategy['day' + page] = answerObj;
	}

	savePageData(pageData, program);
};

const clearTriggerSituations = () => {
	delete pageData.strategy['day' + page];
	savePageData(pageData, program);
	setInputsToDefault(inputTriggerSituations);
};

const loadTriggerSituations = () => {
	if (pageData !== undefined || pageData.strategy !== undefined) {
		for (let key in pageData.strategy['day' + page]) {
			for (let i = 0; i < inputTriggerSituations.length; i++) {
				if (inputTriggerSituations[i].id === key + 'situation') {
					inputTriggerSituations[i].value =
						pageData.strategy['day' + page][key].situation;
				} else if (inputTriggerSituations[i].id === key + 'fear') {
					inputTriggerSituations[i].value =
						pageData.strategy['day' + page][key].fear;
				} else if (inputTriggerSituations[i].id === key + 'reaction') {
					inputTriggerSituations[i].value =
						pageData.strategy['day' + page][key].reaction;
				}
			}
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
