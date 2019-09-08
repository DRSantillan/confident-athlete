import { savePageData, loadData } from '../../../db';
import { getDate, getProgram, getPage, setInputsToDefault } from '../../../lib';

const inputPlan = document.getElementsByClassName('sports-specific-plan');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveSportsPlan = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputPlan.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputPlan[i].id;
		answers.value = inputPlan[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.sportsplan = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.sportsplan = answersArray;
	} else {
		pageData.strategy.sportsplan = answersArray;
	}

	savePageData(pageData, program);
};
const clearSportsPlan = () => {
	let pageData = loadData();
	pageData.strategy.sportsplan.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.sportsplan;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputPlan);
};
const loadSportsPlan = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.sportsplan === undefined
	) {
		return;
	}
	pageData.strategy.sportsplan.forEach((item, index) => {
		if (inputPlan[index].id === item.id) {
			inputPlan[index].value = item.value;
		}
	});
};

export { saveSportsPlan, clearSportsPlan, loadSportsPlan };
