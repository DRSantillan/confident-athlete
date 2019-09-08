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
	saveStrictExpectations,
	clearStrictExpectations,
	loadStrictExpectations,
	saveExpectations,
	clearExpectations,
	loadExpectations,
	saveChangeExpectations,
	clearChangeExpectations,
	loadChangeExpectations
} from './modules/strategy/5';
import {
	saveTop5HotButtonsReactions,
	clearTop5HotButtonsReactions,
	loadTop5HotButtonsReactions,
	saveOldNewSelfTalk,
	clearOldNewSelfTalk,
	loadOldNewSelfTalk
} from './modules/strategy/6';
import {
	saveDefensiveMindset,
	clearDefensiveMindset,
	loadDefensiveMindset,
	saveMentalPerformance,
	clearMentalPerformance,
	loadMentalPerformance
} from './modules/strategy/7';
import {
	saveSocialApproval,
	clearSocialApproval,
	loadSocialApproval
} from './modules/strategy/8';
import {
	loadCompetitionMindset,
	clearCompetitionMindset,
	saveCompetitionMindset
} from './modules/strategy/9';
import {
	saveCommonBreakDowns,
	clearCommonBreakDowns,
	loadCommonBreakDowns,
	loadCompetitiveSituations,
	clearCompetitiveSituations,
	saveCompetitiveSituations
} from './modules/strategy/10';
import {
	saveSportsPlan,
	clearSportsPlan,
	loadSportsPlan
} from './modules/strategy/11';
import {
	saveUnbeatableTrust,
	clearUnbeatableTrust,
	loadUnbeatableTrust
} from './modules/strategy/12';
import {
	savePracticeRoutines,
	clearPracticeRoutines,
	loadPracticeRoutines
} from './modules/strategy/13';
import {
	saveRoles,
	clearRoles,
	loadRoles,
	saveRecretional,
	clearRecretional,
	loadRecretional
} from './modules/strategy/14';
import {
	saveCommitment,
	clearCommitment,
	loadCommitment
} from './modules/strategy/commitment';
import {
	saveSelfConcept,
	clearSelfConcept,
	loadSelfConcept
} from './modules/strategy/selfconcept';
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

const saveSelfCon = document.getElementById('saveSelfCon');
const clearSelfCon = document.getElementById('clearSelfCon');
if (saveSelfCon || clearSelfCon) {
	saveSelfCon.addEventListener('click', saveSelfConcept);
	clearSelfCon.addEventListener('click', clearSelfConcept);
	window.addEventListener('load', loadSelfConcept);
}

const saveComm = document.getElementById('saveComm');
const clearComm = document.getElementById('clearComm');
if (saveComm || clearComm) {
	saveComm.addEventListener('click', saveCommitment);
	clearComm.addEventListener('click', clearCommitment);
	window.addEventListener('load', loadCommitment);
}

const saveRec = document.getElementById('saveRec');
const clearRec = document.getElementById('clearRec');
if (saveRec || clearRec) {
	saveRec.addEventListener('click', saveRecretional);
	clearRec.addEventListener('click', clearRecretional);
	window.addEventListener('load', loadRecretional);
}

const saveRole = document.getElementById('saveRole');
const clearRole = document.getElementById('clearRole');
if (saveRole || clearRole) {
	saveRole.addEventListener('click', saveRoles);
	clearRole.addEventListener('click', clearRoles);
	window.addEventListener('load', loadRoles);
}

const savePracticeRoute = document.getElementById('savePracticeRoute');
const clearPracticeRoute = document.getElementById('clearPracticeRoute');
if (savePracticeRoute || clearPracticeRoute) {
	savePracticeRoute.addEventListener('click', savePracticeRoutines);
	clearPracticeRoute.addEventListener('click', clearPracticeRoutines);
	window.addEventListener('load', loadPracticeRoutines);
}

const saveUnbeatTrust = document.getElementById('saveUnbeatTrust');
const clearUnbeatTrust = document.getElementById('clearUnbeatTrust');
if (saveUnbeatTrust || clearUnbeatTrust) {
	saveUnbeatTrust.addEventListener('click', saveUnbeatableTrust);
	clearUnbeatTrust.addEventListener('click', clearUnbeatableTrust);
	window.addEventListener('load', loadUnbeatableTrust);
}

const saveSport = document.getElementById('saveSport');
const clearSport = document.getElementById('clearSport');
if (saveSport || clearSport) {
	saveSport.addEventListener('click', saveSportsPlan);
	clearSport.addEventListener('click', clearSportsPlan);
	window.addEventListener('load', loadSportsPlan);
}

const saveTop3Trust = document.getElementById('saveTop3Trust');
const clearTop3Trust = document.getElementById('clearTop3Trust');
if (saveTop3Trust || clearTop3Trust) {
	saveTop3Trust.addEventListener('click', saveCommonBreakDowns);
	clearTop3Trust.addEventListener('click', clearCommonBreakDowns);
	window.addEventListener('load', loadCommonBreakDowns);
}

const saveCompSit = document.getElementById('saveCompSit');
const clearCompSit = document.getElementById('clearCompSit');
if (saveCompSit || clearCompSit) {
	saveCompSit.addEventListener('click', saveCompetitiveSituations);
	clearCompSit.addEventListener('click', clearCompetitiveSituations);
	window.addEventListener('load', loadCompetitiveSituations);
}

const saveCompMind = document.getElementById('saveCompMind');
const clearCompMind = document.getElementById('clearCompMind');
if (saveCompMind || clearCompMind) {
	saveCompMind.addEventListener('click', saveCompetitionMindset);
	clearCompMind.addEventListener('click', clearCompetitionMindset);
	window.addEventListener('load', loadCompetitionMindset);
}

const saveSocApp = document.getElementById('saveSocApp');
const clearSocApp = document.getElementById('clearSocApp');
if (saveSocApp || clearSocApp) {
	saveSocApp.addEventListener('click', saveSocialApproval);
	clearSocApp.addEventListener('click', clearSocialApproval);
	window.addEventListener('load', loadSocialApproval);
}

const saveMenPerf = document.getElementById('saveMenPerf');
const clearMenPerf = document.getElementById('clearMenPerf');
if (saveMenPerf || clearMenPerf) {
	saveMenPerf.addEventListener('click', saveMentalPerformance);
	clearMenPerf.addEventListener('click', clearMentalPerformance);
	window.addEventListener('load', loadMentalPerformance);
}
const saveDefMind = document.getElementById('saveDefMind');
const clearDefMind = document.getElementById('clearDefMind');
if (saveDefMind || clearDefMind) {
	saveDefMind.addEventListener('click', saveDefensiveMindset);
	clearDefMind.addEventListener('click', clearDefensiveMindset);
	window.addEventListener('load', loadDefensiveMindset);
}

const saveOldNew = document.getElementById('saveOldNew');
const clearOldNew = document.getElementById('clearOldNew');
if (saveOldNew || clearOldNew) {
	saveOldNew.addEventListener('click', saveOldNewSelfTalk);
	clearOldNew.addEventListener('click', clearOldNewSelfTalk);
	window.addEventListener('load', loadOldNewSelfTalk);
}

const saveHot = document.getElementById('saveHot');
const clearHot = document.getElementById('clearHot');
if (saveHot || clearHot) {
	saveHot.addEventListener('click', saveTop5HotButtonsReactions);
	clearHot.addEventListener('click', clearTop5HotButtonsReactions);
	window.addEventListener('load', loadTop5HotButtonsReactions);
}

const saveChange = document.getElementById('saveChange');
const clearChange = document.getElementById('clearChange');
if (saveChange || clearChange) {
	saveChange.addEventListener('click', saveChangeExpectations);
	clearChange.addEventListener('click', clearChangeExpectations);
	window.addEventListener('load', loadChangeExpectations);
}
const saveExpects = document.getElementById('saveExpects');
const clearExpects = document.getElementById('clearExpects');
if (saveExpects || clearExpects) {
	saveExpects.addEventListener('click', saveExpectations);
	clearExpects.addEventListener('click', clearExpectations);
	window.addEventListener('load', loadExpectations);
}

const saveStrictExpect = document.getElementById('saveStrictExpect');
const clearStrictExpect = document.getElementById('clearStrictExpect');
if (saveStrictExpect || clearStrictExpect) {
	saveStrictExpect.addEventListener('click', saveStrictExpectations);
	clearStrictExpect.addEventListener('click', clearStrictExpectations);
	window.addEventListener('load', loadStrictExpectations);
}
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

const saveAtt = document.getElementById('saveAttitude');
const clearAtt = document.getElementById('clearAttitude');

if (saveAtt || clearAtt) {
	saveAtt.addEventListener('click', saveAttitude);
	clearAtt.addEventListener('click', clearAttitude);
	window.addEventListener('load', loadAttitude);
}
if (saveNote || clearNote) {
	saveNote.addEventListener('click', saveNotes);
	clearNote.addEventListener('click', clearNotes);
	window.addEventListener('load', loadNotes);
}
