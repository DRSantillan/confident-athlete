import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../../lib';
const inputPlan = document.getElementsByClassName('sports-specific-plan');

const saveSportsPlan = () => {
	saveTextBoxes(inputPlan, 'strategy', 'sportsplan');
};
const clearSportsPlan = () => {
	clearTextBoxes(inputPlan, 'strategy', 'sportsplan');
};
const loadSportsPlan = () => {
	loadTextBoxes(inputPlan, 'strategy', 'sportsplan');
};

export { saveSportsPlan, clearSportsPlan, loadSportsPlan };
