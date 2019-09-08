import { savePageData, loadData } from '../../../db';
import {
	getDate,
	getProgram,
	getPage,
	setCheckBoxesToDefault,
	setInputsToDefault
} from '../../../lib';

const chkboxSocApp = document.getElementsByClassName('social-approval');

const today = getDate();
const page = getPage();
const program = getProgram();

const saveSocialApproval = () => {
	let pageData = loadData();
	let answersArray = [];

	for (let i = 0; i < chkboxSocApp.length; i++) {
		let answers = {};

		answers.date = today;
		answers.day = page;
		answers.id = chkboxSocApp[i].id;
		answers.value = chkboxSocApp[i].checked;
		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData.strategy = {};
		pageData.strategy.socialapproval = answersArray;
	} else if (pageData.strategy === undefined) {
		pageData.strategy = {};
		pageData.strategy.socialapproval = answersArray;
	} else {
		pageData.strategy.socialapproval = answersArray;
	}

	savePageData(pageData, program);
};
const clearSocialApproval = () => {
	let pageData = loadData();
	pageData.strategy.socialapproval.forEach(item => {
		if (item.day === page) {
			delete pageData.strategy.socialapproval;
		}
	});
	savePageData(pageData, program);
	setCheckBoxesToDefault(chkboxSocApp);
};

const loadSocialApproval = () => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData.strategy === undefined ||
		pageData.strategy.socialapproval === undefined
	) {
		return;
	}
	pageData.strategy.socialapproval.forEach((item, index) => {
		if (chkboxSocApp[index].id === item.id) {
			chkboxSocApp[index].checked = item.value;
		}
	});
};

export { saveSocialApproval, clearSocialApproval, loadSocialApproval };
