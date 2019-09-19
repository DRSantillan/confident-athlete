import { savePageData, loadData } from '../db';

const getDate = () => {
	const today = new Date().toLocaleDateString();

	return today;
};
const saveDDL = (input, area, type) => {
	let pageData = loadData();

	let arr = [];
	for (let i = 0; i < input.length; i++) {
		let answers = {};
		answers.date = getDate();
		answers.day = getPage();
		answers.id = input[i].id;
		answers.value = input[i].value;
		arr.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		if (type) {
			pageData[area] = {};
			pageData[area][type] = arr;
		} else {
			pageData[area] = arr;
		}
	} else if (pageData[area] === undefined) {
		if (type) {
			pageData[area] = {};
			pageData[area][type] = arr;
		} else {
			pageData[area] = arr;
		}
	} else {
		if (type) {
			pageData[area][type] = arr;
		} else {
			pageData[area] = arr;
		}
	}
	savePageData(pageData, getProgram());
};
const clearDDL = (input, area, type) => {
	let pageData = loadData();

	if (type) {
		pageData[area][type].forEach(item => {
			if (item.day === getPage()) {
				delete pageData[area][type];
			}
		});
	} else {
		pageData[area].forEach(item => {
			if (item.day === getPage()) {
				delete pageData[area];
			}
		});
	}

	savePageData(pageData, getProgram());
	setInputsToDefault(input, 'Select One');
};
const loadDDL = (input, area, type) => {
	let pageData = loadData();
	let data;

	if (pageData === undefined || pageData[area][type] === undefined) return;

	if (type) {
		data = pageData[area][type];
	} else {
		data = pageData[area];
	}

	if (data === undefined) {
		return;
	}

	for (let key in data) {
		for (let i = 0; i < input.length; i++) {
			input[i].value = data[i].value;
		}
	}
};

const saveTxtChecks = (input, area, type) => {
	let pageData = loadData();
	let arr = [];

	for (let i = 0; i < input.length; i++) {
		let answerObj = {};
		answerObj.id = input[i].id;

		if (
			input[i].id === 'q1success' ||
			input[i].id === 'q2success' ||
			input[i].id === 'q3success' ||
			input[i].id === 'q4success'
		) {
			answerObj.value = input[i].checked;
		} else {
			answerObj.value = input[i].value;
		}

		arr.push(answerObj);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData[area] = {};
		pageData[area][type] = arr;
	} else if (pageData[area] === undefined) {
		pageData[area] = {};
		pageData[area][type] = arr;
	} else {
		pageData[area][type] = arr;
	}

	savePageData(pageData, getProgram());
};
const loadTxtChecks = (input, area, type) => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData[area] === undefined ||
		pageData[area][type] === undefined
	) {
		return;
	}
	for (let key in pageData[area][type]) {
		for (let i = 0; i < input.length; i++) {
			if (
				input[i].id === 'q1success' ||
				input[i].id === 'q2success' ||
				input[i].id === 'q3success' ||
				input[i].id === 'q4success'
			) {
				input[i].checked = pageData[area][type][i].value;
			} else {
				input[i].value = pageData[area][type][i].value;
			}
		}
	}
};
const clearTxtChecks = (input, area, type) => {
	let pageData = loadData();
	delete pageData[area][type];
	savePageData(pageData, getProgram());
	setInputsToDefault(input);
	setCheckBoxesToDefault(input);
};
const clearTextBoxes = (input, area, type) => {
	let pageData = loadData();

	if (type) {
		pageData[area][type].forEach(item => {
			if (item.day === getPage()) {
				delete pageData[area][type];
			}
		});
	} else {
		pageData[area].forEach(item => {
			if (item.day === getPage()) {
				delete pageData[area];
			}
		});
	}

	savePageData(pageData, getProgram());
	setInputsToDefault(input);
};
const loadTextBoxes = (input, area, type) => {
	let pageData = loadData();
	let data;

	if (pageData === null  ) {
		pageData = undefined;
		
	} 

	if (
		pageData === undefined ||
		pageData[area] === undefined ||
		pageData[area][type] === undefined
	) {
		return
	} 

	if (type) {
		data = pageData[area][type];
	} else {
		data = pageData[area];
	}

	if (data === undefined) {
		return;
	}

	for (let key in data) {
		for (let i = 0; i < input.length; i++) {
			input[i].value = data[i].value;
		}
	}
};
const saveTextBoxes = (input, area, type) => {
	let pageData = loadData();
	let arr = [];

	if (pageData === null) {
		pageData = undefined;
	}

	for (let i = 0; i < input.length; i++) {
		let answers = {};
		answers.date = getDate();
		answers.day = getPage();
		answers.id = input[i].id;
		answers.value = input[i].value;
		arr.push(answers);
	}
	if (pageData === undefined) {
		pageData = {};
		if (type) {
			pageData[area] = {};
			pageData[area][type] = arr;
		} else {
			pageData[area] = arr;
		}
	} else if (pageData[area] === undefined) {
		if (type) {
			pageData[area] = {};
			pageData[area][type] = arr;
		} else {
			pageData[area] = arr;
		}
	} else {
		if (type) {
			pageData[area][type] = arr;
		} else {
			pageData[area] = arr;
		}
	}
	savePageData(pageData, getProgram());
};
const saveTextBox = (input, area) => {
	let pageData = loadData();
	let obj = {};
	obj.day = getPage();
	obj.note = input.value;
	//debugger;
	if (pageData === undefined || pageData === null) {
		pageData = {};
		pageData[area] = [];
		pageData[area].push(obj);
	} else if (pageData[area] === undefined) {
		pageData[area] = [];
		pageData[area].push(obj);
	} else {
		pageData[area].forEach((item, index) => {
			if (item.day === getPage()) {
				pageData[area].splice(index, 1);
			}
		});
		pageData[area].push(obj);
	}

	obj = {};
	savePageData(pageData, getProgram());
};
const clearTextBox = (input, area) => {
	let pageData = loadData();
	pageData[area].forEach((item, index) => {
		if (item.day === getPage()) {
			pageData[area].splice(index, 1);
		}
	});
	input.value = '';

	savePageData(pageData, getProgram());
};
const loadTextBox = (input, area) => {
	let pageData = loadData();

	if (
		pageData === undefined ||
		pageData === null ||
		pageData[area] === null ||
		pageData[area] === undefined
	) {
		return;
	}
	if (pageData === undefined) {
		return;
	} else if (pageData[area] === undefined) {
		return;
	}
	pageData[area].forEach(item => {
		if (item.day === getPage()) {
			input.value = item.note;
		}
	});
};
const clearSliders = (input, area, type) => {
	let pageData = loadData();

	pageData[area][type].forEach(item => {
		if (item.day.toString() === getPage().toString()) {
			delete pageData[area][type];
		}
	});
	savePageData(pageData, getProgram());
	setInputsToDefault(input);
};
const saveSliders = (input, area, type) => {
	let pageData = loadData();
	let answersArray = [];
	for (let i = 0; i < input.length; i++) {
		let answers = {};

		answers.date = getDate();
		answers.day = getPage();
		answers.id = input[i].id;
		answers.value = input[i].value;

		answersArray.push(answers);
	}

	if (pageData === undefined) {
		pageData = {};
		pageData[area] = {};
		pageData[area][type] = answersArray;
	} else if (pageData[area] === undefined) {
		pageData[area] = {};
		pageData[area][type] = answersArray;
	} else {
		pageData[area][type] = answersArray;
	}

	savePageData(pageData, getProgram());
};
const loadSliders = (input, area, type) => {
	let pageData = loadData();
	if (
		pageData === undefined ||
		pageData[area] === undefined ||
		pageData[area][type] === undefined
	) {
		return;
	}
	pageData[area][type].forEach((item, index) => {
		if (input[index].id === item.id) {
			input[index].value = item.value;
		}
	});
};
const saveCheckBoxes = (input, area, type) => {
	let pageData = loadData();
	let answersArray = [];

	for (let i = 0; i < input.length; i++) {
		let answers = {};

		answers.date = getDate();
		answers.day = getPage();
		answers.id = input[i].id;
		answers.value = input[i].checked;
		answersArray.push(answers);
	}

	if (pageData === undefined || pageData === null) {
		pageData = {};
		pageData[area] = {};
		if (type) {
			pageData[area][type] = answersArray;
		} else {
			pageData[area] = answersArray;
		}
	} else if (pageData[area] === undefined || pageData[area] === null) {
		pageData[area] = {};
		if (type) {
			pageData[area][type] = answersArray;
		} else {
			pageData[area] = answersArray;
		}
	} else {
		if (type) {
			pageData[area][type] = answersArray;
		} else {
			pageData[area] = answersArray;
		}
	}

	savePageData(pageData, getProgram());
};
const clearCheckBoxes = (input, area, type) => {
	let pageData = loadData();
	let data;
	if (type) {
		data = pageData[area][type];
	} else {
		data = pageData[area];
	}
	data.forEach(item => {
		if (item.day === getPage()) {
			if (type) {
				delete pageData[area][type];
			} else {
				delete pageData[area];
			}
		}
	});
	savePageData(pageData, getProgram());
	setCheckBoxesToDefault(input);
};
const loadCheckBoxes = (input, area, type) => {
	let pageData = loadData();
	let data;

	if (
		pageData === undefined ||
		pageData === null ||
		pageData[area] === null ||
		pageData[area] === undefined
	) {
		return;
	}

	if (type) {
		data = pageData[area][type];
	} else {
		data = pageData[area];
	}

	if (data === undefined) {
		return;
	}
	data.forEach((item, index) => {
		if (input[index].id === item.id) {
			input[index].checked = item.value;
		}
	});
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
const setInputsToDefault = (input, select) => {
	for (let i = 0; i < input.length; i++) {
		if (select) {
			input[i].value = select;
		} else {
			input[i].value = '';
		}
	}
};

export {
	getProgram,
	getPage,
	getDate,
	setCheckBoxesToDefault,
	setInputsToDefault,
	saveTextBoxes,
	clearTextBoxes,
	loadTextBoxes,
	saveTextBox,
	clearTextBox,
	loadTextBox,
	saveSliders,
	clearSliders,
	loadSliders,
	saveCheckBoxes,
	clearCheckBoxes,
	loadCheckBoxes,
	saveTxtChecks,
	loadTxtChecks,
	clearTxtChecks,
	saveDDL,
	clearDDL,
	loadDDL
};
