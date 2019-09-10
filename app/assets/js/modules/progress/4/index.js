import { saveSliders, clearSliders, loadSliders } from '../../../lib';

const inputPerformFunctional = document.getElementsByClassName(
	'perform-functional'
);

const savePerformFunct = () => {
	saveSliders(inputPerformFunctional, 'progress', 'perform');
};

const clearPerformFunct = () => {
	clearSliders(inputPerformFunctional, 'progress', 'perform');
};

const loadPerformFunct = () => {
	loadSliders(inputPerformFunctional, 'progress', 'perform');
};

export { loadPerformFunct, clearPerformFunct, savePerformFunct };
