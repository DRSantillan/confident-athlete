import { savePageData, loadData } from '../../../db';
import {
	getProgram,
	setInputsToDefault,
	setCheckBoxesToDefault
} from '../../../lib';
let pageData = loadData();
const program = getProgram();
const inputMindRead = document.getElementsByClassName('mind-reader');

const saveMindReader = () => {
	let arr = [];

	for (let i = 0; i < inputMindRead.length; i++) {
		let answerObj = {};
		answerObj.id = inputMindRead[i].id;
		if (
			inputMindRead[i].id === 'q1success' ||
			inputMindRead[i].id === 'q2success' ||
			inputMindRead[i].id === 'q3success' ||
			inputMindRead[i].id === 'q4success'
		) {
			answerObj.value = inputMindRead[i].checked;
		} else {
			answerObj.value = inputMindRead[i].value;
		}

		arr.push(answerObj);
	}
	console.log(arr, 'array');
	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.mindreader = arr;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.mindreader = arr;
	} else {
		pageData.progress.mindreader = arr;
	}

	savePageData(pageData, program);
};

const clearMindReader = () => {
	delete pageData.progress.mindreader;
	savePageData(pageData, program);
	setInputsToDefault(inputMindRead);
	setCheckBoxesToDefault(inputMindRead);
};

const loadMindReader = () => {
	if (pageData === undefined) {
		return;
	} else if (pageData.progress === undefined) {
		return;
	}

	for (let key in pageData.progress.mindreader) {
		for (let i = 0; i < inputMindRead.length; i++) {
			//inputMindRead[i].value = pageData.progress.mindreader[i].value;
			console.log(pageData.progress.mindreader[i].id, inputMindRead[i].id);
			if (
				inputMindRead[i].id === 'q1success' ||
				inputMindRead[i].id === 'q2success' ||
				inputMindRead[i].id === 'q3success' ||
				inputMindRead[i].id === 'q4success'
			) {
				inputMindRead[i].checked = pageData.progress.mindreader[i].value;
			} else {
				inputMindRead[i].value = pageData.progress.mindreader[i].value;
			}
		}
	}
};

export { saveMindReader, clearMindReader, loadMindReader };
