const getDate = () => {
	const today = new Date().toLocaleDateString();

	return today;
};

const getPage = () => {
	let currentDay = window.location.pathname;
	const program = getProgram();

	if (currentDay.includes(program)) {
		currentDay = currentDay.replace(`/series/${program}/`, '');
		currentDay = currentDay.replace('day-', '');
		currentDay = currentDay.replace('.html', '');
	}
	return currentDay;
};

const getProgram = () => {
	let currentProgram = window.location.pathname;

	currentProgram = currentProgram.replace(`/series/`, '');
	currentProgram = currentProgram.replace('day-', '');
	currentProgram = currentProgram.replace('.html', '');

	let n = currentProgram.lastIndexOf('/');
	let t = currentProgram.substring(n, n + 99);

	currentProgram = currentProgram.replace(t, '');

	return currentProgram;
};

const setCheckBoxesToDefault = chkbox => {
	for (let i = 0; i < chkbox.length; i++) {
		chkbox[i].checked = false;
	}
};

export { getProgram, getPage, getDate, setCheckBoxesToDefault };
