import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputStrictExpect = document.getElementsByClassName(
	'strict-expectations'
);
const inputExpect = document.getElementsByClassName('expectations');
const inputChange = document.getElementsByClassName('change-expectations');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveStrictExpectations = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputStrictExpect.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputStrictExpect[i].id;
		answers.value = inputStrictExpect[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.strictexpectations = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.strictexpectations = answersArray;
	} else {
		pageData.strategy.strictexpectations = answersArray;
	}

	savePageData(pageData, program);
};
const clearStrictExpectations = () => {
	let pageData = loadData();
	pageData.strategy.strictexpectations.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.strictexpectations;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputStrictExpect);
};
const loadStrictExpectations = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.strictexpectations === undefined
	) {
		return;
	}
	pageData.strategy.strictexpectations.forEach((item, index) => {
		if (inputStrictExpect[index].id === item.id) {
			inputStrictExpect[index].value = item.value;
		}
	});
};
const saveExpectations = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputExpect.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputExpect[i].id;
		answers.value = inputExpect[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.expectations = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.expectations = answersArray;
	} else {
		pageData.strategy.expectations = answersArray;
	}

	savePageData(pageData, program);
};
const clearExpectations = () => {
	let pageData = loadData();
	pageData.strategy.expectations.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.expectations;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputExpect);
};
const loadExpectations = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.expectations === undefined
	) {
		return;
	}
	pageData.strategy.expectations.forEach((item, index) => {
		if (inputExpect[index].id === item.id) {
			inputExpect[index].value = item.value;
		}
	});
};
const saveChangeExpectations = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputChange.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputChange[i].id;
		answers.value = inputChange[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.changeexpectations = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.changeexpectations = answersArray;
	} else {
		pageData.strategy.changeexpectations = answersArray;
	}

	savePageData(pageData, program);
};
const clearChangeExpectations = () => {
	let pageData = loadData();
	pageData.strategy.changeexpectations.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.changeexpectations;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputChange);
};
const loadChangeExpectations = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.changeexpectations === undefined
	) {
		return;
	}
	pageData.strategy.changeexpectations.forEach((item, index) => {
		if (inputChange[index].id === item.id) {
			inputChange[index].value = item.value;
		}
	});
};

export {
	saveStrictExpectations,
	clearStrictExpectations,
	loadStrictExpectations,
	saveExpectations,
	clearExpectations,
	loadExpectations,
	saveChangeExpectations,
	clearChangeExpectations,
	loadChangeExpectations
};
