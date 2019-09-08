import { savePageData, loadData } from '../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../lib';

const inputContract = document.getElementsByClassName('contract');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveCommitment = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputContract.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputContract[i].id;
		answers.value = inputContract[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.contract = answersArray;
	} else if (pageData.contract === undefined) {
		pageData.contract = answersArray;
	} else {
		pageData.contract = answersArray;
	}

	savePageData(pageData, program);
};
const clearCommitment = () => {
	let pageData = loadData();
	pageData.contract.forEach(item => {
		if (item.day === page) {
			delete pageData.contract;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputContract);
};
const loadCommitment = () => {
	let pageData = loadData();
	if (pageData === undefined || pageData.contract === undefined) {
		return;
	}
	pageData.contract.forEach((item, index) => {
		if (inputContract[index].id === item.id) {
			inputContract[index].value = item.value;
		}
	});
};

export { saveCommitment, clearCommitment, loadCommitment };
