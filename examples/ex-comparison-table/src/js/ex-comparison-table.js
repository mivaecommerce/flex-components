document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.ex-comparison-table').forEach((table, i) => {
		console.log(`ex-comparison-table ${i} has ${table.querySelectorAll('tr').length} rows`);
	});
});
