import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../lib';

const types = [
	'action-sources-confidence',
	'action-doubts-thoughts',
	
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

export {
	saveActionSourcesConfidence,
	clearActionSourcesConfidence,
	loadActionSourcesConfidence,
	saveActionDoubtsThoughts,
	clearActionDoubtsThoughts,
	loadActionDoubtsThoughts
};
