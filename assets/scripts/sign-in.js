const username_email = document.getElementById('username');
const password = document.getElementById('psw1');

const resetButton = document.getElementById('reset-button2');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit');

const usernameEmailRegex = new RegExp(
	/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
);
const passwordRegex = new RegExp(/^[a-z0-9_-]{6,18}$/);

const validateForm = () => {
	return (
		usernameEmailRegex.test(username_email.value) &&
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

resetButton.addEventListener('click', resetForm);
submitBtn.addEventListener('click', submitFormData);

username_email.addEventListener('keyup', () => {
	const signed_In = document.getElementById('checked-1');
	if (usernameEmailRegex.test(username_email.value)) {
		signed_In.className = 'fas fa-check';
	} else {
		signed_In.className = 'fas fa-times';
	}
});

password.addEventListener('keyup', () => {
	const logIn_password = document.getElementById('sign-psw');
	if (passwordRegex.test(password.value)) {
		logIn_password.className = 'fas fa-check';
	} else {
		logIn_password.className = 'fas fa-times';
	}
});
