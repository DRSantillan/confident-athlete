import { displayHeader, injectPageTitle } from './modules/templates/header';
import { displayFooter } from './modules/templates/footer';
injectPageTitle();
displayHeader();
displayFooter();

import { saveAttitude, clearAttitude, loadAttitude } from './modules/attitude';
import {
	saveCommitment,
	clearCommitment,
	loadCommitment,
	saveSelfConcept,
	clearSelfConcept,
	loadSelfConcept
} from './modules/extras';
import {
	saveFearTrust,
	clearFearTrust,
	loadFearTrust,
	save6Traits,
	clear6Traits,
	load6Traits,
	loadTriggerSituations,
	clearTriggerSituations,
	saveTriggerSituations,
	saveTop5NFMindsets,
	clearTop5NFMindsets,
	loadTop5NFMindsets,
	saveTop5NFBeliefs,
	clearTop5NFBeliefs,
	loadTop5NFBeliefs,
	saveIneffectiveBelief,
	clearIneffectiveBelief,
	loadIneffectiveBelief,
	saveNewBelief,
	clearNewBelief,
	loadNewBelief,
	saveStrictExpectations,
	clearStrictExpectations,
	loadStrictExpectations,
	saveExpectations,
	clearExpectations,
	loadExpectations,
	saveChangeExpectations,
	clearChangeExpectations,
	loadChangeExpectations,
	saveTop5HotButtonsReactions,
	clearTop5HotButtonsReactions,
	loadTop5HotButtonsReactions,
	saveOldNewSelfTalk,
	clearOldNewSelfTalk,
	loadOldNewSelfTalk,
	saveDefensiveMindset,
	clearDefensiveMindset,
	loadDefensiveMindset,
	saveMentalPerformance,
	clearMentalPerformance,
	loadMentalPerformance,
	saveSocialApproval,
	clearSocialApproval,
	loadSocialApproval,
	loadCompetitionMindset,
	clearCompetitionMindset,
	saveCompetitionMindset,
	saveCommonBreakDowns,
	clearCommonBreakDowns,
	loadCommonBreakDowns,
	loadCompetitiveSituations,
	clearCompetitiveSituations,
	saveCompetitiveSituations,
	saveSportsPlan,
	clearSportsPlan,
	loadSportsPlan,
	saveUnbeatableTrust,
	clearUnbeatableTrust,
	loadUnbeatableTrust,
	savePracticeRoutines,
	clearPracticeRoutines,
	loadPracticeRoutines,
	saveRoles,
	clearRoles,
	loadRoles,
	saveRecretional,
	clearRecretional,
	loadRecretional
} from './modules/strategy';

import {
	saveSelfAwareness,
	clearSelfAwareness,
	loadSelfAwareness,
	loadSuccessFear,
	clearSuccessFear,
	saveSuccessFear,
	loadTop5Characteristics,
	clearTop5Characteristics,
	saveTop5Characteristics,
	loadFunctionalMindsetPerformance,
	clearFunctionalMindsetPerformance,
	saveFunctionalMindsetPerformance,
	savePerformanceExpectations,
	clearPerformanceExpectations,
	loadPerformanceExpectations,
	saveHotButtons,
	clearHotButtons,
	loadHotButtons,
	saveProcessGoals,
	clearProcessGoals,
	loadProcessGoals,
	saveMindReader,
	clearMindReader,
	loadMindReader,
	saveMindset,
	clearMindset,
	loadMindset,
	saveTrustBreakdown,
	clearTrustBreakdown,
	loadTrustBreakdown,
	saveFunctionalMindset,
	clearFunctionalMindset,
	loadFunctionalMindset,
	loadCompetitionMentality,
	clearCompetitionMentality,
	saveCompetitionMentality,
	savePracticeMindset,
	clearPracticeMindset,
	loadPracticeMindset,
	loadLifeBalance,
	clearLifeBalance,
	saveLifeBalance
} from './modules/progress';

import { saveNotes, clearNotes, loadNotes } from './modules/notes';

const saveNote = document.getElementById('saveNotes');
const clearNote = document.getElementById('clearNotes');
const saveFrTrust = document.getElementById('saveFearTrust');
const clearFrTrust = document.getElementById('clearFearTrust');
const saveAware = document.getElementById('saveSelfAwareness');
const clearAware = document.getElementById('clearSelfAwareness');
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
const saveComm = document.getElementById('saveComm');
const clearComm = document.getElementById('clearComm');
const saveRec = document.getElementById('saveRec');
const clearRec = document.getElementById('clearRec');
const saveRole = document.getElementById('saveRole');
const clearRole = document.getElementById('clearRole');
const savePracticeRoute = document.getElementById('savePracticeRoute');
const clearPracticeRoute = document.getElementById('clearPracticeRoute');
const saveUnbeatTrust = document.getElementById('saveUnbeatTrust');
const clearUnbeatTrust = document.getElementById('clearUnbeatTrust');
const saveSport = document.getElementById('saveSport');
const clearSport = document.getElementById('clearSport');
const saveTop3Trust = document.getElementById('saveTop3Trust');
const clearTop3Trust = document.getElementById('clearTop3Trust');
const saveCompSit = document.getElementById('saveCompSit');
const clearCompSit = document.getElementById('clearCompSit');
const saveCompMind = document.getElementById('saveCompMind');
const clearCompMind = document.getElementById('clearCompMind');
const saveSocApp = document.getElementById('saveSocApp');
const clearSocApp = document.getElementById('clearSocApp');
const saveMenPerf = document.getElementById('saveMenPerf');
const clearMenPerf = document.getElementById('clearMenPerf');
const saveDefMind = document.getElementById('saveDefMind');
const clearDefMind = document.getElementById('clearDefMind');
const saveOldNew = document.getElementById('saveOldNew');
const clearOldNew = document.getElementById('clearOldNew');
const saveHot = document.getElementById('saveHot');
const clearHot = document.getElementById('clearHot');
const saveChange = document.getElementById('saveChange');
const clearChange = document.getElementById('clearChange');
const saveExpects = document.getElementById('saveExpects');
const clearExpects = document.getElementById('clearExpects');
const saveStrictExpect = document.getElementById('saveStrictExpect');
const clearStrictExpect = document.getElementById('clearStrictExpect');
const saveAtt = document.getElementById('saveAttitude');
const clearAtt = document.getElementById('clearAttitude');

if (saveSelfCon || clearSelfCon) {
	saveSelfCon.addEventListener('click', saveSelfConcept);
	clearSelfCon.addEventListener('click', clearSelfConcept);
	window.addEventListener('load', loadSelfConcept);
}
if (saveComm || clearComm) {
	saveComm.addEventListener('click', saveCommitment);
	clearComm.addEventListener('click', clearCommitment);
	window.addEventListener('load', loadCommitment);
}
if (saveRec || clearRec) {
	saveRec.addEventListener('click', saveRecretional);
	clearRec.addEventListener('click', clearRecretional);
	window.addEventListener('load', loadRecretional);
}
if (saveRole || clearRole) {
	saveRole.addEventListener('click', saveRoles);
	clearRole.addEventListener('click', clearRoles);
	window.addEventListener('load', loadRoles);
}
if (savePracticeRoute || clearPracticeRoute) {
	savePracticeRoute.addEventListener('click', savePracticeRoutines);
	clearPracticeRoute.addEventListener('click', clearPracticeRoutines);
	window.addEventListener('load', loadPracticeRoutines);
}
if (saveUnbeatTrust || clearUnbeatTrust) {
	saveUnbeatTrust.addEventListener('click', saveUnbeatableTrust);
	clearUnbeatTrust.addEventListener('click', clearUnbeatableTrust);
	window.addEventListener('load', loadUnbeatableTrust);
}
if (saveSport || clearSport) {
	saveSport.addEventListener('click', saveSportsPlan);
	clearSport.addEventListener('click', clearSportsPlan);
	window.addEventListener('load', loadSportsPlan);
}
if (saveTop3Trust || clearTop3Trust) {
	saveTop3Trust.addEventListener('click', saveCommonBreakDowns);
	clearTop3Trust.addEventListener('click', clearCommonBreakDowns);
	window.addEventListener('load', loadCommonBreakDowns);
}
if (saveCompSit || clearCompSit) {
	saveCompSit.addEventListener('click', saveCompetitiveSituations);
	clearCompSit.addEventListener('click', clearCompetitiveSituations);
	window.addEventListener('load', loadCompetitiveSituations);
}
if (saveCompMind || clearCompMind) {
	saveCompMind.addEventListener('click', saveCompetitionMindset);
	clearCompMind.addEventListener('click', clearCompetitionMindset);
	window.addEventListener('load', loadCompetitionMindset);
}
if (saveSocApp || clearSocApp) {
	saveSocApp.addEventListener('click', saveSocialApproval);
	clearSocApp.addEventListener('click', clearSocialApproval);
	window.addEventListener('load', loadSocialApproval);
}
if (saveMenPerf || clearMenPerf) {
	saveMenPerf.addEventListener('click', saveMentalPerformance);
	clearMenPerf.addEventListener('click', clearMentalPerformance);
	window.addEventListener('load', loadMentalPerformance);
}

if (saveDefMind || clearDefMind) {
	saveDefMind.addEventListener('click', saveDefensiveMindset);
	clearDefMind.addEventListener('click', clearDefensiveMindset);
	window.addEventListener('load', loadDefensiveMindset);
}
if (saveOldNew || clearOldNew) {
	saveOldNew.addEventListener('click', saveOldNewSelfTalk);
	clearOldNew.addEventListener('click', clearOldNewSelfTalk);
	window.addEventListener('load', loadOldNewSelfTalk);
}
if (saveHot || clearHot) {
	saveHot.addEventListener('click', saveTop5HotButtonsReactions);
	clearHot.addEventListener('click', clearTop5HotButtonsReactions);
	window.addEventListener('load', loadTop5HotButtonsReactions);
}
if (saveChange || clearChange) {
	saveChange.addEventListener('click', saveChangeExpectations);
	clearChange.addEventListener('click', clearChangeExpectations);
	window.addEventListener('load', loadChangeExpectations);
}
if (saveExpects || clearExpects) {
	saveExpects.addEventListener('click', saveExpectations);
	clearExpects.addEventListener('click', clearExpectations);
	window.addEventListener('load', loadExpectations);
}
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
	saveExpect.addEventListener('click', savePerformanceExpectations);
	clearExpect.addEventListener('click', clearPerformanceExpectations);
	window.addEventListener('load', loadPerformanceExpectations);
}
if (savePerfFunct || clearPerfFunct) {
	savePerfFunct.addEventListener('click', saveFunctionalMindsetPerformance);
	clearPerfFunct.addEventListener('click', clearFunctionalMindsetPerformance);
	window.addEventListener('load', loadFunctionalMindsetPerformance);
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
	saveTop5.addEventListener('click', saveTop5Characteristics);
	clearTop5.addEventListener('click', clearTop5Characteristics);
	window.addEventListener('load', loadTop5Characteristics);
}
if (saveAware || clearAware) {
	saveAware.addEventListener('click', saveSelfAwareness);
	clearAware.addEventListener('click', clearSelfAwareness);
	window.addEventListener('load', loadSelfAwareness);
}
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
