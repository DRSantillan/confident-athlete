import { savePageData, loadData } from '../../db';
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
		pageData.attitude[page] = attitudeAnswers;
		//pageData.attitude.push(attitudeAnswers);
	} else if (pageData.attitude === undefined) {
		pageData.attitude = {};
		pageData.attitude[page] = attitudeAnswers;
	} else {
		pageData.attitude[page] = attitudeAnswers;
	}
	savePageData(pageData, program);
};

const clearAttitude = () => {
	let pageData = loadData();
	pageData.attitude[page].forEach((data, index) => {
		console.log(data);
		if (data.day === page) {
			delete pageData.attitude[page];
		}
	});
	savePageData(pageData, program);
	setCheckBoxesToDefault(chkboxes);
};

const loadAttitude = () => {
	let pageData = loadData();

	if (
		pageData === undefined ||
		pageData.attitude === undefined ||
		pageData.attitude[page] === undefined
	) {
		return;
	}
	pageData.attitude[page].forEach((data, i) => {
		if (chkboxes[i].id === data.id && data.day === page) {
			chkboxes[i].checked = data.value;
		}
	});
};

export { saveAttitude, clearAttitude, loadAttitude };
