import { savePageData, loadData, clearData } from '../db/index';
import { getDate, getProgram, getPage, setCheckBoxesToDefault } from './util';

const chkboxes = document.getElementsByClassName('notes');

const saveNotes = () => {
	console.log('saveNotes');
};

const clearNotes = () => {
	console.log('clearNotes');
};

const loadNotes = () => {
	console.log('loadNotes');
};

export { saveNotes, clearNotes, loadNotes };
