import { savePageData, loadData } from '../../../db';
import { getProgram, setInputsToDefault } from '../../../lib';

const program = getProgram();
const inputFuncMind = document.getElementsByClassName('functional-mindset');

const saveFunctionalMindset = () => {
	let pageData = loadData();
	let arr = [];

	for (let i = 0; i < inputFuncMind.length; i++) {
		let answerObj = {};
		answerObj.id = inputFuncMind[i].id;
		answerObj.value = inputFuncMind[i].value;

		arr.push(answerObj);
	}
	console.log(arr, 'array');
	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.mindset = arr;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.mindset = arr;
	} else {
		pageData.progress.mindset = arr;
	}

	savePageData(pageData, program);
};

const clearFunctionalMindset = () => {
	let pageData = loadData();
	pageData.progress.mindset = [];
	savePageData(pageData, program);
	setInputsToDefault(inputFuncMind);
};

const loadFunctionalMindset = () => {
	let pageData = loadData();
	if (pageData === undefined) {
		return;
	} else if (pageData.progress === undefined) {
		return;
	}

	for (let key in pageData.progress.mindset) {
		for (let i = 0; i < inputFuncMind.length; i++) {
			inputFuncMind[i].value = pageData.progress.mindset[i].value;
		}
	}
};

export { saveFunctionalMindset, clearFunctionalMindset, loadFunctionalMindset };
