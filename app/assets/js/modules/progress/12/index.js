import { saveSliders, clearSliders, loadSliders } from '../../../lib';
/* Area: Progress  Day: 12  Type: competition-mentality */
const type = 'competition-mentality';
const area = 'progress';
const inputCompMental = document.getElementsByClassName(type);

const saveCompetitionMentality = () => {
	saveSliders(inputCompMental, area, type);
};

const clearCompetitionMentality = () => {
	clearSliders(inputCompMental, area, type);
};

const loadCompetitionMentality = () => {
	loadSliders(inputCompMental, area, type);
};

export {
	loadCompetitionMentality,
	clearCompetitionMentality,
	saveCompetitionMentality
};
