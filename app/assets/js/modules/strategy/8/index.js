import { saveCheckBoxes, clearCheckBoxes, loadCheckBoxes } from '../../../lib';

const chkboxSocApp = document.getElementsByClassName('social-approval');

const saveSocialApproval = () => {
	saveCheckBoxes(chkboxSocApp, 'strategy', 'socialapproval');
};
const clearSocialApproval = () => {
	clearCheckBoxes(chkboxSocApp, 'strategy', 'socialapproval');
};

const loadSocialApproval = () => {
	loadCheckBoxes(chkboxSocApp, 'strategy', 'socialapproval');
};

export { saveSocialApproval, clearSocialApproval, loadSocialApproval };
