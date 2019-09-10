import { saveSliders, clearSliders, loadSliders } from '../../../lib';
/* Area: Strategy  Day: 9  Type: competition-mindset */
const type = 'competition-mindset';
const area = 'strategy';
const inputCompMind = document.getElementsByClassName(type);

const saveCompetitionMindset = () => {
	saveSliders(inputCompMind, area, type);
};

const clearCompetitionMindset = () => {
	clearSliders(inputCompMind, area, type);
};

const loadCompetitionMindset = () => {
	loadSliders(inputCompMind, area, type);
};

export {
	loadCompetitionMindset,
	clearCompetitionMindset,
	saveCompetitionMindset
};
