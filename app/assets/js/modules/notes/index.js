import { saveTextBox, clearTextBox, loadTextBox } from '../../lib/';

const inputNotes = document.getElementById('day-note');

const saveNotes = () => {
	saveTextBox(inputNotes, 'notes');
};

const clearNotes = () => {
	clearTextBox(inputNotes, 'notes');
};

const loadNotes = () => {
	loadTextBox(inputNotes, 'notes');
};

export { saveNotes, clearNotes, loadNotes };
