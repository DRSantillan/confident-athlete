import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputUnbeatTrust = document.getElementsByClassName('unbeatable-trust');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveUnbeatableTrust = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputUnbeatTrust.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputUnbeatTrust[i].id;
		answers.value = inputUnbeatTrust[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.ubeatabletrust = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.ubeatabletrust = answersArray;
	} else {
		pageData.strategy.ubeatabletrust = answersArray;
	}

	savePageData(pageData, program);
};
const clearUnbeatableTrust = () => {
	let pageData = loadData();
	pageData.strategy.ubeatabletrust.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.ubeatabletrust;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputUnbeatTrust);
};
const loadUnbeatableTrust = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.ubeatabletrust === undefined
	) {
		return;
	}
	pageData.strategy.ubeatabletrust.forEach((item, index) => {
		if (inputUnbeatTrust[index].id === item.id) {
			inputUnbeatTrust[index].value = item.value;
		}
	});
};

export { saveUnbeatableTrust, clearUnbeatableTrust, loadUnbeatableTrust };
