import { savePageData, loadData, clearData } from './db';
import { getDate, getProgram, getPage } from './util';

const chkboxes = document.getElementsByClassName('mental-assessment');

const getAttitudeAnswers = () => {
	let pageData = loadData();
	if (pageData === undefined) {
		pageData = {};
		pageData.attitude = [];
	}
	console.log(pageData, '........');
	let mentalAssess = [];

	for (let i = 0; i < chkboxes.length; i++) {
		let maObject = {};

		maObject.date = getDate();
		maObject.day = getPage();
		maObject.id = chkboxes[i].id;
		maObject.value = chkboxes[i].checked;
		mentalAssess.push(maObject);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.attitude = [];
		pageData.attitude.push(mentalAssess);
	}
	pageData.attitude.push(mentalAssess);

	console.log(pageData);
	savePageData(pageData, getProgram());
};

const clearAttitudeAnswers = () => {
	clearData();
	for (let i = 0; i < chkboxes.length; i++) {
		chkboxes[i].checked = false;
	}
};

const loadAttitudeAnswers = () => {
	const pageData = loadData();

	for (let i = 0; i < pageData.attitude.length; i++) {
		chkboxes[i].checked = pageData.attitude[i].value;
	}
};

export { getAttitudeAnswers, clearAttitudeAnswers, loadAttitudeAnswers };
