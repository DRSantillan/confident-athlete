import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 10  Type: common-breakdowns,competitive-situtations */
const type = 'common-trust-breakdowns';
const type2 = 'competitive-situtations';
const area = 'strategy';
const inputComBreakdown = document.getElementsByClassName(type);
const inputCompSit = document.getElementsByClassName('competitive-situtations');

const saveCommonBreakDowns = () => {
	saveTextBoxes(inputComBreakdown, area, type);
};
const clearCommonBreakDowns = () => {
	clearTextBoxes(inputComBreakdown, area, type);
};
const loadCommonBreakDowns = () => {
	loadTextBoxes(inputComBreakdown, area, type);
};

const saveCompetitiveSituations = () => {
	saveTextBoxes(inputCompSit, area, type2);
};

const clearCompetitiveSituations = () => {
	clearTextBoxes(inputCompSit, area, type2);
};

const loadCompetitiveSituations = () => {
	loadTextBoxes(inputCompSit, area, type2);
};

export {
	saveCommonBreakDowns,
	clearCommonBreakDowns,
	loadCommonBreakDowns,
	loadCompetitiveSituations,
	clearCompetitiveSituations,
	saveCompetitiveSituations
};
