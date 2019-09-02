import { savePageData, loadData } from '../db/index';
import { getProgram, getPage, setInputsToDefault } from './util';

const inputNotes = document.getElementById('day-note');

const saveNotes = () => {
	let pageData = loadData();
	const program = getProgram();
	const page = getPage();

	let obj = {};
	obj.day = page;
	obj.note = inputNotes.value;
	//debugger;
	if (pageData === undefined) {
		pageData = {};
		pageData.notes = [];
		pageData.notes.push(obj);
	} else if (pageData.notes === undefined) {
		pageData.notes = [];
		pageData.notes.push(obj);
	} else {
		pageData.notes.forEach((item, index) => {
			if (item.day === page) {
				pageData.notes.splice(index, 1);
			}
		});
		pageData.notes.push(obj);
	}

	obj = {};
	savePageData(pageData, program);
};

const clearNotes = () => {
	const pageData = loadData();
	const program = getProgram();
	const page = getPage();

	pageData.notes.forEach((item, index) => {
		if (item.day.toString() === page.toString()) {
			pageData.notes.splice(index, 1);
		}
	});
	inputNotes.value = '';

	savePageData(pageData, program);
};

const loadNotes = () => {
	const pageData = loadData();
	const page = getPage();

	if (pageData === undefined) {
		return;
	} else if (pageData.notes === undefined) {
		return;
	}
	pageData.notes.forEach((item, index) => {
		if (item.day === page) {
			inputNotes.value = item.note;
		}
	});
};

export { saveNotes, clearNotes, loadNotes };
