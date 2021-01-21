const username = document.getElementById("username");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("psw");

const inputFields = document.getElementsByTagName("input");
const inputFieldIndicators = document.querySelectorAll(".fa-times");
const formSubmissionSection = document.getElementById(
	"form-submission-section"
);
const resetButton = document.getElementById("reset-button");
const submitButton = document.getElementById("submit");

const nameRegex = new RegExp(/^[a-zA-Z -]{3,16}$/);
const emailRegex = new RegExp(
	/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
);
const passwordRegex = new RegExp(/^[a-z0-9_-]{6,18}$/);

username.addEventListener("keyup", () => {
	const checked = inputFieldIndicators[0];
	if (
		username.value.trim() !== "" &&
		username.value.trim().match(nameRegex)
	) {
		checked.className = "fas fa-check";
	} else {
		checked.className = "fas fa-times";
	}
});

password.addEventListener("keyup", () => {
	const checked = inputFieldIndicators[1];
	if (
		password.value.trim() !== "" &&
		password.value.trim().match(passwordRegex)
	) {
		checked.className = "fas fa-check";
	} else {
		checked.className = "fas fa-times";
	}
});

if (email) {
	email.addEventListener("keyup", () => {
		const checked = inputFieldIndicators[2];
		if (email.value.trim() !== "" && email.value.trim().match(emailRegex)) {
			checked.className = "fas fa-check";
		} else {
			checked.className = "fas fa-times";
		}
	});
}

if (firstName) {
	firstName.addEventListener("keyup", () => {
		const checked = inputFieldIndicators[3];
		if (
			firstName.value.trim() !== "" &&
			firstName.value.trim().match(nameRegex)
		) {
			checked.className = "fas fa-check";
		} else {
			checked.className = "fas fa-times";
		}
	});
}

if (lastName) {
	lastName.addEventListener("keyup", () => {
		const checked = inputFieldIndicators[4];
		if (
			lastName.value.trim() !== "" &&
			lastName.value.trim().match(nameRegex)
		) {
			checked.className = "fas fa-check";
		} else {
			checked.className = "fas fa-times";
		}
	});
}

const resetForm = (e) => {
	e.preventDefault();
	for (inputField of inputFields) {
		if (inputField.value.trim() !== "") {
			inputField.value = "";
		}
	}
	for (inputFieldIndicator of inputFieldIndicators) {
		if (inputFieldIndicator.className === "fas fa-check") {
			inputFieldIndicator.className = "fas fa-times";
		}
	}
};

const submitForm = (e) => {
	e.preventDefault();
	for (inputField of inputFields) {
		if (
			username.value.trim() !== "" &&
			password.value.trim() !== "" &&
			email.value.trim() !== ""
		) {
			if (
				inputField.value.trim() !== "" &&
				(inputField.value.trim().match(nameRegex) ||
					inputField.value.trim().match(emailRegex) ||
					inputField.value.trim().match(passwordRegex))
			) {
				formSubmissionSection.className = "submitted";
				formSubmissionSection.innerHTML = `<p>Form has been submitted successfully.</p>`;
			}
		} else {
			formSubmissionSection.className = "not-submitted";
			formSubmissionSection.innerHTML = `<p>Cannot submit form. Please try again.</p>`;
		}
	}
};

resetButton.addEventListener("click", resetForm);
submitButton.addEventListener("click", submitForm);
