import {
	getAttitudeAnswers,
	clearAttitudeAnswers,
	loadAttitudeAnswers
} from './MentalAssessment';

const saveAttitudeAns = document.getElementById('saveAttitude');
const clearAttitudeAns = document.getElementById('clearAttitude');

saveAttitudeAns.addEventListener('click', getAttitudeAnswers);
clearAttitudeAns.addEventListener('click', clearAttitudeAnswers);
window.addEventListener('load', loadAttitudeAnswers);
