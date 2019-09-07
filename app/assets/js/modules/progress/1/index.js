import { savePageData, loadData } from '../../../db';
import { getProgram, setInputsToDefault } from '../../../lib';
let pageData = loadData();
const program = getProgram();
const inputAwareness = document.getElementsByClassName('awareness');

const saveAwareness = () => {
	let arr = [];

	for (let i = 0; i < inputAwareness.length; i++) {
		let answerObj = {};
		answerObj.id = inputAwareness[i].id;
		answerObj.value = inputAwareness[i].value;

		arr.push(answerObj);
	}
	console.log(arr, 'array');
	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.awareness = arr;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.awareness = arr;
	} else {
		pageData.progress.awareness = arr;
	}

	savePageData(pageData, program);
};

const clearAwareness = () => {
	delete pageData.progress.awareness;
	savePageData(pageData, program);
	setInputsToDefault(inputAwareness);
};

const loadAwareness = () => {
	if (pageData === undefined) {
		return;
	} else if (pageData.progress === undefined) {
		return;
	}

	for (let key in pageData.progress.awareness) {
		for (let i = 0; i < inputAwareness.length; i++) {
			inputAwareness[i].value = pageData.progress.awareness[i].value;
		}
	}
};

export { saveAwareness, clearAwareness, loadAwareness };