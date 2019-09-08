import { savePageData, loadData, clearData } from '../../db';
import {
	getDate,
	getProgram,
	getPage,
	setCheckBoxesToDefault
} from '../../lib';

const chkboxes = document.getElementsByClassName('mental-assessment');

const program = getProgram();
const page = getPage();
const today = getDate();

const saveAttitude = () => {
	let pageData = loadData();
	let attitudeAnswers = [];

	for (let i = 0; i < chkboxes.length; i++) {
		let maObject = {};
		maObject.date = today;
		maObject.day = page;
		maObject.id = chkboxes[i].id;
		maObject.value = chkboxes[i].checked;

		attitudeAnswers.push(maObject);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.attitude = {};
		pageData.attitude.push(attitudeAnswers);
	} else if (pageData.attitude === undefined) {
		pageData.attitude = {};
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
	savePageData(pageData, program);
};

const clearAttitude = () => {
	let pageData = loadData();
	pageData.attitude.forEach((data, index) => {
		data.forEach(item => {
			if (item.day.toString() === page.toString()) {
				pageData.attitude.splice(index, 1);
			}
		});
	});
	savePageData(pageData, program);
	setCheckBoxesToDefault(chkboxes);
};

const loadAttitude = () => {
	let pageData = loadData();
	if (pageData === undefined || pageData.attitude === undefined) {
		return;
	}
	pageData.attitude.forEach(data => {
		data.forEach((item, i) => {
			if (chkboxes[i].id === item.id && item.day === page) {
				chkboxes[i].checked = item.value;
			}
		});
	});
};

export { saveAttitude, clearAttitude, loadAttitude };
