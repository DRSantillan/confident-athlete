import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputSuccessFear = document.getElementsByClassName('success-fear-driven');
let pageData = loadData();
const program = getProgram();
const page = getPage();
const today = getDate();

const saveSuccessFear = () => {
	console.log('saving');
	let answersArray = [];
	for (let i = 0; i < inputSuccessFear.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputSuccessFear[i].id;
		answers.value = inputSuccessFear[i].value;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.successfear = answersArray;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.successfear = answersArray;
	} else {
		pageData.progress.successfear = answersArray;
	}

	savePageData(pageData, program);
};

const clearSuccessFear = () => {
	pageData.progress.successfear.forEach(item => {
		if (item.day === page) {
			delete pageData.progress.successfear;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputSuccessFear);
};

const loadSuccessFear = () => {
	if (pageData === undefined || pageData.progress === undefined) {
		return;
	}
	pageData.progress.successfear.forEach((item, index) => {
		if (inputSuccessFear[index].id === item.id) {
			inputSuccessFear[index].value = item.value;
		}
	});
};

export { loadSuccessFear, clearSuccessFear, saveSuccessFear };
