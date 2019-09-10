import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';

const inputComBreakdown = document.getElementsByClassName('common-breakdowns');
const inputCompSit = document.getElementsByClassName(' competitive-situtation');

const saveCommonBreakDowns = () => {
	saveTextBoxes(inputComBreakdown, 'strategy', 'commonbreakdowns');
};
const clearCommonBreakDowns = () => {
	clearTextBoxes(inputComBreakdown, 'strategy', 'commonbreakdowns');
};
const loadCommonBreakDowns = () => {
	loadTextBoxes(inputComBreakdown, 'strategy', 'commonbreakdowns');
};

const saveCompetitiveSituations = () => {
	saveTextBoxes(inputCompSit, 'strategy', 'competitivesituations');
};

const clearCompetitiveSituations = () => {
	clearTextBoxes(inputCompSit, 'strategy', 'competitivesituations');
};

const loadCompetitiveSituations = () => {
	loadTextBoxes(inputCompSit, 'strategy', 'competitivesituations');
};

export {
	saveCommonBreakDowns,
	clearCommonBreakDowns,
	loadCommonBreakDowns,
	loadCompetitiveSituations,
	clearCompetitiveSituations,
	saveCompetitiveSituations
};
