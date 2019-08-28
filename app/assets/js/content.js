const contentAssembly = () => {};
const getDay = program => {
	let currentDay = window.location.pathname;

	if (currentDay.includes(program)) {
		currentDay = currentDay.replace(`/series/${program}/`, '');
		currentDay = currentDay.replace('day-', '');
		currentDay = currentDay.replace('.html', '');

		return currentDay;
	}
};
export default contentAssembly;
