import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputTop5 = document.getElementsByClassName('top5-mindsets');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveTop5NFMindsets = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputTop5.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputTop5[i].id;
		answers.value = inputTop5[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.top5mindsets = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.top5mindsets = answersArray;
	} else {
		pageData.strategy.top5mindsets = answersArray;
	}

	savePageData(pageData, program);
};
const clearTop5NFMindsets = () => {
	let pageData = loadData();
	pageData.strategy.top5mindsets.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.top5mindsets;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputTop5);
};
const loadTop5NFMindsets = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.top5mindsets === undefined
	) {
		return;
	}
	pageData.strategy.top5mindsets.forEach((item, index) => {
		if (inputTop5[index].id === item.id) {
			inputTop5[index].value = item.value;
		}
	});
};

export { saveTop5NFMindsets, clearTop5NFMindsets, loadTop5NFMindsets };
