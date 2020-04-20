document.addEventListener('DOMContentLoaded', () => {
	cardPostion();
});

window.addEventListener('load', () => {
	testApi();
});

function cardPostion() {
	const images = document.querySelectorAll('img');

	images.forEach(image => {
		const position = randomCoordinates();
		image.style.top = `${position.y}px`;
		image.style.left = `${position.x}px`;
		image.style.transform = `rotate(${randomRotation()}deg)`;
	});
}

function randomCoordinates() {
	return {
		x: Math.floor(Math.random() * window.innerWidth),
		y: Math.floor(Math.random() * window.innerHeight),
	}
}

function randomRotation() {
	return Math.floor(Math.random() * 90);
}

function testApi() {
	const button = document.querySelector('.test');

	button.addEventListener('click', () => {
		const email = getValue();
		if (!email) return false;

		const results = document.querySelector('.results');
		fetch('/bloom', {
			method: 'POST',
			body: JSON.stringify({
				email,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(data => data.json().then(res => {
			results.innerHTML = `<pre>${JSON.stringify(res, null, 2)}</pre>`;
		}));
	});
}

function getValue() {
	return document.querySelector('.email').value
}
