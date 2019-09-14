import { getProgram, getPage } from '../../lib';
import { contents } from '../../db/contents';

const courseTitle = () => {
	let temp;
	const program = getProgram();

	contents.programs.forEach(item => {
		if (item.course === program) {
			temp = `<a href="/series/fearless/"><h1>${item.title}</h1></a>`;
		} else {
			temp = `<a href="/series/fearless/"><h1>The Mental Athlete Series</h1></a>`;
		}
	});
	return temp;
};
const renderPreviousDay = () => {
	const program = getProgram();
	const page = getPage();
	let temp;

	contents.programs.forEach(item => {
		if (program.length === 0) {
			temp = '';
		} else {
			if (item.course === program) {
				item.contents.forEach((course, index) => {
					if (course.day.toString() === page) {
						if (item.contents[index - 1] === undefined) {
							temp = ``;
						} else {
							if (typeof item.contents[index - 1].day === 'number') {
								temp = `<a href="day-${item.contents[index - 1].day}.html"><<</a>`;
							} else {
								if (item.contents[index - 1].day === '') {
									temp = `<a href="/series/${program}/"><<</a>`;
								} else {
									temp = `<a href="${item.contents[index - 1].day}.html"><<</a>`;
								}
							}
						}
					}
				});
			}
		}
	});
	return temp;
};
const renderNextDay = () => {
	const program = getProgram();
	const page = getPage();
	let temp;
	contents.programs.forEach(item => {
		if (program.length === 0) {
			temp = '';
		} else {
			if (item.course === program) {
				item.contents.forEach((course, index) => {
					if (course.day.toString() === page) {
						if (item.contents[index + 1] === undefined) {
							temp = `<a href="/series/${program}/"> >> </a>`;
						} else {
							if (typeof item.contents[index + 1].day === 'number') {
								temp = `<a href="day-${item.contents[index + 1].day}.html"> >> </a>`;
							} else {
								if (item.contents[index + 1].day === '') {
									temp = `<a href="/series/${program}/"> >> </a>`;
								} else {
									temp = `<a href="${item.contents[index + 1].day}.html"> >> </a>`;
								}
							}
						}
					}
				});
			}
		}
	});
	return temp;
};
const renderTitle = () => {
	let temp;
	const program = getProgram();
	const page = getPage();

	contents.programs.forEach(item => {
		if (program.length === 0) {
			temp = '';
		} else {
			if (item.course === program) {
				item.contents.forEach(course => {
					if (course.day.toString().toLowerCase() === page.toString()) {
						if (
							course.day === 'introduction' ||
							course.day === 'new-beginning' ||
							course.day === 'contract' ||
							course.day === 'appendix' ||
							course.day === ''
						) {
							temp = `<h2 id="page-title">${course.title}</h2>`;
						} else {
							temp = `<h2 id="page-title">Day ${course.day}: ${course.title}</h2>`;
						}
					}
				});
			}
		}
	});

	return temp;
};

const displayHeader = () => {
	const header = document.querySelector('header');
	const header_template = `
		${renderPreviousDay()}${renderTitle()}${renderNextDay()}`;

	const template = `${courseTitle()}
			<div class="day">
				<div class="day-item"><strong>${renderPreviousDay()}</strong></div>
				<div class="day-item day-main-title">${renderTitle()}</div>
				<div class="day-item"><strong>${renderNextDay()}</strong></div>
			</div>`;
	header.innerHTML = template;
};

const injectPageTitle = () => {
	const program = getProgram();
	const page = getPage();

	contents.programs.forEach(item => {
		if (item.course === program) {
			item.contents.forEach(course => {
				if (course.day.toString().toLowerCase() === page.toString()) {
					if (
						course.day === 'introduction' ||
						course.day === 'new-beginning' ||
						course.day === 'contract' ||
						course.day === 'appendix' ||
						course.day === ''
					) {
						document.title = course.title;
					} else {
						document.title = `Day ${course.day}: ${course.title}`;
					}
				}
			});
		}
	});
};

export { displayHeader, injectPageTitle };
