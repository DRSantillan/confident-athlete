import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../lib';

const types = [
	'action-sources-confidence',
	'action-doubts-thoughts',
	'internal-distractions',
	'external-distractions'
];
const area = 'action';

/* Day 1 Action */
const inputSources = document.getElementsByClassName(types[0]);
const saveActionSourcesConfidence = () => {
	saveTextBoxes(inputSources, area, types[0]);
};
const clearActionSourcesConfidence = () => {
	clearTextBoxes(inputSources, area, types[0]);
};

const loadActionSourcesConfidence = () => {
	loadTextBoxes(inputSources, area, types[0]);
};

/* Day 2 Action */
const inputDoubts = document.getElementsByClassName(types[1]);
const saveActionDoubtsThoughts = () => {
	saveTextBoxes(inputDoubts, area, types[1]);
};
const clearActionDoubtsThoughts = () => {
	clearTextBoxes(inputDoubts, area, types[1]);
};

const loadActionDoubtsThoughts = () => {
	loadTextBoxes(inputDoubts, area, types[1]);
};

/* Day 2 Focus Action */
const inputID = document.getElementsByClassName(types[2]);
const saveInternalDistractions = () => {
	saveTextBoxes(inputID, area, types[2]);
};
const clearInternalDistractions = () => {
	clearTextBoxes(inputID, area, types[2]);
};

const loadInternalDistractions = () => {
	loadTextBoxes(inputID, area, types[2]);
};

/* Day 2 Focus Action */
const inputED = document.getElementsByClassName(types[3]);
const saveExternalDistractions = () => {
	saveTextBoxes(inputED, area, types[3]);
};
const clearExternalDistractions = () => {
	clearTextBoxes(inputED, area, types[3]);
};

const loadExternalDistractions = () => {
	loadTextBoxes(inputED, area, types[3]);
};
export {
	saveActionSourcesConfidence,
	clearActionSourcesConfidence,
	loadActionSourcesConfidence,
	saveActionDoubtsThoughts,
	clearActionDoubtsThoughts,
	loadActionDoubtsThoughts,
	saveInternalDistractions,
	clearInternalDistractions,
	loadInternalDistractions,
	saveExternalDistractions,
	clearExternalDistractions,
	loadExternalDistractions
};
