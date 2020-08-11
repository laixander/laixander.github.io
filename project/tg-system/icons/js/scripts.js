<<<<<<< HEAD
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
=======
hljs.initHighlightingOnLoad();const aioColors=document.querySelectorAll("code");aioColors.forEach(a=>{a.addEventListener("click",()=>{const b=window.getSelection(),c=document.createRange();c.selectNodeContents(a),b.removeAllRanges(),b.addRange(c);try{document.execCommand("copy"),b.removeAllRanges();const c=a.textContent;a.textContent="Copied!",a.classList.add("success"),setTimeout(()=>{a.textContent=c,a.classList.remove("success")},1200)}catch(a){const b=document.querySelector(".error-msg");b.classList.add("show"),setTimeout(()=>{b.classList.remove("show")},1200)}})}),document.onkeypress=function(a){if(a=a||window.event,123==a.keyCode)return!1},document.onmousedown=function(a){if(a=a||window.event,123==a.keyCode)return!1},document.onkeydown=function(a){if(a=a||window.event,123==a.keyCode)return!1};
>>>>>>> 5c1cd1f92534c37248f8394fe2d56854e86caa06
