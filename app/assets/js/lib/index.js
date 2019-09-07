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

const setInputsToDefault = input => {
	for (let i = 0; i < input.length; i++) {
		input[i].value = '';
	}
};

const getAnswers = (input, index, questionNum, obj) => {
	/* debugger;
	if (input[index].id.search(questionNum) === 0) {
		if (input[index].id.search('situation') > 1) {
			obj[questionNum] = {};
			obj[questionNum].situtation = input[index].value;
		} else if (input[index].id.search('fof') > 1) {
			obj[questionNum].fear = input[index].value;
		} else if (input[index].id.search('reaction') > 1) {
			obj[questionNum].reaction = input[index].value;
		}
	} */
};

export {
	getProgram,
	getPage,
	getDate,
	setCheckBoxesToDefault,
	setInputsToDefault,
	getAnswers
};
