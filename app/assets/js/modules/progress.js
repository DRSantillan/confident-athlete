import { savePageData, loadData } from '../db/index';
import { getProgram, getPage, setInputsToDefault } from './util';

const inputAwareness = document.getElementsByClassName('txt-input');
const saveAwarenessAnswers = () => {
	let pageData = loadData();
	const program = getProgram();
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
const getAnswers = (input, index, questionNum, obj) => {
	if (input[index].id.search(questionNum) === 0) {
		if (input[index].id.search('scenario') > 1) {
			obj[questionNum] = {};
			obj[questionNum].scenario = input[index].value;
		} else if (input[index].id.search('fof') > 1) {
			obj[questionNum].fof = input[index].value;
		} else {
			obj[questionNum].reaction = input[index].value;
		}
	}
};

const clearAwarenessAnswers = () => {
	const pageData = loadData();
	const program = getProgram();
	const page = getPage();

	delete pageData.progress['day' + getPage()];
	savePageData(pageData, program);
	setInputsToDefault(inputAwareness);
};

const loadAwarenessAnswers = () => {
	const pageData = loadData();
	const page = getPage();

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

export { saveAwarenessAnswers, clearAwarenessAnswers, loadAwarenessAnswers };
