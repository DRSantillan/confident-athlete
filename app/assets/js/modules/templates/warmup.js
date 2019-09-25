/* import { getProgram, getPage } from '../../lib';
import { contents } from '../../db/contents';

const displayWarmupContent = () => {
	const warmup = document.getElementById('warmup');
	
	
	const program = getProgram();
  const day = getPage();
  let temp;
  let sectionTitle = `<h3>Day ${day} - Warm-up</h3>`;

	contents.programs.forEach(item => {
		if (program === item.course) {
			item.contents.forEach(i => {
				if (i.day.toString() === day) {
					console.log(i);
					i.sections.forEach(s => {
						console.log(s);
						if (s.section === 'warmup') {
              console.log(s.content);
              temp = s.content;
						}
					});
				}
			});
		}
  });
  
  warmup.innerHTML = sectionTitle+ temp;
};

export { displayWarmupContent }; */
