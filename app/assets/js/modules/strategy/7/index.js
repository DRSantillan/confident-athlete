import { savePageData, loadData } from '../../../db';
import {
	getDate,
	getProgram,
	getPage,
	setCheckBoxesToDefault,
	setInputsToDefault
} from '../../../lib';

const chkboxDefMind = document.getElementsByClassName('defensive-mindset');
const inputMenPerf = document.getElementsByClassName('mental-performance');
const today = getDate();
const page = getPage();
const program = getProgram();

const saveDefensiveMindset = () => {
	let pageData = loadData();
	let answersArray = [];

	for (let i = 0; i < chkboxDefMind.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = chkboxDefMind[i].id;
		answers.value = chkboxDefMind[i].checked;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.defensivemindset = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.defensivemindset = answersArray;
	} else {
		pageData.strategy.defensivemindset = answersArray;
	}

	savePageData(pageData, program);
};
const clearDefensiveMindset = () => {
	let pageData = loadData();
	pageData.strategy.defensivemindset.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.defensivemindset;
		}
	});
	savePageData(pageData, program);
	setCheckBoxesToDefault(chkboxDefMind);
};

const loadDefensiveMindset = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.defensivemindset === undefined
	) {
		return;
	}
	pageData.strategy.defensivemindset.forEach((item, index) => {
		if (chkboxDefMind[index].id === item.id) {
			chkboxDefMind[index].checked = item.value;
		}
	});
};

const saveMentalPerformance = () => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < inputMenPerf.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = inputMenPerf[i].id;
		answers.value = inputMenPerf[i].value;
		answersArray.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.mentalperformance = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.mentalperformance = answersArray;
	} else {
		pageData.strategy.mentalperformance = answersArray;
	}

	savePageData(pageData, program);
};
const clearMentalPerformance = () => {
	let pageData = loadData();
	pageData.strategy.mentalperformance.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.mentalperformance;
		}
	});
	savePageData(pageData, program);
	setInputsToDefault(inputMenPerf);
};
const loadMentalPerformance = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.mentalperformance === undefined
	) {
		return;
	}
	pageData.strategy.mentalperformance.forEach((item, index) => {
		if (inputMenPerf[index].id === item.id) {
			inputMenPerf[index].value = item.value;
		}
	});
};

export {
	saveDefensiveMindset,
	clearDefensiveMindset,
	loadDefensiveMindset,
	saveMentalPerformance,
	clearMentalPerformance,
	loadMentalPerformance
};
