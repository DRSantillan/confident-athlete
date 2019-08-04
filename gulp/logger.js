const logger = type => {
	const currentDate = new Date();
	console.log(`A ${type} Task was initiated on the ${currentDate.toString()}`);
};

export default logger;
