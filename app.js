const myText = document.querySelector('#my-text');
const result = document.querySelector('#result');
let limit = 50;
result.textContent = 0 + '/' + limit;
myText.addEventListener('input', function() {
	let textLength = myText.value.length;
	result.textContent = textLength + '/' + limit;
	if (textLength > limit) {
		myText.style.background = 'red';
		myText.style.fontSize = '40px';
		let con = confirm('davom');
		if (con == true) {
			myText.value = '';
		}
	} else {
		myText.style.background = '#ccc';
		myText.style.fontSize = '23px';
	}
});
