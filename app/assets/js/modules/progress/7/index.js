import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';
/* Area: Progress  Day: 7  Type: process-goals */
const type = 'process-goals';
const area = 'progress';
const inputProcessGoal = document.getElementsByClassName('process-goals');

const saveProcessGoals = () => {
	saveTextBoxes(inputProcessGoal, area, type);
};

const clearProcessGoals = () => {
	clearTextBoxes(inputProcessGoal, area, type);
};

const loadProcessGoals = () => {
	loadTextBoxes(inputProcessGoal, area, type);
};

export { saveProcessGoals, clearProcessGoals, loadProcessGoals };
