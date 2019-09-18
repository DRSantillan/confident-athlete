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

import {
	saveSourcesOfConfidence,
	clearSourcesOfConfidence,
	loadSourcesOfConfidence,
	saveDoubtsAndThoughts,
	clearDoubtsAndThoughts,
	loadDoubtsAndThoughts,
	saveConfidenceResume,
	clearConfidenceResume,
	loadConfidenceResume,
	saveEnvironmentControl,
	clearEnvironmentControl,
	loadEnvironmentControl,
	savePreGameRoutines,
	clearPreGameRoutines,
	loadPreGameRoutines,
	saveNegativeBeliefs,
	clearNegativeBeliefs,
	loadNegativeBeliefs,
	saveConfidenceTraits,
	clearConfidenceTraits,
	loadConfidenceTraits,
	saveSelfTalkStatements,
	clearSelfTalkStatements,
	loadSelfTalkStatements,
	saveCurrentDoubts,
	clearCurrentDoubts,
	loadCurrentDoubts,
	saveReframeDoubts,
	clearReframeDoubts,
	loadReframeDoubts,
	saveErrorsAndCoping,
	clearErrorsAndCoping,
	loadErrorsAndCoping,
	saveTopStrengths,
	clearTopStrengths,
	loadTopStrengths,
	saveSituationCoping,
	clearSituationCoping,
	loadSituationCoping,
	saveBehavioursToEmulate,
	clearBehavioursToEmulate,
	loadBehavioursToEmulate,
	saveMentalGameErrors,
	clearMentalGameErrors,
	loadMentalGameErrors,
	saveShortComingOfPerfection,
	clearShortComingOfPerfection,
	loadShortComingOfPerfection,
	saveNewAttitudePlan,
	clearNewAttitudePlan,
	loadNewAttitudePlan,
	saveSocialApprovalNeeds,
	clearSocialApprovalNeeds,
	loadSocialApprovalNeeds,
	saveApprovalRebuttal,
	clearApprovalRebuttal,
	loadApprovalRebuttal,
	saveIdentifyUnhealthyBeliefs,
	clearIdentifyUnhealthyBeliefs,
	loadIdentifyUnhealthyBeliefs,
	saveReplaceUnhealthyBeliefs,
	clearReplaceUnhealthyBeliefs,
	loadReplaceUnhealthyBeliefs,
	saveFearOfFailureSigns,
	clearFearOfFailureSigns,
	loadFearOfFailureSigns,
	saveFearDrivenSuccessDriven,
	clearFearDrivenSuccessDriven,
	loadFearDrivenSuccessDriven,
	saveNegativeSelfLabel,
	clearNegativeSelfLabel,
	loadNegativeSelfLabel,
	savePositiveSelfLabel,
	clearPositiveSelfLabel,
	loadPositiveSelfLabel,
	saveFeelingsOfIntimidation,
	clearFeelingsOfIntimidation,
	loadFeelingsOfIntimidation,
	saveStopIntimidation,
	clearStopIntimidation,
	loadStopIntimidation,
	saveControlFactors,
	clearControlFactors,
	loadControlFactors,
	savePainExpectations,
	clearPainExpectations,
	loadPainExpectations,
	saveManageExpectations,
	clearManageExpectations,
	loadManageExpectations,
	saveChallengeComposure,
	clearChallengeComposure,
	loadChallengeComposure,
	saveCompetitionMistakes,
	clearCompetitionMistakes,
	loadCompetitionMistakes,
	saveChallengeDispute,
	clearChallengeDispute,
	loadChallengeDispute
} from './modules/boost';

import {
	saveScoreBoard,
	clearScoreBoard,
	loadScoreBoard
} from './modules/scoreboard';

import {
	saveActionSourcesConfidence,
	clearActionSourcesConfidence,
	loadActionSourcesConfidence,
	saveActionDoubtsThoughts,
	clearActionDoubtsThoughts,
	loadActionDoubtsThoughts
} from './modules/action';

import {
	saveHealthyPhilosphy,
	clearHealthyPhilosphy,
	loadHealthyPhilosphy
} from './modules/energize';

import { saveNotes, clearNotes, loadNotes } from './modules/notes';

const saveCM = document.getElementById('saveCM');
const clearCM = document.getElementById('clearCM');
if (saveCM || clearCM) {
	saveCM.addEventListener('click', saveCompetitionMistakes);
	clearCM.addEventListener('click', clearCompetitionMistakes);
	window.addEventListener('load', loadCompetitionMistakes);
}
const saveCD = document.getElementById('saveCD');
const clearCD = document.getElementById('clearCD');
if (saveCD || clearCD) {
	saveCD.addEventListener('click', saveChallengeDispute);
	clearCD.addEventListener('click', clearChallengeDispute);
	window.addEventListener('load', loadChallengeDispute);
}

const saveCC = document.getElementById('saveCC');
const clearCC = document.getElementById('clearCC');
if (saveCC || clearCC) {
	saveCC.addEventListener('click', saveChallengeComposure);
	clearCC.addEventListener('click', clearChallengeComposure);
	window.addEventListener('load', loadChallengeComposure);
}
const saveME = document.getElementById('saveME');
const clearME = document.getElementById('clearME');
if (saveME || clearME) {
	saveME.addEventListener('click', saveManageExpectations);
	clearME.addEventListener('click', clearManageExpectations);
	window.addEventListener('load', loadManageExpectations);
}
const savePE = document.getElementById('savePE');
const clearPE = document.getElementById('clearPE');
if (savePE || clearPE) {
	savePE.addEventListener('click', savePainExpectations);
	clearPE.addEventListener('click', clearPainExpectations);
	window.addEventListener('load', loadPainExpectations);
}

const saveCF = document.getElementById('saveCF');
const clearCF = document.getElementById('clearCF');
if (saveCF || clearCF) {
	saveCF.addEventListener('click', saveControlFactors);
	clearCF.addEventListener('click', clearControlFactors);
	window.addEventListener('load', loadControlFactors);
}

const saveSI = document.getElementById('saveSI');
const clearSI = document.getElementById('clearSI');
if (saveSI || clearSI) {
	saveSI.addEventListener('click', saveStopIntimidation);
	clearSI.addEventListener('click', clearStopIntimidation);
	window.addEventListener('load', loadStopIntimidation);
}

const saveFOI = document.getElementById('saveFOI');
const clearFOI = document.getElementById('clearFOI');
if (saveFOI || clearFOI) {
	saveFOI.addEventListener('click', saveFeelingsOfIntimidation);
	clearFOI.addEventListener('click', clearFeelingsOfIntimidation);
	window.addEventListener('load', loadFeelingsOfIntimidation);
}

const savePSL = document.getElementById('savePSL');
const clearPSL = document.getElementById('clearPSL');
if (savePSL || clearPSL) {
	savePSL.addEventListener('click', savePositiveSelfLabel);
	clearPSL.addEventListener('click', clearPositiveSelfLabel);
	window.addEventListener('load', loadPositiveSelfLabel);
}

const saveNSL = document.getElementById('saveNSL');
const clearNSL = document.getElementById('clearNSL');
if (saveNSL || clearNSL) {
	saveNSL.addEventListener('click', saveNegativeSelfLabel);
	clearNSL.addEventListener('click', clearNegativeSelfLabel);
	window.addEventListener('load', loadNegativeSelfLabel);
}

const saveFDSD = document.getElementById('saveFDSD');
const clearFDSD = document.getElementById('clearFDSD');
if (saveFDSD || clearFDSD) {
	saveFDSD.addEventListener('click', saveFearDrivenSuccessDriven);
	clearFDSD.addEventListener('click', clearFearDrivenSuccessDriven);
	window.addEventListener('load', loadFearDrivenSuccessDriven);
}

const saveFOFS = document.getElementById('saveFOFS');
const clearFOFS = document.getElementById('clearFOFS');
if (saveFOFS || clearFOFS) {
	saveFOFS.addEventListener('click', saveFearOfFailureSigns);
	clearFOFS.addEventListener('click', clearFearOfFailureSigns);
	window.addEventListener('load', loadFearOfFailureSigns);
}

const saveRUB = document.getElementById('saveRUB');
const clearRUB = document.getElementById('clearRUB');
if (saveRUB || clearRUB) {
	saveRUB.addEventListener('click', saveReplaceUnhealthyBeliefs);
	clearRUB.addEventListener('click', clearReplaceUnhealthyBeliefs);
	window.addEventListener('load', loadReplaceUnhealthyBeliefs);
}

const saveIUB = document.getElementById('saveIUB');
const clearIUB = document.getElementById('clearIUB');
if (saveIUB || clearIUB) {
	saveIUB.addEventListener('click', saveIdentifyUnhealthyBeliefs);
	clearIUB.addEventListener('click', clearIdentifyUnhealthyBeliefs);
	window.addEventListener('load', loadIdentifyUnhealthyBeliefs);
}

const saveAppRebut = document.getElementById('saveAppRebut');
const clearAppRebut = document.getElementById('clearAppRebut');
if (saveAppRebut || clearAppRebut) {
	saveAppRebut.addEventListener('click', saveApprovalRebuttal);
	clearAppRebut.addEventListener('click', clearApprovalRebuttal);
	window.addEventListener('load', loadApprovalRebuttal);
}

const saveSAN = document.getElementById('saveSAN');
const clearSAN = document.getElementById('clearSAN');
if (saveSAN || clearSAN) {
	saveSAN.addEventListener('click', saveSocialApprovalNeeds);
	clearSAN.addEventListener('click', clearSocialApprovalNeeds);
	window.addEventListener('load', loadSocialApprovalNeeds);
}

const saveNewAtt = document.getElementById('saveNewAtt');
const clearNewAtt = document.getElementById('clearNewAtt');
if (saveNewAtt || clearNewAtt) {
	saveNewAtt.addEventListener('click', saveNewAttitudePlan);
	clearNewAtt.addEventListener('click', clearNewAttitudePlan);
	window.addEventListener('load', loadNewAttitudePlan);
}

const saveShortCome = document.getElementById('saveShortCome');
const clearShortCome = document.getElementById('clearShortCome');
if (saveShortCome || clearShortCome) {
	saveShortCome.addEventListener('click', saveShortComingOfPerfection);
	clearShortCome.addEventListener('click', clearShortComingOfPerfection);
	window.addEventListener('load', loadShortComingOfPerfection);
}

const saveCBMentalGame = document.getElementById('saveCBMentalGame');
const clearCBMentalGame = document.getElementById('clearCBMentalGame');
if (saveCBMentalGame || clearCBMentalGame) {
	saveCBMentalGame.addEventListener('click', saveMentalGameErrors);
	clearCBMentalGame.addEventListener('click', clearMentalGameErrors);
	window.addEventListener('load', loadMentalGameErrors);
}

const saveCompBehav = document.getElementById('saveCompBehav');
const clearCompBehav = document.getElementById('clearCompBehav');
if (saveCompBehav || clearCompBehav) {
	saveCompBehav.addEventListener('click', saveBehavioursToEmulate);
	clearCompBehav.addEventListener('click', clearBehavioursToEmulate);
	window.addEventListener('load', loadBehavioursToEmulate);
}

const savePhilos = document.getElementById('savePhilos');
const clearPhilos = document.getElementById('clearPhilos');
if (savePhilos || clearPhilos) {
	savePhilos.addEventListener('click', saveHealthyPhilosphy);
	clearPhilos.addEventListener('click', clearHealthyPhilosphy);
	window.addEventListener('load', loadHealthyPhilosphy);
}

const saveActionDoubts = document.getElementById('saveActionDoubts');
const clearActionDoubts = document.getElementById('clearActionDoubts');
if (saveActionDoubts || clearActionDoubts) {
	saveActionDoubts.addEventListener('click', saveActionDoubtsThoughts);
	clearActionDoubts.addEventListener('click', clearActionDoubtsThoughts);
	window.addEventListener('load', loadActionDoubtsThoughts);
}

const saveActionSources = document.getElementById('saveActionSources');
const clearActionSources = document.getElementById('clearActionSources');
if (saveActionSources || clearActionSources) {
	saveActionSources.addEventListener('click', saveActionSourcesConfidence);
	clearActionSources.addEventListener('click', clearActionSourcesConfidence);
	window.addEventListener('load', loadActionSourcesConfidence);
}

const saveScoreBrd = document.getElementById('saveScoreBrd');
const clearScoreBrd = document.getElementById('clearScoreBrd');
if (saveScoreBrd || clearScoreBrd) {
	saveScoreBrd.addEventListener('click', saveScoreBoard);
	clearScoreBrd.addEventListener('click', clearScoreBoard);
	window.addEventListener('load', loadScoreBoard);
}

const saveCope = document.getElementById('saveCope');
const clearCope = document.getElementById('clearCope');
if (saveCope || clearCope) {
	saveCope.addEventListener('click', saveSituationCoping);
	clearCope.addEventListener('click', clearSituationCoping);
	window.addEventListener('load', loadSituationCoping);
}

const saveStrengths = document.getElementById('saveStrengths');
const clearStrengths = document.getElementById('clearStrengths');
if (saveStrengths || clearStrengths) {
	saveStrengths.addEventListener('click', saveTopStrengths);
	clearStrengths.addEventListener('click', clearTopStrengths);
	window.addEventListener('load', loadTopStrengths);
}

const saveErrorCoping = document.getElementById('saveErrorCoping');
const clearErrorCoping = document.getElementById('clearErrorCoping');
if (saveErrorCoping || clearErrorCoping) {
	saveErrorCoping.addEventListener('click', saveErrorsAndCoping);
	clearErrorCoping.addEventListener('click', clearErrorsAndCoping);
	window.addEventListener('load', loadErrorsAndCoping);
}

const saveReframe = document.getElementById('saveReframe');
const clearReframe = document.getElementById('clearReframe');
if (saveReframe || clearReframe) {
	saveReframe.addEventListener('click', saveReframeDoubts);
	clearReframe.addEventListener('click', clearReframeDoubts);
	window.addEventListener('load', loadReframeDoubts);
}

const saveDoubts = document.getElementById('saveDoubts');
const clearDoubts = document.getElementById('clearDoubts');
if (saveDoubts || clearDoubts) {
	saveDoubts.addEventListener('click', saveCurrentDoubts);
	clearDoubts.addEventListener('click', clearCurrentDoubts);
	window.addEventListener('load', loadCurrentDoubts);
}

const saveSelfTalk = document.getElementById('saveSelfTalk');
const clearSelfTalk = document.getElementById('clearSelfTalk');
if (saveSelfTalk || clearSelfTalk) {
	saveSelfTalk.addEventListener('click', saveSelfTalkStatements);
	clearSelfTalk.addEventListener('click', clearSelfTalkStatements);
	window.addEventListener('load', loadSelfTalkStatements);
}

const saveConfTraits = document.getElementById('saveConfTraits');
const clearConfTraits = document.getElementById('clearConfTraits');
if (saveConfTraits || clearConfTraits) {
	saveConfTraits.addEventListener('click', saveConfidenceTraits);
	clearConfTraits.addEventListener('click', clearConfidenceTraits);
	window.addEventListener('load', loadConfidenceTraits);
}

const saveNegBeliefs = document.getElementById('saveNegBeliefs');
const clearNegBeliefs = document.getElementById('clearNegBeliefs');
if (saveNegBeliefs || clearNegBeliefs) {
	saveNegBeliefs.addEventListener('click', saveNegativeBeliefs);
	clearNegBeliefs.addEventListener('click', clearNegativeBeliefs);
	window.addEventListener('load', loadNegativeBeliefs);
}

const saveRoutine = document.getElementById('saveRoutine');
const clearRoutine = document.getElementById('clearRoutine');
if (saveRoutine || clearRoutine) {
	saveRoutine.addEventListener('click', savePreGameRoutines);
	clearRoutine.addEventListener('click', clearPreGameRoutines);
	window.addEventListener('load', loadPreGameRoutines);
}

const saveEnv = document.getElementById('saveEnv');
const clearEnv = document.getElementById('clearEnv');
if (saveEnv || clearEnv) {
	saveEnv.addEventListener('click', saveEnvironmentControl);
	clearEnv.addEventListener('click', clearEnvironmentControl);
	window.addEventListener('load', loadEnvironmentControl);
}

const saveResume = document.getElementById('saveResume');
const clearResume = document.getElementById('clearResume');
if (saveResume || clearResume) {
	saveResume.addEventListener('click', saveConfidenceResume);
	clearResume.addEventListener('click', clearConfidenceResume);
	window.addEventListener('load', loadConfidenceResume);
}

const savesDoubtsThoughts = document.getElementById('saveDoubtsThoughts');
const clearDoubtsThoughts = document.getElementById('clearDoubtsThoughts');
if (savesDoubtsThoughts || clearDoubtsThoughts) {
	savesDoubtsThoughts.addEventListener('click', saveDoubtsAndThoughts);
	clearDoubtsThoughts.addEventListener('click', clearDoubtsAndThoughts);
	window.addEventListener('load', loadDoubtsAndThoughts);
}
const saveSources = document.getElementById('saveSources');
const clearSources = document.getElementById('clearSources');
if (saveSources || clearSources) {
	saveSources.addEventListener('click', saveSourcesOfConfidence);
	clearSources.addEventListener('click', clearSourcesOfConfidence);
	window.addEventListener('load', loadSourcesOfConfidence);
}

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
