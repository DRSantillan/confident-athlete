import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputRoles = document.getElementsByClassName('roles');
const inputRec = document.getElementsByClassName('recreational-activities');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveRoles = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputRoles.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputRoles[i].id;
		answers.value = inputRoles[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.roles = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.roles = answersArray;
	} else {
		pageData.strategy.roles = answersArray;
	}

	savePageData(pageData, program);
};
const clearRoles = () => {
	let pageData = loadData();
	pageData.strategy.roles.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.roles;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputRoles);
};
const loadRoles = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.roles === undefined
	) {
		return;
	}
	pageData.strategy.roles.forEach((item, index) => {
		if (inputRoles[index].id === item.id) {
			inputRoles[index].value = item.value;
		}
	});
};
const saveRecretional = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputRec.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputRec[i].id;
		answers.value = inputRec[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.recreational = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.recreational = answersArray;
	} else {
		pageData.strategy.recreational = answersArray;
	}

	savePageData(pageData, program);
};
const clearRecretional = () => {
	let pageData = loadData();
	pageData.strategy.recreational.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.recreational;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputRec);
};
const loadRecretional = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.recreational === undefined
	) {
		return;
	}
	pageData.strategy.recreational.forEach((item, index) => {
		if (inputRec[index].id === item.id) {
			inputRec[index].value = item.value;
		}
	});
};

export {
	saveRoles,
	clearRoles,
	loadRoles,
	saveRecretional,
	clearRecretional,
	loadRecretional
};
