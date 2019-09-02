import {
	saveAttitudeAnswers,
	clearAttitudeAnswers,
	loadAttitudeAnswers
} from './modules/attitude';
import {
	saveTableOneAnswers,
	clearTableOneAnswers,
	loadTableOneAnswers
} from './modules/strategy';
import {
	saveAwarenessAnswers,
	clearAwarenessAnswers,
	loadAwarenessAnswers
} from './modules/progress';
import { saveNotes, clearNotes, loadNotes } from './modules/notes';
import { getProgram, getPage, setInputsToDefault } from './modules/util';
const saveAttitudeAns = document.getElementById('saveAttitude');
const clearAttitudeAns = document.getElementById('clearAttitude');
saveAttitudeAns.addEventListener('click', saveAttitudeAnswers);
clearAttitudeAns.addEventListener('click', clearAttitudeAnswers);

if (getPage() === 1) {
	const saveTableOne = document.getElementById('saveTableOneAssessment');
	const clearTableOne = document.getElementById('clearTableOneAssessment');
	saveTableOne.addEventListener('click', saveTableOneAnswers);
	clearTableOne.addEventListener('click', clearTableOneAnswers);

	const saveAwareness = document.getElementById('saveAwarenessAssessment');
	const clearAwareness = document.getElementById('clearAwarenessAssessment');
	saveAwareness.addEventListener('click', saveAwarenessAnswers);
	clearAwareness.addEventListener('click', clearAwarenessAnswers);
	window.addEventListener('load', loadTableOneAnswers);
	window.addEventListener('load', loadAwarenessAnswers);
}

const saveNote = document.getElementById('saveNotes');
const clearNote = document.getElementById('clearNotes');
saveNote.addEventListener('click', saveNotes);
clearNote.addEventListener('click', clearNotes);

window.addEventListener('load', loadAttitudeAnswers);

window.addEventListener('load', loadNotes);
