import { savePageData, loadData, clearData } from '../db/index';
import { getDate, getProgram, getPage, setCheckBoxesToDefault } from './util';

const chkboxes = document.getElementsByClassName('mental-assessment');

const saveAttitudeAnswers = () => {
	let pageData = loadData();
	let attitudeAnswers = [];

	for (let i = 0; i < chkboxes.length; i++) {
		let maObject = {};

		maObject.date = getDate();
		maObject.day = getPage();
		maObject.id = chkboxes[i].id;
		maObject.value = chkboxes[i].checked;
		attitudeAnswers.push(maObject);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.attitude = [];
		pageData.attitude.push(attitudeAnswers);
	} else if (pageData.attitude === undefined) {
		pageData.attitude = [];
		pageData.attitude.push(attitudeAnswers);
	} else {
		attitudeAnswers.forEach(answer => {
			pageData.attitude.forEach((storedAnswer, index) => {
				storedAnswer.forEach(t => {
					if (
						t.date.toString() === answer.date.toString() &&
						t.day === answer.day
					) {
						pageData.attitude.splice(index);
					}
				});
			});
		});
		pageData.attitude.push(attitudeAnswers);
	}

	savePageData(pageData, getProgram());
};

const clearAttitudeAnswers = () => {
	const pageData = loadData();
	const program = getProgram();
	const page = getPage();

	pageData.attitude.forEach((data, index) => {
		data.forEach(item => {
			if (item.day.toString() === page.toString()) {
				pageData.attitude.splice(index, 1);
			}
		});
	});
	savePageData(pageData, program);
	//localStorage.setItem(program, JSON.stringify(pageData));
	setCheckBoxesToDefault(chkboxes);
};

const loadAttitudeAnswers = () => {
	const pageData = loadData();

	if (pageData === undefined) {
		return;
	}
	pageData.attitude.forEach((data, index) => {
		data.forEach((item, i) => {
			if (chkboxes[i].id === item.id && item.day === getPage()) {
				chkboxes[i].checked = item.value;
			}
		});
	});
};

export { saveAttitudeAnswers, clearAttitudeAnswers, loadAttitudeAnswers };
