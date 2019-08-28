/* import warmupContent from './warmup';
const programs = { id: 'fearless' };
console.log(programs.id);

const getPage = () => {
	let currentPage = window.location.search;
	console.log(currentPage, 'search');
	currentPage = currentPage.replace('?page=', '');
	console.log(currentPage, 'current');
};

getPage();

const getData = async (url, program) => {
	const res = await fetch(url);
	const data = await res.json();

	warmupContent(data, program, 'warmup');
	warmupContent(data, program, 'objective');
};

getData('/series/fearless/fearless.json', 'fearless'); */
//warmupContent(data);
