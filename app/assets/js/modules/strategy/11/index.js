import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Strategy  Day: 11  Type: sports-specific-plan */
const type = 'sports-specific-plan';
const area = 'strategy';
const inputPlan = document.getElementsByClassName(type);

const saveSportsPlan = () => {
	saveTextBoxes(inputPlan, area, type);
};
const clearSportsPlan = () => {
	clearTextBoxes(inputPlan, area, type);
};
const loadSportsPlan = () => {
	loadTextBoxes(inputPlan, area, type);
};

export { saveSportsPlan, clearSportsPlan, loadSportsPlan };
