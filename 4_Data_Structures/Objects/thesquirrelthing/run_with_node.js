// load dependencies
require('./load');
require('./journal');
require('./04_data');

for (let event of journalEvents(JOURNAL)) {
	let correlation = phi(tableFor(event, JOURNAL));
	if (correlation > 0.1 || correlation < -0.1) {
		console.log(event + ':', correlation);
	}
}
