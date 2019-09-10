import { saveSliders, clearSliders, loadSliders } from '../../../lib';

const inputCompMental = document.getElementsByClassName('comp-mentality');

const saveCompetitionMentality = () => {
	saveSliders(inputCompMental, 'progress', 'mentality');
};

const clearCompetitionMentality = () => {
	clearSliders(inputCompMental, 'progress', 'mentality');
};

const loadCompetitionMentality = () => {
	loadSliders(inputCompMental, 'progress', 'mentality');
};

export {
	loadCompetitionMentality,
	clearCompetitionMentality,
	saveCompetitionMentality
};
