import { getProgram, getPage } from '../../lib';
const contents = {
	programs: [
		{
			course: 'fearless',
			title: 'The Fearless Athlete',
			contents: [
				{
					day: '',
					title: 'Contents'
				},
				{
					day: 'introduction',
					title: 'Introduction'
				},
				{
					day: 1,
					title: 'Fear, Anxiety, and Fear of Failure in Sports'
				},
				{
					day: 2,
					title: 'How Perfectionism Instills Fear of Failure'
				},
				{ day: 3, title: 'What is functional About Perfectionism' },
				{
					day: 4,
					title: 'Indentifying Beliefs and Thoughts that support Perfectionism'
				},
				{ day: 5, title: 'Modifiying expectations for fearless performances' },
				{ day: 6, title: 'Being your own best coach and letting go of errors' },
				{ day: 7, title: 'Do you strive for success or fear making mistakes?' },
				{ day: 8, title: 'Worry too much about what others think' },
				{ day: 9, title: 'Trust and striving for perfection' },
				{ day: 10, title: 'How you block the performance mindset' },
				{ day: 11, title: 'A Functional Mindset: Getting the Job Fearlessly' },
				{ day: 12, title: 'Becoming a fearless performer' },
				{ day: 13, title: 'Practice Strategies for a Performance Mindset' },
				{ day: 14, title: 'Beyond Sports: Finding Balance in your life' },
				{ day: 'new-beginning', title: 'A New Beginning' },
				{
					day: 'commitment-contract',
					title: 'Taking Fearless Action: My Commitment Contract'
				},
				{ day: 'appendix', title: 'Appendix 1: Defining your self-concept' }
			]
		},
		{
			course: 'competitive',
			title: 'The Competitive Athlete',
			contents: [
				{
					day: 1,
					title: 'wnd Fear of Failure in Sports'
				},
				{
					day: 2,
					title: 'Day 1: Feaw Fear of Failure in Sports'
				},
				{ day: 3, title: 'Day 1: Fearwf Failure in Sports' }
			]
		}
	]
};

const courseTitle = () => {
	let temp;
	const program = getProgram();
	contents.programs.forEach(item => {
		if (item.course === program) {
			temp = `<a href="/series/fearless/"><h1>${item.title}</h1></a>`;
		}
	});
	return temp;
};
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
						course.day === 'commitment-contract' ||
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
	});
	return temp;
};

const displayHeader = () => {
	const header = document.querySelector('header');
	const header_template = `${courseTitle()}
    ${renderPreviousDay()}${renderTitle()}${renderNextDay()}`;
	header.innerHTML = header_template;
};

export { displayHeader, renderPreviousDay };
