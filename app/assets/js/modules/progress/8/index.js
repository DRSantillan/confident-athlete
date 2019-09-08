import { savePageData, loadData } from '../../../db';
import {
	getProgram,
	setInputsToDefault,
	setCheckBoxesToDefault
} from '../../../lib';

const program = getProgram();
const inputMindRead = document.getElementsByClassName('mind-reader');

const saveMindReader = () => {
	let pageData = loadData();
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
	let pageData = loadData();
	delete pageData.progress.mindreader;
	savePageData(pageData, program);
	setInputsToDefault(inputMindRead);
	setCheckBoxesToDefault(inputMindRead);
};

const loadMindReader = () => {
	let pageData = loadData();
	if (pageData === undefined) {
		return;
	} else if (pageData.progress === undefined) {
		return;
	}

	for (let key in pageData.progress.mindreader) {
		for (let i = 0; i < inputMindRead.length; i++) {
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
