import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputTop5Char = document.getElementsByClassName('top5');
let pageData = loadData();
const program = getProgram();
const page = getPage();
const today = getDate();

const saveTop5Char = () => {
	let answersArray = [];
	for (let i = 0; i < inputTop5Char.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputTop5Char[i].id;
		answers.value = inputTop5Char[i].value;
		answersArray.push(answers);
	}
	console.log(answersArray);
	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.top5 = answersArray;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.top5 = answersArray;
	} else {
		pageData.progress.top5 = answersArray;
	}

	savePageData(pageData, program);
};

const clearTop5Char = () => {
	pageData.progress.top5.forEach(item => {
		if (item.day === page) {
			delete pageData.progress.top5;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputTop5Char);
};

const loadTop5Char = () => {
	if (pageData === undefined || pageData.progress === undefined) {
		return;
	}
	pageData.progress.top5.forEach((item, index) => {
		if (inputTop5Char[index].id === item.id) {
			inputTop5Char[index].value = item.value;
		}
	});
};

export { saveTop5Char, clearTop5Char, loadTop5Char };