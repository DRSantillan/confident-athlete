import { savePageData, loadData } from '../../../db';
import { getProgram, setInputsToDefault } from '../../../lib';

const program = getProgram();
const inputHotButtons = document.getElementsByClassName('hot-buttons');

const saveHotButtons = () => {
	let pageData = loadData();
	let arr = [];

	for (let i = 0; i < inputHotButtons.length; i++) {
		let answerObj = {};
		answerObj.id = inputHotButtons[i].id;
		answerObj.value = inputHotButtons[i].value;

		arr.push(answerObj);
	}

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
	let pageData = loadData();
	delete pageData.progress.hotbuttons;
	savePageData(pageData, program);
	setInputsToDefault(inputHotButtons);
};

const loadHotButtons = () => {
	let pageData = loadData();
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
