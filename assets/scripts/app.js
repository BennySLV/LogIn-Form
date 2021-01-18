const username = document.getElementById("usrname").value;
const firstName = document.getElementById("fname").value;
const lastName = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("psw").value;

const form = document.getElementById("form");
const errorSection = document.getElementsByClassName("error-section");
const resetButton = document.getElementById("reset-button");
const submitButton = document.getElementById("submit");

const nameRegex = new RegExp(/^[a-zA-Z -]{3,16}$/);
const emailRegex = new RegExp(
	/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
);
const passwordRegex = new RegExp(/^[a-z0-9_-]{6,18}$/);

const validateForm = () => {};

const resetForm = (e) => {
	e.preventDefault();
	form.reset();
};

const submitFormData = () => {};

resetButton.addEventListener("click", resetForm);
submitButton.addEventListener("click", submitFormData);
