import { saveTextBoxes, clearTextBoxes, loadTextBoxes } from '../../lib';

const types = ['healthy-philosophy'];
const area = 'energize';

/* Day 6 Energize */
const inputPhilos = document.getElementsByClassName(types[0]);

const saveHealthyPhilosphy = () => {
	saveTextBoxes(inputPhilos, area, types[0]);
};
const clearHealthyPhilosphy = () => {
	clearTextBoxes(inputPhilos, area, types[0]);
};

const loadHealthyPhilosphy = () => {
	loadTextBoxes(inputPhilos, area, types[0]);
};

export { saveHealthyPhilosphy, clearHealthyPhilosphy, loadHealthyPhilosphy };
