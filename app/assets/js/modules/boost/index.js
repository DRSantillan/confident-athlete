import {
	saveDDL,
	clearDDL,
	loadDDL,
	saveCheckBoxes,
	clearCheckBoxes,
	loadCheckBoxes,
	saveTextBoxes,
	clearTextBoxes,
	loadTextBoxes
} from '../../lib';

const types = [
	'sources-confidence',
	'doubts-thoughts',
	'confidence-resume',
	'environment-control',
	'pregame-routine',
	'negative-beliefs',
	'confidence-traits',
	'self-talk-statements',
	'current-doubts',
	'reframe-doubts',
	'error-coping',
	'top-strengths',
	'situation-coping',
	'behaviours-emulate',
	'mental-game-errors',
	'shortcoming-perfection',
	'new-attitude-plan',
	'social-approval-need',
	'approval-rebuttal',
	'identify-unhealthy-beliefs',
	'replace-unhealthy-beliefs',
	'fear-of-failure-signs',
	'fear-driven-success-driven',
	'negative-self-labels',
	'positive-self-labels',
	'feelings-intimidation',
	'stop-intimidation',
	'control-factors',
	'pain-expectations',
	'manage-expectations',
	'challenge-composure',
	'competition-mistakes',
	'challenge-dispute'
];
const area = 'boost';

/* Day 1 Boost */
const ddl = document.getElementsByClassName(types[0]);
const saveSourcesOfConfidence = () => {
	saveDDL(ddl, area, types[0]);
};
const clearSourcesOfConfidence = () => {
	clearDDL(ddl, area, types[0]);
};

const loadSourcesOfConfidence = () => {
	loadDDL(ddl, area, types[0]);
};
/* Day 2 Boost */
const inputDoubts = document.getElementsByClassName(types[1]);
const saveDoubtsAndThoughts = () => {
	saveTextBoxes(inputDoubts, area, types[1]);
};
const clearDoubtsAndThoughts = () => {
	clearTextBoxes(inputDoubts, area, types[1]);
};

const loadDoubtsAndThoughts = () => {
	loadTextBoxes(inputDoubts, area, types[1]);
};
/* Day 3 Boost */
const inputResume = document.getElementsByClassName(types[2]);
const saveConfidenceResume = () => {
	saveTextBoxes(inputResume, area, types[2]);
};
const clearConfidenceResume = () => {
	clearTextBoxes(inputResume, area, types[2]);
};

const loadConfidenceResume = () => {
	loadTextBoxes(inputResume, area, types[2]);
};
/* Day 4 Boost */
const inputEnv = document.getElementsByClassName(types[3]);
const saveEnvironmentControl = () => {
	saveTextBoxes(inputEnv, area, types[3]);
};
const clearEnvironmentControl = () => {
	clearTextBoxes(inputEnv, area, types[3]);
};

const loadEnvironmentControl = () => {
	loadTextBoxes(inputEnv, area, types[3]);
};
/* Day 5 Boost */
const inputRoutine = document.getElementsByClassName(types[4]);
const savePreGameRoutines = () => {
	saveTextBoxes(inputRoutine, area, types[4]);
};
const clearPreGameRoutines = () => {
	clearTextBoxes(inputRoutine, area, types[4]);
};

const loadPreGameRoutines = () => {
	loadTextBoxes(inputRoutine, area, types[4]);
};
/* Day 6 Boost */
const inputNegBeliefs = document.getElementsByClassName(types[5]);
const saveNegativeBeliefs = () => {
	saveTextBoxes(inputNegBeliefs, area, types[5]);
};
const clearNegativeBeliefs = () => {
	clearTextBoxes(inputNegBeliefs, area, types[5]);
};

const loadNegativeBeliefs = () => {
	loadTextBoxes(inputNegBeliefs, area, types[5]);
};
/* Day 7 Boost */
const inputConfTraits = document.getElementsByClassName(types[6]);
const saveConfidenceTraits = () => {
	saveTextBoxes(inputConfTraits, area, types[6]);
};
const clearConfidenceTraits = () => {
	clearTextBoxes(inputConfTraits, area, types[6]);
};

const loadConfidenceTraits = () => {
	loadTextBoxes(inputConfTraits, area, types[6]);
};

/* Day 9 Boost */
const inputSelftTalk = document.getElementsByClassName(types[7]);
const saveSelfTalkStatements = () => {
	saveTextBoxes(inputSelftTalk, area, types[7]);
};
const clearSelfTalkStatements = () => {
	clearTextBoxes(inputSelftTalk, area, types[7]);
};

const loadSelfTalkStatements = () => {
	loadTextBoxes(inputSelftTalk, area, types[7]);
};
/* Day 10 Boost */
const inputCurrentDoubts = document.getElementsByClassName(types[8]);
const saveCurrentDoubts = () => {
	saveTextBoxes(inputCurrentDoubts, area, types[8]);
};
const clearCurrentDoubts = () => {
	clearTextBoxes(inputCurrentDoubts, area, types[8]);
};

const loadCurrentDoubts = () => {
	loadTextBoxes(inputCurrentDoubts, area, types[8]);
};
/*  */
const inputReframe = document.getElementsByClassName(types[9]);
const saveReframeDoubts = () => {
	saveTextBoxes(inputReframe, area, types[9]);
};
const clearReframeDoubts = () => {
	clearTextBoxes(inputReframe, area, types[9]);
};

const loadReframeDoubts = () => {
	loadTextBoxes(inputReframe, area, types[9]);
};

/* Day 12 Boost */
const inputErrorCoping = document.getElementsByClassName(types[10]);
const saveErrorsAndCoping = () => {
	saveTextBoxes(inputErrorCoping, area, types[10]);
};
const clearErrorsAndCoping = () => {
	clearTextBoxes(inputErrorCoping, area, types[10]);
};
const loadErrorsAndCoping = () => {
	loadTextBoxes(inputErrorCoping, area, types[10]);
};

/* Day 13 Boost */
const inputStrength = document.getElementsByClassName(types[11]);
const saveTopStrengths = () => {
	saveTextBoxes(inputStrength, area, types[11]);
};
const clearTopStrengths = () => {
	clearTextBoxes(inputStrength, area, types[11]);
};
const loadTopStrengths = () => {
	loadTextBoxes(inputStrength, area, types[11]);
};
/* Day 14 Boost */
const inputTryingSits = document.getElementsByClassName(types[12]);
const saveSituationCoping = () => {
	saveTextBoxes(inputTryingSits, area, types[12]);
};
const clearSituationCoping = () => {
	clearTextBoxes(inputTryingSits, area, types[12]);
};

const loadSituationCoping = () => {
	loadTextBoxes(inputTryingSits, area, types[12]);
};

/* Day 1 Composure Boost */
const inputBehavEmul = document.getElementsByClassName(types[13]);
const saveBehavioursToEmulate = () => {
	saveTextBoxes(inputBehavEmul, area, types[13]);
};
const clearBehavioursToEmulate = () => {
	clearTextBoxes(inputBehavEmul, area, types[13]);
};

const loadBehavioursToEmulate = () => {
	loadTextBoxes(inputBehavEmul, area, types[13]);
};

/* Day 2 Composure Boost */
const inputMGErr = document.getElementsByClassName(types[14]);
const saveMentalGameErrors = () => {
	saveCheckBoxes(inputMGErr, area, types[14]);
};
const clearMentalGameErrors = () => {
	clearCheckBoxes(inputMGErr, area, types[14]);
};

const loadMentalGameErrors = () => {
	loadCheckBoxes(inputMGErr, area, types[14]);
};

/* Day 3 Composure Boost */
const inputSCOP = document.getElementsByClassName(types[15]);
const saveShortComingOfPerfection = () => {
	saveTextBoxes(inputSCOP, area, types[15]);
};
const clearShortComingOfPerfection = () => {
	clearTextBoxes(inputSCOP, area, types[15]);
};

const loadShortComingOfPerfection = () => {
	loadTextBoxes(inputSCOP, area, types[15]);
};

/* Day 3.2 Composure Boost */
const inputNAP = document.getElementsByClassName(types[16]);
const saveNewAttitudePlan = () => {
	saveTextBoxes(inputNAP, area, types[16]);
};
const clearNewAttitudePlan = () => {
	clearTextBoxes(inputNAP, area, types[16]);
};

const loadNewAttitudePlan = () => {
	loadTextBoxes(inputNAP, area, types[16]);
};

/* Day 4 Composure Boost */
const inputSAN = document.getElementsByClassName(types[17]);
const saveSocialApprovalNeeds = () => {
	saveTextBoxes(inputSAN, area, types[17]);
};
const clearSocialApprovalNeeds = () => {
	clearTextBoxes(inputSAN, area, types[17]);
};

const loadSocialApprovalNeeds = () => {
	loadTextBoxes(inputSAN, area, types[17]);
};

/* Day 4.2 Composure Boost */
const inputAppRebut = document.getElementsByClassName(types[18]);
const saveApprovalRebuttal = () => {
	saveTextBoxes(inputAppRebut, area, types[18]);
};
const clearApprovalRebuttal = () => {
	clearTextBoxes(inputAppRebut, area, types[18]);
};
const loadApprovalRebuttal = () => {
	loadTextBoxes(inputAppRebut, area, types[18]);
};

/* Day 5 Composure Boost */
const inputIUB = document.getElementsByClassName(types[19]);
const saveIdentifyUnhealthyBeliefs = () => {
	saveTextBoxes(inputIUB, area, types[19]);
};
const clearIdentifyUnhealthyBeliefs = () => {
	clearTextBoxes(inputIUB, area, types[19]);
};

const loadIdentifyUnhealthyBeliefs = () => {
	loadTextBoxes(inputIUB, area, types[19]);
};

/* Day 5.2 Composure Boost */
const inputRUB = document.getElementsByClassName(types[20]);
const saveReplaceUnhealthyBeliefs = () => {
	saveTextBoxes(inputRUB, area, types[20]);
};
const clearReplaceUnhealthyBeliefs = () => {
	clearTextBoxes(inputRUB, area, types[20]);
};

const loadReplaceUnhealthyBeliefs = () => {
	loadTextBoxes(inputRUB, area, types[20]);
};

/* Day 6 Composure Boost */
const inputFOFS = document.getElementsByClassName(types[21]);
const saveFearOfFailureSigns = () => {
	saveCheckBoxes(inputFOFS, area, types[21]);
};
const clearFearOfFailureSigns = () => {
	clearCheckBoxes(inputFOFS, area, types[21]);
};

const loadFearOfFailureSigns = () => {
	loadCheckBoxes(inputFOFS, area, types[21]);
};

/* Day 7 Composure Boost */
const inputFDSD = document.getElementsByClassName(types[22]);
const saveFearDrivenSuccessDriven = () => {
	saveTextBoxes(inputFDSD, area, types[22]);
};
const clearFearDrivenSuccessDriven = () => {
	clearTextBoxes(inputFDSD, area, types[22]);
};

const loadFearDrivenSuccessDriven = () => {
	loadTextBoxes(inputFDSD, area, types[22]);
};

/* Day 8 Composure Boost */
const inputNSL = document.getElementsByClassName(types[23]);
const saveNegativeSelfLabel = () => {
	saveTextBoxes(inputNSL, area, types[23]);
};
const clearNegativeSelfLabel = () => {
	clearTextBoxes(inputNSL, area, types[23]);
};

const loadNegativeSelfLabel = () => {
	loadTextBoxes(inputNSL, area, types[23]);
};
/* Day 8.2 Composure Boost */
const inputPSL = document.getElementsByClassName(types[24]);
const savePositiveSelfLabel = () => {
	saveTextBoxes(inputPSL, area, types[24]);
};
const clearPositiveSelfLabel = () => {
	clearTextBoxes(inputPSL, area, types[24]);
};
const loadPositiveSelfLabel = () => {
	loadTextBoxes(inputPSL, area, types[24]);
};

/* Day 10 Composure Boost */
const inputFOI = document.getElementsByClassName(types[25]);
const saveFeelingsOfIntimidation = () => {
	saveTextBoxes(inputFOI, area, types[25]);
};
const clearFeelingsOfIntimidation = () => {
	clearTextBoxes(inputFOI, area, types[25]);
};
const loadFeelingsOfIntimidation = () => {
	loadTextBoxes(inputFOI, area, types[25]);
};
/* Day 10.2 Composure Boost */
const inputSI = document.getElementsByClassName(types[26]);
const saveStopIntimidation = () => {
	saveTextBoxes(inputSI, area, types[26]);
};
const clearStopIntimidation = () => {
	clearTextBoxes(inputSI, area, types[26]);
};
const loadStopIntimidation = () => {
	loadTextBoxes(inputSI, area, types[26]);
};
/* Day 11 Composure Boost */
const inputCF = document.getElementsByClassName(types[27]);
const saveControlFactors = () => {
	saveTextBoxes(inputCF, area, types[27]);
};
const clearControlFactors = () => {
	clearTextBoxes(inputCF, area, types[27]);
};
const loadControlFactors = () => {
	loadTextBoxes(inputCF, area, types[27]);
};

/* Day 12 Composure Boost */
const inputPE = document.getElementsByClassName(types[28]);
const savePainExpectations = () => {
	saveTextBoxes(inputPE, area, types[28]);
};
const clearPainExpectations = () => {
	clearTextBoxes(inputPE, area, types[28]);
};
const loadPainExpectations = () => {
	loadTextBoxes(inputPE, area, types[28]);
};
/* Day 12.2 Composure Boost */
const inputME = document.getElementsByClassName(types[29]);
const saveManageExpectations = () => {
	saveTextBoxes(inputME, area, types[29]);
};
const clearManageExpectations = () => {
	clearTextBoxes(inputME, area, types[29]);
};
const loadManageExpectations = () => {
	loadTextBoxes(inputME, area, types[29]);
};
/* Day 12.3 Composure Boost */
const inputCC = document.getElementsByClassName(types[30]);
const saveChallengeComposure = () => {
	saveTextBoxes(inputCC, area, types[30]);
};
const clearChallengeComposure = () => {
	clearTextBoxes(inputCC, area, types[30]);
};
const loadChallengeComposure = () => {
	loadTextBoxes(inputCC, area, types[30]);
};

/* Day 13 Composure Boost */
const inputCM = document.getElementsByClassName(types[31]);
const saveCompetitionMistakes = () => {
	saveTextBoxes(inputCM, area, types[31]);
};
const clearCompetitionMistakes = () => {
	clearTextBoxes(inputCM, area, types[31]);
};
const loadCompetitionMistakes = () => {
	loadTextBoxes(inputCM, area, types[31]);
};
/* Day 13.1 Composure Boost */
const inputCD = document.getElementsByClassName(types[32]);
const saveChallengeDispute = () => {
	saveTextBoxes(inputCD, area, types[32]);
};
const clearChallengeDispute = () => {
	clearTextBoxes(inputCD, area, types[32]);
};
const loadChallengeDispute = () => {
	loadTextBoxes(inputCD, area, types[32]);
};

export {
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
};
