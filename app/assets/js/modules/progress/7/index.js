import { savePageData, loadData } from '../../../db';
import { getProgram, setInputsToDefault } from '../../../lib';
let pageData = loadData();
const program = getProgram();
const inputProcessGoal = document.getElementsByClassName('process-goals');

const saveProcessGoals = () => {
	let arr = [];

	for (let i = 0; i < inputProcessGoal.length; i++) {
		let answerObj = {};
		answerObj.id = inputProcessGoal[i].id;
		answerObj.value = inputProcessGoal[i].value;

		arr.push(answerObj);
	}
	console.log(arr, 'array');
	if (pageData === undefined) {
		pageData = {};
		pageData.progress = {};
		pageData.progress.process = arr;
	} else if (pageData.progress === undefined) {
		pageData.progress = {};
		pageData.progress.process = arr;
	} else {
		pageData.progress.process = arr;
	}

	savePageData(pageData, program);
};

const clearProcessGoals = () => {
	delete pageData.progress.process;
	savePageData(pageData, program);
	setInputsToDefault(inputProcessGoal);
};

const loadProcessGoals = () => {
	if (pageData === undefined) {
		return;
	} else if (pageData.progress === undefined) {
		return;
	}

	for (let key in pageData.progress.process) {
		for (let i = 0; i < inputProcessGoal.length; i++) {
			inputProcessGoal[i].value = pageData.progress.process[i].value;
		}
	}
};

export { saveProcessGoals, clearProcessGoals, loadProcessGoals };
