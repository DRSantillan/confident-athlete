import { savePageData, loadData } from '../../../db';
import { getProgram, setInputsToDefault } from '../../../lib';
let pageData = loadData();
const program = getProgram();
const inputTrainingMindset = document.getElementsByClassName(
	'training-mindset'
);

const saveMindset = () => {
	let arr = [];

	for (let i = 0; i < inputTrainingMindset.length; i++) {
		let answerObj = {};
		answerObj.id = inputTrainingMindset[i].id;
		answerObj.value = inputTrainingMindset[i].value;

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

const clearMindset = () => {
	delete pageData.progress.mindset;
	savePageData(pageData, program);
	setInputsToDefault(inputTrainingMindset);
};

const loadMindset = () => {
	if (pageData === undefined) {
		return;
	} else if (pageData.progress === undefined) {
		return;
	}

	for (let key in pageData.progress.mindset) {
		for (let i = 0; i < inputTrainingMindset.length; i++) {
			inputTrainingMindset[i].value = pageData.progress.mindset[i].value;
		}
	}
};

export { saveMindset, clearMindset, loadMindset };
