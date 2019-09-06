import { savePageData, loadData } from '../../../db';
import {
	getProgram,
	getPage,
	setInputsToDefault,
	getAnswers
} from '../../../lib';
const pageData = loadData();
const program = getProgram();
const page = getPage();
const inputAwareness = document.getElementsByClassName('txt-input');

const saveAwareness = () => {
	let answerObj = {};

	for (let i = 0; i < inputAwareness.length; i++) {
		getAnswers(inputAwareness, i, 'q1', answerObj);
		getAnswers(inputAwareness, i, 'q2', answerObj);
		getAnswers(inputAwareness, i, 'q3', answerObj);
		getAnswers(inputAwareness, i, 'q4', answerObj);
		getAnswers(inputAwareness, i, 'q5', answerObj);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress['day' + getPage()] = {};
		pageData.progress['day' + getPage()] = answerObj;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress['day' + getPage()] = {};
		pageData.progress['day' + getPage()] = answerObj;
	} else {
		pageData.progress['day' + getPage()] = answerObj;
	}

	savePageData(pageData, program);
};

const clearAwareness = () => {
	delete pageData.progress['day' + page];
	savePageData(pageData, program);
	setInputsToDefault(inputAwareness);
};

const loadAwareness = () => {
	if (pageData === undefined) {
		return;
	} else if (pageData.progress === undefined) {
		return;
	}

	for (let key in pageData.progress['day' + page]) {
		for (let i = 0; i < inputAwareness.length; i++) {
			if (inputAwareness[i].id === key + 'scenario') {
				inputAwareness[i].value = pageData.progress['day' + page][key].scenario;
			} else if (inputAwareness[i].id === key + 'fof') {
				inputAwareness[i].value = pageData.progress['day' + page][key].fof;
			} else if (inputAwareness[i].id === key + 'reaction') {
				inputAwareness[i].value = pageData.progress['day' + page][key].reaction;
			}
		}
	}
};

export { saveAwareness, clearAwareness, loadAwareness };
