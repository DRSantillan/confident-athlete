import { savePageData, loadData, clearData } from '../db/index';
import { getDate, getProgram, getPage, setCheckBoxesToDefault } from './util';

const chkboxes = document.getElementsByClassName('tableOne-assessment');

const saveAwarenessAnswers = () => {
	console.log('saveAwarenessAnswers');
};

const clearAwarenessAnswers = () => {
	console.log('clearAwarenessAnswers');
};

const loadAwarenessAnswers = () => {
	console.log('loadAwarenessAnswers');
};

export { saveAwarenessAnswers, clearAwarenessAnswers, loadAwarenessAnswers };
