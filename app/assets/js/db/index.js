import { getProgram, getPage } from '../lib';

const loadData = () => {
	const program = getProgram();

	if (localStorage.length !== 0) {
		return JSON.parse(localStorage.getItem(program));
	}
	return;
};
const clearData = () => {
	if (localStorage.length !== 0) {
		localStorage.clear();
	}
};
const savePageData = (data, program) => {
	localStorage.setItem(program, JSON.stringify(data));
};

export { savePageData, loadData, clearData };
