import { savePageData, loadData } from '../../db';
import { getProgram, getPage, setInputsToDefault } from '../../lib/';

const inputNotes = document.getElementById('day-note');
let pageData = loadData();
const program = getProgram();
const page = getPage();

const saveNotes = () => {
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
	pageData.notes.forEach((item, index) => {
		if (item.day.toString() === page.toString()) {
			pageData.notes.splice(index, 1);
		}
	});
	inputNotes.value = '';

	savePageData(pageData, program);
};

const loadNotes = () => {
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
