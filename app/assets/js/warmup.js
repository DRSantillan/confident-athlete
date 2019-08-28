/* const warmupContent = (data, program, type) => {
	const section = document.getElementById(type);
	const currentDay = getDay(program);
	let title = '';

	switch (type) {
		case 'warmup':
			title = 'Warm-up';
			break;
		case 'objective':
			title = 'Objective';
			break;
	}

	data.days.forEach(day => {
		let content = '';

		if (day.day.toString() === currentDay) {
			day[type].forEach(para => {
				content += `<p>${para}</p>`;
			});

			let template = `<h3>Day ${day.day} - ${title}</h3>${content}`;
			section.innerHTML = template;
		}
	});
};

const getDay = program => {
	let currentDay = window.location.pathname;
	console.log(currentDay);
	if (currentDay.includes(program)) {
		currentDay = currentDay.replace(`/series/${program}/`, '');
		currentDay = currentDay.replace('day-', '');
		currentDay = currentDay.replace('.html', '');
		console.log(currentDay);
		return currentDay;
	}
};

export default warmupContent; */
