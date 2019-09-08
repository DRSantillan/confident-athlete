import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputPractice = document.getElementsByClassName('practice-routines');

const program = getProgram();
const page = getPage();
const today = getDate();

const savePracticeRoutines = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputPractice.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputPractice[i].id;
		answers.value = inputPractice[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.practiceroutines = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.practiceroutines = answersArray;
	} else {
		pageData.strategy.practiceroutines = answersArray;
	}

	savePageData(pageData, program);
};
const clearPracticeRoutines = () => {
	let pageData = loadData();
	pageData.strategy.practiceroutines.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.practiceroutines;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputPractice);
};
const loadPracticeRoutines = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.practiceroutines === undefined
	) {
		return;
	}
	pageData.strategy.practiceroutines.forEach((item, index) => {
		if (inputPractice[index].id === item.id) {
			inputPractice[index].value = item.value;
		}
	});
};

export { savePracticeRoutines, clearPracticeRoutines, loadPracticeRoutines };
