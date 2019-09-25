import { saveTextBox, clearTextBox, loadTextBox } from '../../lib/';


const inputNotes = document.getElementsByClassName('day-notes');

const saveNotes = () => {
	saveTextBox(inputNotes[0], 'notes');
};

const clearNotes = () => {
	clearTextBox(inputNotes[0], 'notes');
};

const loadNotes = () => {
	loadTextBox(inputNotes[0], 'notes');
};

export { saveNotes, clearNotes, loadNotes };
