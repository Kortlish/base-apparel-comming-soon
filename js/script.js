const email = document.querySelector('#typeemail');
const submit = document.querySelector('#submit');
const text = document.querySelector('.error-message');
const newsletter = document.querySelector('.newsletter');

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function showError() {
	email.classList.add('error');
	text.classList.add('on');
	newsletter.classList.add('error');
}

function hideError() {
	email.classList.remove('error');
	text.classList.remove('on');
	newsletter.classList.remove('error');
}

const check = () => {
	if (!pattern.test(email.value)) {
		showError();
		return false;
	} else {
		hideError();
		return true;
	}
};

submit.addEventListener('click', check);
