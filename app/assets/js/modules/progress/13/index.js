import { savePageData, loadData } from '../../../db';
import {
	getDate,
	getProgram,
	getPage,
	setCheckBoxesToDefault
} from '../../../lib';
const chkboxes = document.getElementsByClassName('practice-mindset');

const program = getProgram();
const page = getPage();
const today = getDate();

const savePracticeMindset = () => {
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
		pageData.progress = {};
		pageData.progress.practicemindset = [];
		pageData.progress.practicemindset.push(attitudeAnswers);
	} else if (pageData.progress.practicemindset === undefined) {
		pageData.progress = {};
		pageData.progress.practicemindset = [];
		pageData.progress.practicemindset.push(attitudeAnswers);
	} else {
		attitudeAnswers.forEach(answer => {
			pageData.progress.practicemindset.forEach((storedAnswer, index) => {
				storedAnswer.forEach(t => {
					if (
						t.date.toString() === answer.date.toString() &&
						t.day === answer.day
					) {
						pageData.progress.practicemindset.splice(index);
					}
				});
			});
		});
		pageData.progress.practicemindset.push(attitudeAnswers);
	}
	savePageData(pageData, program); /**/
};

const clearPracticeMindset = () => {
	let pageData = loadData();
	pageData.progress.practicemindset.forEach((data, index) => {
		data.forEach(item => {
			if (item.day.toString() === page.toString()) {
				pageData.progress.practicemindset.splice(index, 1);
			}
		});
	});
	savePageData(pageData, program);
	setCheckBoxesToDefault(chkboxes);
};

const loadPracticeMindset = () => {
	let pageData = loadData();
	if (pageData === undefined || pageData.progress === undefined) {
		return;
	}
	pageData.progress.practicemindset.forEach(data => {
		data.forEach((item, i) => {
			if (chkboxes[i].id === item.id && item.day === page) {
				chkboxes[i].checked = item.value;
			}
		});
	});
};
export { savePracticeMindset, clearPracticeMindset, loadPracticeMindset };
