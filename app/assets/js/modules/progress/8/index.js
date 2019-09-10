import { saveTxtChecks, loadTxtChecks, clearTxtChecks } from '../../../lib';
/* Area: Progress  Day: 8  Type: mind-reader */
const type = 'mind-reader';
const area = 'progress';
const inputMindRead = document.getElementsByClassName(type);

const saveMindReader = () => {
	saveTxtChecks(inputMindRead, area, type);
};

const clearMindReader = () => {
	clearTxtChecks(inputMindRead, area, type);
};

const loadMindReader = () => {
	loadTxtChecks(inputMindRead, area, type);
};

export { saveMindReader, clearMindReader, loadMindReader };
