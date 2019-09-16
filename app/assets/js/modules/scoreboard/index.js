import { getPage, saveSliders, clearSliders, loadSliders } from '../../lib';

const area = 'scoreboard';

/* Scoreboard */
const inputScore = document.getElementsByClassName('scoreboard');
const saveScoreBoard = () => {
	saveSliders(inputScore, area, getPage());
};
const clearScoreBoard = () => {
	clearSliders(inputScore, area, getPage());
};

const loadScoreBoard = () => {
	loadSliders(inputScore, area, getPage());
};

export { saveScoreBoard, clearScoreBoard, loadScoreBoard };
