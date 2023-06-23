document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.ex-basic').forEach((element, i) => {
		console.log(`Hello from ex-basic component #${i}. The current text is:`, element.innerText);
	});
});
