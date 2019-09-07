import { savePageData, loadData } from '../../../db';
import { getProgram, setInputsToDefault } from '../../../lib';
let pageData = loadData();
const program = getProgram();
const inputHotButtons = document.getElementsByClassName('hot-buttons');

const saveHotButtons = () => {
	let arr = [];

	for (let i = 0; i < inputHotButtons.length; i++) {
		let answerObj = {};
		answerObj.id = inputHotButtons[i].id;
		answerObj.value = inputHotButtons[i].value;

		arr.push(answerObj);
	}
	console.log(arr, 'array');
	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.hotbuttons = arr;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.hotbuttons = arr;
	} else {
		pageData.progress.hotbuttons = arr;
	}

	savePageData(pageData, program);
};

const clearHotButtons = () => {
	delete pageData.progress.hotbuttons;
	savePageData(pageData, program);
	setInputsToDefault(inputHotButtons);
};

const loadHotButtons = () => {
	if (pageData === undefined) {
		return;
	} else if (pageData.progress === undefined) {
		return;
	}

	for (let key in pageData.progress.hotbuttons) {
		for (let i = 0; i < inputHotButtons.length; i++) {
			inputHotButtons[i].value = pageData.progress.hotbuttons[i].value;
		}
	}
};

export { saveHotButtons, clearHotButtons, loadHotButtons };
