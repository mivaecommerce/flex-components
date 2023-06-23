document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.ex-faqs').forEach((element, i) => {
		console.log(`Hello from ex-faqs #${i}. There are ${element.querySelectorAll('dt')?.length} FAQs`);
	});
});
