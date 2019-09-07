import {
	saveAttitude,
	clearAttitude,
	loadAttitude
} from './modules/attitude/index';
import {
	save6Traits,
	clear6Traits,
	load6Traits,
	loadTriggerSituations,
	clearTriggerSituations,
	saveTriggerSituations
} from './modules/strategy/2';
import {
	saveFearTrust,
	clearFearTrust,
	loadFearTrust
} from './modules/strategy/1';

import {
	saveAwareness,
	clearAwareness,
	loadAwareness
} from './modules/progress/1';
import {
	loadSuccessFear,
	clearSuccessFear,
	saveSuccessFear
} from './modules/progress/2';
import {
	loadTop5Char,
	clearTop5Char,
	saveTop5Char
} from './modules/progress/3';
import {
	loadPerformFunct,
	clearPerformFunct,
	savePerformFunct
} from './modules/progress/4';
import {
	saveExpectConfidence,
	clearExpectConfidence,
	loadExpectConfidence
} from './modules/progress/5';
import {
	saveHotButtons,
	clearHotButtons,
	loadHotButtons
} from './modules/progress/6';
import {
	saveProcessGoals,
	clearProcessGoals,
	loadProcessGoals
} from './modules/progress/7';
import { saveNotes, clearNotes, loadNotes } from './modules/notes';

const saveAtt = document.getElementById('saveAttitude');
const clearAtt = document.getElementById('clearAttitude');
const saveNote = document.getElementById('saveNotes');
const clearNote = document.getElementById('clearNotes');
const saveFrTrust = document.getElementById('saveFearTrust');
const clearFrTrust = document.getElementById('clearFearTrust');
const saveAware = document.getElementById('saveAwareness');
const clearAware = document.getElementById('clearAwareness');
const save6Trts = document.getElementById('save6Traits');
const clear6Trts = document.getElementById('clear6Traits');
const saveTrigSit = document.getElementById('saveTrigSit');
const clearTrigSit = document.getElementById('clearTrigSit');
const saveSucFear = document.getElementById('saveTable4');
const clearSucFear = document.getElementById('clearTable4');
const saveTop5 = document.getElementById('saveTop5');
const clearTop5 = document.getElementById('clearTop5');
const savePerfFunct = document.getElementById('savePerfFunct');
const clearPerfFunct = document.getElementById('clearPerfFunct');
const saveExpect = document.getElementById('saveExpect');
const clearExpect = document.getElementById('clearExpect');
const saveHotBtn = document.getElementById('saveHotBtn');
const clearHotBtn = document.getElementById('clearHotBtn');
const saveProcGoals = document.getElementById('saveProcessGoals');
const clearProcGoals = document.getElementById('clearProcessGoals');

if (saveProcGoals || clearProcGoals) {
	saveProcGoals.addEventListener('click', saveProcessGoals);
	clearProcGoals.addEventListener('click', clearProcessGoals);
	window.addEventListener('load', loadProcessGoals);
}

if (saveHotBtn || clearHotBtn) {
	saveHotBtn.addEventListener('click', saveHotButtons);
	clearHotBtn.addEventListener('click', clearHotButtons);
	window.addEventListener('load', loadHotButtons);
}
if (saveExpect || clearExpect) {
	saveExpect.addEventListener('click', saveExpectConfidence);
	clearExpect.addEventListener('click', clearExpectConfidence);
	window.addEventListener('load', loadExpectConfidence);
}
if (savePerfFunct || clearPerfFunct) {
	savePerfFunct.addEventListener('click', savePerformFunct);
	clearPerfFunct.addEventListener('click', clearPerformFunct);
	window.addEventListener('load', loadPerformFunct);
}
if (saveFrTrust || clearFrTrust) {
	saveFrTrust.addEventListener('click', saveFearTrust);
	clearFrTrust.addEventListener('click', clearFearTrust);
	window.addEventListener('load', loadFearTrust);
}
if (save6Trts || save6Trts) {
	save6Trts.addEventListener('click', save6Traits);
	clear6Trts.addEventListener('click', clear6Traits);
	window.addEventListener('load', load6Traits);
}
if (saveTrigSit || clearTrigSit) {
	saveTrigSit.addEventListener('click', saveTriggerSituations);
	clearTrigSit.addEventListener('click', clearTriggerSituations);
	window.addEventListener('load', loadTriggerSituations);
}
if (saveSucFear || clearSucFear) {
	saveSucFear.addEventListener('click', saveSuccessFear);
	clearSucFear.addEventListener('click', clearSuccessFear);
	window.addEventListener('load', loadSuccessFear);
}
if (saveTop5 || clearTop5) {
	saveTop5.addEventListener('click', saveTop5Char);
	clearTop5.addEventListener('click', clearTop5Char);
	window.addEventListener('load', loadTop5Char);
}
if (saveAware || clearAware) {
	saveAware.addEventListener('click', saveAwareness);
	clearAware.addEventListener('click', clearAwareness);
	window.addEventListener('load', loadAwareness);
}
saveAtt.addEventListener('click', saveAttitude);
clearAtt.addEventListener('click', clearAttitude);
saveNote.addEventListener('click', saveNotes);
clearNote.addEventListener('click', clearNotes);

window.addEventListener('load', loadAttitude);

window.addEventListener('load', loadNotes);
