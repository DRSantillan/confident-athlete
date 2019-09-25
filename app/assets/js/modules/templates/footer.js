
import { getUrlQuery } from '../../lib';
import { contents } from '../../db/contents';

let queryArr = getUrlQuery();
const renderPreviousDay = () => {
	
	let temp;

	contents.programs.forEach(item => {
		if (queryArr[0] === 'main') {
			temp = '';
		}
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
							temp = `<a href="?course=${queryArr[0]}&day=${item.contents[index - 1].day}" title="${item.contents[index - 1].title}"><< Day ${item.contents[index - 1].day}</a>`;
						} else {
							if (item.contents[index - 1].day === '') {
								temp = `<a href="?course=${queryArr[0]}" title="${
									item.contents[index - 1].title
								}"><< Contents</a>`;
							} else {
								if (item.contents[index - 1].day === 'appendix') {
									temp = `<a href="?course=${queryArr[0]}&day=${item.contents[index - 1].day}" title="${item.contents[index - 1].title}"><< Appendix</a>`;
								} else if (item.contents[index - 1].day === 'new-beginning') {
									temp = `<a href="?course=${queryArr[0]}&day=${item.contents[index - 1].day}" title="${item.contents[index - 1].title}"><< New Start</a>`;
								} else if (item.contents[index - 1].day === 'contract') {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index - 1].day
									}" title="${item.contents[index - 1].title}"><< Contract</a>`;
								} else if (item.contents[index - 1].day === 'bonus') {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index - 1].day
									}" title="${item.contents[index - 1].title}"><< Bonus</a>`;
								} else if (item.contents[index - 1].day === 'introduction') {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index - 1].day
									}" title="${item.contents[index - 1].title}"><< Intro</a>`;
								} else {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index - 1].day
									}" title="${item.contents[index - 1].title}">${
										item.contents[index - 1].title
									}</a>`;
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
	
	let temp;
	contents.programs.forEach(item => {
		if (queryArr[0] === 'main') {
			temp = '';
		}
		if (item.course === queryArr[0]) {
			item.contents.forEach((course, index) => {
				if (queryArr[1] === undefined) {
					temp = '';
				}
				if (course.day.toString() === queryArr[1]) {
					if (item.contents[index + 1] === undefined) {
						temp = `<a href="?course=${queryArr[0]}"> Contents >></a>`;
					} else {
						if (typeof item.contents[index + 1].day === 'number') {
							temp = `<a href="?course=${queryArr[0]}&day=${
								item.contents[index + 1].day
							}"> Day ${item.contents[index + 1].day} </a> >>`;
						} else {
							if (item.contents[index + 1].day === '') {
								temp = `<a href="?course=${queryArr[0]}/"> Contents >></a> `;
							} else {
								if (item.contents[index + 1].day === 'appendix') {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index + 1].day
									}"> Appendix >></a>`;
								} else if (item.contents[index + 1].day === 'new-beginning') {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index + 1].day
									}"> New Start >></a>`;
								} else if (item.contents[index + 1].day === 'contract') {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index + 1].day
									}"> Contract >></a>`;
								} else if (item.contents[index + 1].day === 'bonus') {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index + 1].day
									}" title="${
										item.contents[index - 1].title
									}">Bonus >></a> >>`;
								} else {
									temp = `<a href="?course=${queryArr[0]}&day=${
										item.contents[index + 1].day
									}"> ${item.contents[index + 1].title} >></a>`;
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
	
	
	contents.programs.forEach(item => {
		if (queryArr[0] === 'main') {
			temp = '';
		}
		if (item.course === queryArr[0]) {
			item.contents.forEach(course => {
				if(queryArr[1] === undefined){
					temp = '';
				}
				if (course.day.toString().toLowerCase() === queryArr[1]) {
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

	let div = '';
	if (queryArr[0] === 'main') {
		div = `<div class="main__ftr--bg">`;
	} else {
		div = `<div class="${queryArr[0]}__ftr--bg">`;
	}
	
	const template = `<div class="${queryArr[0]}__ftr--bg">
			<div class="day">
				<div class="day-item">${renderPreviousDay()}</div>
				<div class="day-item day-main-title">${renderTitle()}</div>
				<div class="day-item">${renderNextDay()}</div>
			</div><p>Developed by Dean Santillan &copy;2019</p></div>`;
	if (footer) {
		footer.innerHTML = template;
	}
};

export { displayFooter };
