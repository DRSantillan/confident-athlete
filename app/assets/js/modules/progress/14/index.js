import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputLifeBalance = document.getElementsByClassName('life-balance');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveLifeBalance = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputLifeBalance.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputLifeBalance[i].id;
		answers.value = inputLifeBalance[i].value;

		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.lifebalance = answersArray;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.lifebalance = answersArray;
	} else {
		pageData.progress.lifebalance = answersArray;
	}

	savePageData(pageData, program);
};

const clearLifeBalance = () => {
	let pageData = loadData();
	pageData.progress.lifebalance.forEach(item => {
		if (item.day === page) {
			delete pageData.progress.lifebalance;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputLifeBalance);
};

const loadLifeBalance = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.progress === undefined ||
		pageData.progress.lifebalance === undefined
	) {
		return;
	}
	pageData.progress.lifebalance.forEach((item, index) => {
		if (inputLifeBalance[index].id === item.id) {
			inputLifeBalance[index].value = item.value;
		}
	});
};

export { loadLifeBalance, clearLifeBalance, saveLifeBalance };
