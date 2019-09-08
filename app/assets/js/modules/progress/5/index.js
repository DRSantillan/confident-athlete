import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputExpectConf = document.getElementsByClassName('expect-confidence');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveExpectConfidence = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputExpectConf.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputExpectConf[i].id;
		answers.value = inputExpectConf[i].value;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.expectations = answersArray;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.expectations = answersArray;
	} else {
		pageData.progress.expectations = answersArray;
	}

	savePageData(pageData, program);
};

const clearExpectConfidence = () => {
	let pageData = loadData();
	pageData.progress.expectations.forEach(item => {
		if (item.day === page) {
			delete pageData.progress.expectations;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputExpectConf);
};

const loadExpectConfidence = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.progress === undefined ||
		pageData.progress.expectations === undefined
	) {
		return;
	}
	pageData.progress.expectations.forEach((item, index) => {
		if (inputExpectConf[index].id === item.id) {
			inputExpectConf[index].value = item.value;
		}
	});
};

export { saveExpectConfidence, clearExpectConfidence, loadExpectConfidence };
