import { getProgram, getPage } from './util';

const getLocalStorage = () => {
	const currentDay = getDay('fearless');
	console.log(currentDay, 'currentDay');
	if (localStorage.getItem('maAnswers') !== null) {
		const storedAnswers = JSON.parse(localStorage.getItem('maAnswers'));

		console.log(storedAnswers);
		/* for (let i = 0; i < chkboxes.length; i++) {
			if (chkboxes[i].id === storedAnswers[i].id) {
				chkboxes[i].checked = storedAnswers[i].value;
			}
			console.log(chkboxes[i].id, 'chkboxes[i].id');
			console.log(storedAnswers[i].value, 'storedAnswers[i].value');
		} */
	}
};

const loadData = () => {
	const program = getProgram();
	const page = getPage();
	if (localStorage.length !== 0) {
		return JSON.parse(localStorage.getItem(program));
	}
	return;

	/* else {
		localStorage.setItem(program, JSON.stringify({}));
		return JSON.parse(localStorage.getItem(program));
	} */
};
const clearData = () => {
	console.log(localStorage);
	if (localStorage.length !== 0) {
		localStorage.clear();
	} else {
		console.log('empty');
	}
};
const savePageData = (data, program) => {
	localStorage.setItem(program, JSON.stringify(data));
};
const getPageData = () => {
	const program = getProgram();
	const page = getPage();
};

export { savePageData, getPageData, loadData, clearData };
