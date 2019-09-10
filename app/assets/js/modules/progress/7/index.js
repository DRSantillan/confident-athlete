import { clearTextBoxes, saveTextBoxes, loadTextBoxes } from '../../../lib';

const inputProcessGoal = document.getElementsByClassName('process-goals');

const saveProcessGoals = () => {
	saveTextBoxes(inputProcessGoal, 'progress', 'process');
};

const clearProcessGoals = () => {
	clearTextBoxes(inputProcessGoal, 'progress', 'process');
};

const loadProcessGoals = () => {
	loadTextBoxes(inputProcessGoal, 'progress', 'process');
};

export { saveProcessGoals, clearProcessGoals, loadProcessGoals };
