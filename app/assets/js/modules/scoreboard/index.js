import { saveSliders, clearSliders, loadSliders, getUrlQuery } from '../../lib';

const area = 'scoreboard';

/* Scoreboard */
const inputScore = document.getElementsByClassName(area);
const saveScoreBoard = () => {
	saveSliders(inputScore, area, getUrlQuery()[1]);
};
const clearScoreBoard = () => {
	clearSliders(inputScore, area, getUrlQuery()[1]);
};

const loadScoreBoard = () => {
	loadSliders(inputScore, area, getUrlQuery()[1]);
};

export { saveScoreBoard, clearScoreBoard, loadScoreBoard };
