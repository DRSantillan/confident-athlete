import { savePageData, loadData, clearData } from '../../../db';
import {
	getDate,
	getProgram,
	getPage,
	setCheckBoxesToDefault,
	setInputsToDefault
} from '../../../lib';

const chkboxes = document.getElementsByClassName('fear-trust');

const today = getDate();
const page = getPage();

const saveFearTrust = () => {
	let pageData = loadData();
	let answersArray = [];

	for (let i = 0; i < chkboxes.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = chkboxes[i].id;
		answers.value = chkboxes[i].checked;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.feartrust = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.feartrust = answersArray;
	} else {
		pageData.strategy.feartrust = answersArray;
	}

	savePageData(pageData, program);
};
const clearFearTrust = () => {
	let pageData = loadData();
	pageData.strategy.feartrust.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.feartrust;
		}
	});
	savePageData(pageData, program);
	setCheckBoxesToDefault(chkboxes);
};

const loadFearTrust = () => {
	let pageData = loadData();
	if (pageData === undefined || pageData.strategy === undefined) {
		return;
	}
	pageData.strategy.feartrust.forEach((item, index) => {
		if (chkboxes[index].id === item.id) {
			chkboxes[index].checked = item.value;
		}
	});
};

export { saveFearTrust, clearFearTrust, loadFearTrust };
