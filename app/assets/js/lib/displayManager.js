import { contents } from '../db/contents';
import { getUrlQuery } from '../lib';

const audioContent = (id, section, currDay, css, url) => {
	let day = '';
	if (
		currDay === 'introduction' ||
		currDay === 'new-beginning' ||
		currDay === 'contract' ||
		currDay === 'appendix' ||
		currDay === 'bonus'
	) {
		day = `<h3>${section}</h3>`;
	} else {
		day = `<h3>Day ${currDay} - ${section}</h3>`;
	}

	let audioHtml = `<section id="${id}" class="${css}">
			${day}
			<p>Either listen to the audio online or click the ellipsis to the right and click "download" to save to your
				device.</p>
			<audio controls src="${url}"></audio>
    </section>`;

	return audioHtml;
};
const notesContent = (currDay, css) => {
	let day = '';
	let notes;

	if (
		currDay === 'introduction' ||
		currDay === 'new-beginning' ||
		currDay === 'contract' ||
		currDay === 'appendix' ||
		currDay === 'bonus'
	) {
		notes = '';
	} else {
		day = `<h3>Day ${currDay} - Additional Notes</h3>`;
		notes = `<section id="notes" class="${css}">
			${day}
			<div class="container">
				<div class="container__row">
					<div class="container__col">
						<textarea id="day-note" class="txt-input day-notes" placeholder="Enter Notes here..." rows="200" wrap></textarea>
					</div>
				</div>
				<button class="btn" id="saveNotes">Save</button><button class="btn" id="clearNotes">Clear</button>
			</div></section>`;
	}

	return notes;
};

const sectionContent = (id, css, currDay, section, content) => {
	let day = '';
	if (
		currDay === 'introduction' ||
		currDay === 'new-beginning' ||
		currDay === 'contract' ||
		currDay === 'appendix' ||
		currDay === 'bonus'
	) {
		day = ``;
	} else {
		day = `<h3>Day ${currDay} - ${section}</h3>`;
	}
	let sec = `
		<section id="${id}" class="${css}">
		${day}
		${content}
		</section>`;

	return sec;
};
const getContents = () => {
	const wrapper = document.getElementById('content-wrapper');

	let siteCoursesIndex = '<section><h3>Courses</h3><ol>';
	let courseIndex = `<section><ol>`;
	let indexData = '';
	const queryArr = getUrlQuery();

	if (queryArr.length === 1) {
		if (queryArr[0] === 'main') {
			contents.programs.forEach(item => {
				siteCoursesIndex += `<li><a href="?course=${item.course}">${item.title}</a></li>`;
			});
			siteCoursesIndex += '</ol></section>';
			indexData = siteCoursesIndex;
		} else if (queryArr[0] === 'fearless') {
			contents.programs.forEach(item => {
				if (item.course === queryArr[0]) {
					item.contents.forEach(day => {
						if (day.day !== '') {
							courseIndex += `<li><a href="?course=${item.course}&day=${day.day}"><strong>${day.title}</strong></a
						></li>`;
						}
					});
				}
			});
			courseIndex += '</ol></section>';
			indexData = courseIndex;
		} else if (queryArr[0] === 'focused') {
			contents.programs.forEach(item => {
				if (item.course === queryArr[0]) {
					item.contents.forEach(day => {
						if (day.day !== '') {
							courseIndex += `<li><a href="?course=${item.course}&day=${day.day}"><strong>${day.title}</strong></a
						></li>`;
						}
					});
				}
			});
			courseIndex += '</ol></section>';
			indexData = courseIndex;
		} else if (queryArr[0] === 'confident') {
			contents.programs.forEach(item => {
				if (item.course === queryArr[0]) {
					item.contents.forEach(day => {
						if (day.day !== '') {
							courseIndex += `<li><a href="?course=${item.course}&day=${day.day}"><strong>${day.title}</strong></a
						></li>`;
						}
					});
				}
			});
			courseIndex += '</ol></section>';
			indexData = courseIndex;
		} else if (queryArr[0] === 'composed') {
			contents.programs.forEach(item => {
				if (item.course === queryArr[0]) {
					item.contents.forEach(day => {
						if (day.day !== '') {
							courseIndex += `<li><a href="?course=${item.course}&day=${day.day}"><strong>${day.title}</strong></a
						></li>`;
						}
					});
				}
			});
			courseIndex += '</ol></section>';
			indexData = courseIndex;
		}

		//return indexData;
	} else {
		let notes;
		contents.programs.forEach(program => {
			if (program.course === queryArr[0]) {
				program.contents.forEach(content => {
					if (content.day.toString() === queryArr[1]) {
						content.sections.forEach(section => {
							if (section.section === 'Audio') {
								indexData = audioContent(
									section.id,
									section.section,
									queryArr[1],
									queryArr[0],
									section.content
								);
							} else {
								notes = notesContent(content.day, queryArr[0]);
								indexData += sectionContent(
									section.id,
									queryArr[0],
									queryArr[1],
									section.section,
									section.content
								);
							}
						});
					}
				});
			}
		});
		indexData += notes;
	}
	wrapper.innerHTML = indexData;
};
export { getContents, getUrlQuery };
