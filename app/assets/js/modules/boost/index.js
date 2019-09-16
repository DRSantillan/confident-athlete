
import {
	saveDDL,
	clearDDL,
	loadDDL,
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
	'situation-coping'
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
	loadSituationCoping
};
