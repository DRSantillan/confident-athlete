import { saveCheckBoxes, clearCheckBoxes, loadCheckBoxes } from '../../../lib';
/* Area: Strategy  Day: 8  Type: social-approval */
const type = 'social-approval';
const area = 'strategy';
const chkboxSocApp = document.getElementsByClassName(type);

const saveSocialApproval = () => {
	saveCheckBoxes(chkboxSocApp, area, type);
};
const clearSocialApproval = () => {
	clearCheckBoxes(chkboxSocApp, area, type);
};

const loadSocialApproval = () => {
	loadCheckBoxes(chkboxSocApp, area, type);
};

export { saveSocialApproval, clearSocialApproval, loadSocialApproval };
