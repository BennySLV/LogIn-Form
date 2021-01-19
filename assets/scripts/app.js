const username = document.getElementById('usrname');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('psw');

const form = document.getElementById('form');
const errorSection = document.getElementsByClassName('error-section');
const resetButton = document.getElementById('reset-button');
const submitButton = document.getElementById('submit');

const nameRegex = new RegExp(/^[a-zA-Z -]{3,16}$/);
const emailRegex = new RegExp(
	/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
);
const passwordRegex = new RegExp(/^[a-z0-9_-]{6,18}$/);

const validateForm = () => {
	return (
		nameRegex.test(username.value) &&
		emailRegex.test(email.value) &&
		passwordRegex.test(password.value)
	);
};

const resetForm = (e) => {
	e.preventDefault();
	console.log(e.target);
	form.reset();
};

const submitFormData = (event) => {
	event.preventDefault();
	console.log(`The form values ${validateForm() ? 'pass' : 'do not pass....'}`);
};

// validateForm();

resetButton.addEventListener('click', resetForm);
submitButton.addEventListener('click', submitFormData);

username.addEventListener('keyup', () => {
	const checked = document.getElementById('checked-1');
	if (nameRegex.test(username.value)) {
		checked.className = 'fas fa-check';
	} else {
		checked.className = 'fas fa-times';
	}
});

firstName.addEventListener('keyup', () => {
	const checked = document.getElementById('checked-2');
	if (nameRegex.test(firstName.value)) {
		checked.className = 'fas fa-check';
	} else {
		checked.className = 'fas fa-times';
	}
});

lastName.addEventListener('keyup', () => {
	const checked = document.getElementById('checked-3');
	if (nameRegex.test(lastName.value)) {
		checked.className = 'fas fa-check';
	} else {
		checked.className = 'fas fa-times';
	}
});

email.addEventListener('keyup', () => {
	const checked = document.getElementById('checked-4');
	if (emailRegex.test(email.value)) {
		checked.className = 'fas fa-check';
	} else {
		checked.className = 'fas fa-times';
	}
});

password.addEventListener('keyup', () => {
	const checked = document.getElementById('checked-5');
	if (passwordRegex.test(password.value)) {
		checked.className = 'fas fa-check';
	} else {
		checked.className = 'fas fa-times';
	}
});
