import { getUrlQuery } from '../../lib';
import { contents } from '../../db/contents';

let queryArr = getUrlQuery();
const courseTitle = () => {
	let temp;
	contents.programs.forEach(item => {
		if (queryArr[0] === 'main') {
			temp = `<a href="/mas/"><h1>The Mental Athlete Series</h1></a>`;
		} else {
			if (item.course === queryArr[0]) {
				temp = `<a href="?course=${queryArr[0]}"><h1>${item.title}</h1></a>`;
			}
		}
	});
	return temp;
};
const renderPreviousDay = () => {
	let temp;
	contents.programs.forEach(item => {
		if (queryArr[0] === 'main') {
			temp = '';
		} else {
			if (item.course === queryArr[0]) {
				item.contents.forEach((course, index) => {
					if (queryArr[1] === undefined) {
						temp = '';
					}
					if (course.day.toString() === queryArr[1]) {
						if (item.contents[index - 1] === undefined) {
							temp = ``;
						} else {
							if (typeof item.contents[index - 1].day === 'number') {
								temp = `<a href="?course=${queryArr[0]}&day=${
									item.contents[index - 1].day
								}"><<</a>`;
							} else {
								if (item.contents[index - 1].day === '') {
									temp = `<a href="?course=${queryArr[0]}"><<</a>`;
								} else {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index - 1].day
									}"><<</a>`;
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
	let temp;
	contents.programs.forEach(item => {
		if (queryArr[0] === 'main') {
			temp = '';
		} else {
			if (item.course === queryArr[0]) {
				item.contents.forEach((course, index) => {
					if (queryArr[1] === undefined) {
						temp = '';
					}
					if (course.day.toString() === queryArr[1]) {
						if (item.contents[index + 1] === undefined) {
							temp = `<a href="?course=${queryArr[0]}"> >> </a>`;
						} else {
							if (typeof item.contents[index + 1].day === 'number') {
								temp = `<a href="?course=${queryArr[0]}&day=${
									item.contents[index + 1].day
								}"> >> </a>`;
							} else {
								if (item.contents[index + 1].day === '') {
									temp = `<a href="?course=${queryArr[0]}"> >> </a>`;
								} else {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index + 1].day
									}"> >> </a>`;
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
	contents.programs.forEach(item => {
		if (queryArr[0] === 'main') {
			temp = '';
		}
		if (item.course === queryArr[0]) {
			item.contents.forEach(course => {
				if (queryArr[1] === undefined) {
					temp = '';
				}
				if (course.day.toString() === queryArr[1]) {
					if (
						course.day === 'introduction' ||
						course.day === 'new-beginning' ||
						course.day === 'contract' ||
						course.day === 'appendix' ||
						course.day === 'bonus'
					) {
						temp = `<h2 id="page-title">${course.title}</h2>`;
					} else {
						temp = `<h2 id="page-title">Day ${course.day}: ${course.title}</h2>`;
					}
				}
			});
		}
	});
	return temp;
};

const displayHeader = () => {
	const header = document.querySelector('header');

	let div = '';
	if (queryArr[0] === 'main') {
		div = `<div class="main__bg">`;
	} else {
		div = `<div class="${queryArr[0]}__bg">`;
	}
	const template = `${div}
			<div class="course-nav">
		<div class="home"><a href="/mas/"><i class="fa fa-home" title="Click here to go back to Courses...."></i></a></div>
		<div class="title">${courseTitle()}</div>
	</div>
			<div class="day">
				<div class="day-item"><strong>${renderPreviousDay()}</strong></div>
				<div class="day-item day-main-title">${renderTitle()}</div>
				<div class="day-item"><strong>${renderNextDay()}</strong></div>
			</div></div>`;
	header.innerHTML = template;
};

const injectPageTitle = () => {
	

	contents.programs.forEach(item => {
		if (item.course === queryArr[0]) {
			if(queryArr.length === 1){
				document.title = item.title + ' - ' + 'Mental Athlete Seriew';
			}
			item.contents.forEach(course => {
				if (course.day.toString().toLowerCase() === queryArr[1]) {
					if (
						course.day === 'introduction' ||
						course.day === 'new-beginning' ||
						course.day === 'contract' ||
						course.day === 'appendix' ||
						course.day === 'bonus'
					) {
						document.title = course.title + ' - ' + item.title;
					} else {
						document.title = `Day ${course.day}: ${course.title} - ${item.title}`;
					}
				}
			});
		}
	});
};

export { displayHeader, injectPageTitle };
