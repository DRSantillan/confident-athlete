import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputPerformFunctional = document.getElementsByClassName(
	'perform-functional'
);
let pageData = loadData();
const program = getProgram();
const page = getPage();
const today = getDate();

const savePerformFunct = () => {
	let answersArray = [];
	for (let i = 0; i < inputPerformFunctional.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputPerformFunctional[i].id;
		answers.value = inputPerformFunctional[i].value;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.perform = answersArray;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.perform = answersArray;
	} else {
		pageData.progress.perform = answersArray;
	}

	savePageData(pageData, program);
};

const clearPerformFunct = () => {
	pageData.progress.perform.forEach(item => {
		if (item.day === page) {
			delete pageData.progress.perform;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputPerformFunctional);
};

const loadPerformFunct = () => {
	if (pageData === undefined || pageData.progress === undefined) {
		return;
	}
	pageData.progress.perform.forEach((item, index) => {
		if (inputPerformFunctional[index].id === item.id) {
			inputPerformFunctional[index].value = item.value;
		}
	});
};

export { loadPerformFunct, clearPerformFunct, savePerformFunct };
