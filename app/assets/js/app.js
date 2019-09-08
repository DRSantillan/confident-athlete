import {
	saveAttitude,
	clearAttitude,
	loadAttitude
} from './modules/attitude/index';

import {
	saveFearTrust,
	clearFearTrust,
	loadFearTrust
} from './modules/strategy/1';
import {
	save6Traits,
	clear6Traits,
	load6Traits,
	loadTriggerSituations,
	clearTriggerSituations,
	saveTriggerSituations
} from './modules/strategy/2';
import {
	saveTop5NFMindsets,
	clearTop5NFMindsets,
	loadTop5NFMindsets
} from './modules/strategy/3';
import {
	saveTop5NFBeliefs,
	clearTop5NFBeliefs,
	loadTop5NFBeliefs,
	saveIneffectiveBelief,
	clearIneffectiveBelief,
	loadIneffectiveBelief,
	saveNewBelief,
	clearNewBelief,
	loadNewBelief
} from './modules/strategy/4';
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
import {
	saveMindReader,
	clearMindReader,
	loadMindReader
} from './modules/progress/8';

import { saveMindset, clearMindset, loadMindset } from './modules/progress/9';
import {
	saveTrustBreakdown,
	clearTrustBreakdown,
	loadTrustBreakdown
} from './modules/progress/10';
import {
	saveFunctionalMindset,
	clearFunctionalMindset,
	loadFunctionalMindset
} from './modules/progress/11';
import {
	loadCompetitionMentality,
	clearCompetitionMentality,
	saveCompetitionMentality
} from './modules/progress/12';
import {
	savePracticeMindset,
	clearPracticeMindset,
	loadPracticeMindset
} from './modules/progress/13';
import {
	loadLifeBalance,
	clearLifeBalance,
	saveLifeBalance
} from './modules/progress/14';
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
const saveSucFear = document.getElementById('saveSuccessFear');
const clearSucFear = document.getElementById('clearSuccessFear');
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
const saveMindRead = document.getElementById('saveMindRead');
const clearMindRead = document.getElementById('clearMindRead');
const saveTrainMind = document.getElementById('saveTrainMind');
const clearTrainMind = document.getElementById('clearTrainMind');

const saveBreakDowns = document.getElementById('saveBreakDowns');
const clearBreakDowns = document.getElementById('clearBreakDowns');
const saveFunctMindset = document.getElementById('saveFunctMindset');
const clearFunctMindset = document.getElementById('clearFunctMindset');

const saveCompMental = document.getElementById('saveCompMental');
const clearCompMental = document.getElementById('clearCompMental');

const savePractice = document.getElementById('savePractice');
const clearPractice = document.getElementById('clearPractice');

const saveLifeBal = document.getElementById('saveLifeBal');
const clearLifeBal = document.getElementById('clearLifeBal');

const saveTop5NF = document.getElementById('saveTop5NF');
const clearTop5NF = document.getElementById('clearTop5NF');

const saveTop5Beliefs = document.getElementById('saveTop5Beliefs');
const clearTop5Beliefs = document.getElementById('clearTop5Beliefs');

const saveIneffective = document.getElementById('saveIneffective');
const clearIneffective = document.getElementById('clearIneffective');

const saveNewBel = document.getElementById('saveNewBel');
const clearNewBel = document.getElementById('clearNewBel');

if (saveNewBel || clearNewBel) {
	saveNewBel.addEventListener('click', saveNewBelief);
	clearNewBel.addEventListener('click', clearNewBelief);
	window.addEventListener('load', loadNewBelief);
}
if (saveIneffective || clearIneffective) {
	saveIneffective.addEventListener('click', saveIneffectiveBelief);
	clearIneffective.addEventListener('click', clearIneffectiveBelief);
	window.addEventListener('load', loadIneffectiveBelief);
}
if (saveTop5Beliefs || clearTop5Beliefs) {
	saveTop5Beliefs.addEventListener('click', saveTop5NFBeliefs);
	clearTop5Beliefs.addEventListener('click', clearTop5NFBeliefs);
	window.addEventListener('load', loadTop5NFBeliefs);
}

if (saveTop5NF || clearTop5NF) {
	saveTop5NF.addEventListener('click', saveTop5NFMindsets);
	clearTop5NF.addEventListener('click', clearTop5NFMindsets);
	window.addEventListener('load', loadTop5NFMindsets);
}

if (saveLifeBal || clearLifeBal) {
	saveLifeBal.addEventListener('click', saveLifeBalance);
	clearLifeBal.addEventListener('click', clearLifeBalance);
	window.addEventListener('load', loadLifeBalance);
}
if (savePractice || clearPractice) {
	savePractice.addEventListener('click', savePracticeMindset);
	clearPractice.addEventListener('click', clearPracticeMindset);
	window.addEventListener('load', loadPracticeMindset);
}

if (saveCompMental || clearCompMental) {
	saveCompMental.addEventListener('click', saveCompetitionMentality);
	clearCompMental.addEventListener('click', clearCompetitionMentality);
	window.addEventListener('load', loadCompetitionMentality);
}

if (saveFunctMindset || clearFunctMindset) {
	saveFunctMindset.addEventListener('click', saveFunctionalMindset);
	clearFunctMindset.addEventListener('click', clearFunctionalMindset);
	window.addEventListener('load', loadFunctionalMindset);
}
if (saveBreakDowns || clearBreakDowns) {
	saveBreakDowns.addEventListener('click', saveTrustBreakdown);
	clearBreakDowns.addEventListener('click', clearTrustBreakdown);
	window.addEventListener('load', loadTrustBreakdown);
}

if (saveTrainMind || clearTrainMind) {
	saveTrainMind.addEventListener('click', saveMindset);
	clearTrainMind.addEventListener('click', clearMindset);
	window.addEventListener('load', loadMindset);
}
if (saveMindRead || clearMindRead) {
	saveMindRead.addEventListener('click', saveMindReader);
	clearMindRead.addEventListener('click', clearMindReader);
	window.addEventListener('load', loadMindReader);
}
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
