import { getProgram, getPage } from '../lib';

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
