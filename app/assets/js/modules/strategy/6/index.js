import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 6  Type: hot-button-reactions,positive-negative-talk */
const type = 'hot-button-reactions';
const type2 = 'positive-negative-talk';
const area = 'strategy';
const inputTop5HotReaction = document.getElementsByClassName(type);
const inputOldNew = document.getElementsByClassName(type2);

const saveTop5HotButtonsReactions = () => {
	saveTextBoxes(inputTop5HotReaction, area, type);
};
const clearTop5HotButtonsReactions = () => {
	clearTextBoxes(inputTop5HotReaction, area, type);
};
const loadTop5HotButtonsReactions = () => {
	loadTextBoxes(inputTop5HotReaction, area, type);
};

const saveOldNewSelfTalk = () => {
	saveTextBoxes(inputOldNew, area, type2);
};
const clearOldNewSelfTalk = () => {
	clearTextBoxes(inputOldNew, area, type2);
};
const loadOldNewSelfTalk = () => {
	loadTextBoxes(inputOldNew, area, type2);
};

export {
	saveTop5HotButtonsReactions,
	clearTop5HotButtonsReactions,
	loadTop5HotButtonsReactions,
	saveOldNewSelfTalk,
	clearOldNewSelfTalk,
	loadOldNewSelfTalk
};
