import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
const inputTop5HotReaction = document.getElementsByClassName(
	'top5-hot-reaction'
);
const inputOldNew = document.getElementsByClassName('old-new-selftalk');

const saveTop5HotButtonsReactions = () => {
	saveTextBoxes(inputTop5HotReaction, 'strategy', 'hot5buttonsreactions');
};
const clearTop5HotButtonsReactions = () => {
	clearTextBoxes(inputTop5HotReaction, 'strategy', 'hot5buttonsreactions');
};
const loadTop5HotButtonsReactions = () => {
	loadTextBoxes(inputTop5HotReaction, 'strategy', 'hot5buttonsreactions');
};

const saveOldNewSelfTalk = () => {
	saveTextBoxes(inputOldNew, 'strategy', 'oldnewtalk');
};
const clearOldNewSelfTalk = () => {
	clearTextBoxes(inputOldNew, 'strategy', 'oldnewtalk');
};
const loadOldNewSelfTalk = () => {
	loadTextBoxes(inputOldNew, 'strategy', 'oldnewtalk');
};

export {
	saveTop5HotButtonsReactions,
	clearTop5HotButtonsReactions,
	loadTop5HotButtonsReactions,
	saveOldNewSelfTalk,
	clearOldNewSelfTalk,
	loadOldNewSelfTalk
};
