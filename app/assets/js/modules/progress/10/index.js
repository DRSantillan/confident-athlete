import { savePageData, loadData } from '../../../db';
import { getProgram, setInputsToDefault } from '../../../lib';
let pageData = loadData();
const program = getProgram();
const inputBreakDown = document.getElementsByClassName('trust-breakdown');

const saveTrustBreakdown = () => {
	let arr = [];

	for (let i = 0; i < inputBreakDown.length; i++) {
		let answerObj = {};
		answerObj.id = inputBreakDown[i].id;
		answerObj.value = inputBreakDown[i].value;

		arr.push(answerObj);
	}
	console.log(arr, 'array');
	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.breakdown = arr;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.breakdown = arr;
	} else {
		pageData.progress.breakdown = arr;
	}

	savePageData(pageData, program);
};

const clearTrustBreakdown = () => {
	delete pageData.progress.breakdown;
	savePageData(pageData, program);
	setInputsToDefault(inputBreakDown);
};

const loadTrustBreakdown = () => {
	if (pageData === undefined) {
		return;
	} else if (pageData.progress === undefined) {
		return;
	}

	for (let key in pageData.progress.breakdown) {
		for (let i = 0; i < inputBreakDown.length; i++) {
			inputBreakDown[i].value = pageData.progress.breakdown[i].value;
		}
	}
};

export { saveTrustBreakdown, clearTrustBreakdown, loadTrustBreakdown };
