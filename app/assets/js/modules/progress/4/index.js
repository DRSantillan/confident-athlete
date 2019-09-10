import { saveSliders, clearSliders, loadSliders } from '../../../lib';
/* Area: Progress  Day: 4  Type: functional-mindset-performance */
const type = 'functional-mindset-performance';
const area = 'progress';
const inputPerformFunctional = document.getElementsByClassName(type);

const savePerformFunct = () => {
	saveSliders(inputPerformFunctional, area, type);
};

const clearPerformFunct = () => {
	clearSliders(inputPerformFunctional, area, type);
};

const loadPerformFunct = () => {
	loadSliders(inputPerformFunctional, area, type);
};

export { loadPerformFunct, clearPerformFunct, savePerformFunct };
