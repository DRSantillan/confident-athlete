import { getProgram, getPage } from '../../lib';
import { contents } from '../../db/contents';
const renderPreviousDay = () => {
	const program = getProgram();
	const page = getPage();
	let temp;

	contents.programs.forEach(item => {
		if (item.course === program) {
			item.contents.forEach((course, index) => {
				if (course.day.toString() === page) {
					if (item.contents[index - 1] === undefined) {
						temp = ``;
					} else {
						if (typeof item.contents[index - 1].day === 'number') {
							temp = `<a href="day-${item.contents[index - 1].day}.html" title="${item.contents[index - 1].title}">Day ${item.contents[index - 1].day}</a>`;
						} else {
							
							if (item.contents[index - 1].day === '') {
								temp = `<a href="/series/${program}/" title="${item.contents[index - 1].title}">Contents</a>`;
							} else {
								if (item.contents[index - 1].day === 'appendix') {
									temp = `<a href="${item.contents[index - 1].day}.html" title="${item.contents[index - 1].title}">Appendix</a>`;
								} else if (item.contents[index - 1].day === 'new-beginning') {
									temp = `<a href="${item.contents[index - 1].day}.html" title="${item.contents[index - 1].title}">New Start</a>`;
								} else if (item.contents[index - 1].day === 'contract') {
									temp = `<a href="${item.contents[index - 1].day}.html" title="${item.contents[index - 1].title}">Contract</a>`;
								} else if (item.contents[index - 1].day === 'bonus') {
									temp = `<a href="${item.contents[index - 1].day}.html" title="${item.contents[index - 1].title}">Bonus</a>`;
								} else {
									temp = `<a href="${item.contents[index - 1].day}.html" title="${item.contents[index - 1].title}">${item.contents[index - 1].title}</a>`;
								}
							}
						}
					}
				}
			});
		}
	});
	return temp;
};
const renderNextDay = () => {
	const program = getProgram();
	const page = getPage();
	let temp;
	contents.programs.forEach(item => {
		if (item.course === program) {
			item.contents.forEach((course, index) => {
				if (course.day.toString() === page) {
					if (item.contents[index + 1] === undefined) {
						temp = `<a href="/series/${program}/"> Contents </a>`;
					} else {
						if (typeof item.contents[index + 1].day === 'number') {
							temp = `<a href="day-${item.contents[index + 1].day}.html"> Day ${item.contents[index + 1].day} </a> >>`;
						} else {
							if (item.contents[index + 1].day === '') {
								temp = `<a href="/series/${program}/"> Contents </a> >>`;
							} else {
								if (item.contents[index + 1].day === 'appendix') {
									temp = `<a href="${item.contents[index + 1].day}.html"> Appendix </a> >>`;
								} else if (item.contents[index + 1].day === 'new-beginning') {
									temp = `<a href="${item.contents[index + 1].day}.html"> New Start </a> >>`;
								} else if (item.contents[index + 1].day === 'contract') {
									temp = `<a href="${item.contents[index + 1].day}.html"> Contract </a> >>`;
								} else if (item.contents[index + 1].day === 'bonus') {
									temp = `<a href="${item.contents[index + 1].day}.html" title="${item.contents[index - 1].title}">Bonus</a>`;
								} else {
									temp = `<a href="${item.contents[index + 1].day}.html"> ${item.contents[index + 1].title} </a> >>`;
								}
							}
						}
					}
				}
			});
		}
	});
	return temp;
};
const renderTitle = () => {
	let temp;
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
						course.day === 'bonus' ||
						course.day === ''
					) {
						temp = `<h2 id="page-title">${course.title}</h2>`;
					} else {
						temp = `<h2 id="page-title">Day ${course.day}</h2>`;
					}
				}
			});
		}
	});
	return temp;
};

const displayFooter = () => {
	const footer = document.querySelector('footer');

	const template = `
			<div class="day">
				<div class="day-item">${renderPreviousDay()}</div>
				<div class="day-item day-main-title">${renderTitle()}</div>
				<div class="day-item">${renderNextDay()}</div>
			</div><p>Developed by Dean Santillan &copy;2019</p>`;
			if(footer) {
				footer.innerHTML = template;
			}
	
};

export { displayFooter };
