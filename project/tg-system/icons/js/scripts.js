hljs.initHighlightingOnLoad();

// copy to clipboard function
const aioColors = document.querySelectorAll('code');
aioColors.forEach(color => {
	color.addEventListener('click', () => {
		const selection = window.getSelection();
		const range = document.createRange();
		range.selectNodeContents(color);
		selection.removeAllRanges();
		selection.addRange(range);
		try {
			document.execCommand('copy');
			selection.removeAllRanges();
			const original = color.textContent;
			color.textContent = 'Copied!';
			color.classList.add('success');
			setTimeout(() => {
				color.textContent = original;
				color.classList.remove('success');
			}, 1200);
		} catch(e) {
			const errorMsg = document.querySelector('.error-msg');
			errorMsg.classList.add('show');
			setTimeout(() => {
				errorMsg.classList.remove('show');
			}, 1200);
		}
	});
});

// disabled F12 key
document.onkeypress = function (event) {  
	event = (event || window.event);  
	if (event.keyCode == 123) {  
		return false;  
	}  
}  
document.onmousedown = function (event) {  
	event = (event || window.event);  
	if (event.keyCode == 123) {  
		return false;  
	}  
}  
document.onkeydown = function (event) {  
	event = (event || window.event);  
	if (event.keyCode == 123) {  
		return false;  
	}  
}  