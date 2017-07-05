console.log('Starting app');

setTimeout(() => {
	console.log('Inisde of callback');
}, 2000);

setTimeout(() => {
	console.log('Second callback')	
}, 0);

console.log('Finishing up');