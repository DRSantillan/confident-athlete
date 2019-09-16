import { getProgram, getPage } from '../lib';

const loadData = () => {
	//getLocalStorageSize();
	const program = getProgram();

	if (localStorage.length !== 0) {
		return JSON.parse(localStorage.getItem(program));
	}
	return undefined;
};
const clearData = () => {
	if (localStorage.length !== 0) {
		localStorage.clear();
	}
};
const savePageData = (data, program) => {
	localStorage.setItem(program, JSON.stringify(data));
};
const getLocalStorageSize = () => {
	let data = '';

	console.log('Current local storage: ');

	for (let key in window.localStorage) {
		if (window.localStorage.hasOwnProperty(key)) {
			data += window.localStorage[key];
			console.log(
				key +
					' = ' +
					((window.localStorage[key].length * 16) / (8 * 1024)).toFixed(2) +
					' KB'
			);
		}
	}

	console.log(
		data
			? '\n' +
					'Total space used: ' +
					((data.length * 16) / (8 * 1024)).toFixed(2) +
					' KB'
			: 'Empty (0 KB)'
	);
	console.log(
		data
			? 'Approx. space remaining: ' +
					(5120 - ((data.length * 16) / (8 * 1024)).toFixed(2)) +
					' KB'
			: '5 MB'
	);
};
export { savePageData, loadData, clearData, getLocalStorageSize };
