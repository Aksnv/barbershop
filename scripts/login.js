var popupLogin = document.querySelector(".popup_login");
var overlay = document.querySelector(".overlay");
var buttonOpenPopupLogin = document.querySelector(".user-navigation__link_login");
var buttonClosePopupLogin = popupLogin.querySelector(".popup__close-button_login");

var formLogin = popupLogin.querySelector(".login-form");
var fieldLogin = popupLogin.querySelector(".login-form__field_login");
var fieldPassword = popupLogin.querySelector(".login-form__field_password");

var popupShakeReload = function() {
	popupLogin.classList.remove("popup_invalid");
};

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

buttonOpenPopupLogin.addEventListener("click", function(e) {
	e.preventDefault();
	overlay.classList.add("overlay_visible");
	popupLogin.classList.add("popup_visible");
	if (storage) {
		fieldLogin.value = storage;
		fieldLogin.classList.remove("login-form__field_invalid");
		fieldPassword.focus();
	} else {
		fieldLogin.focus();
	}
});

buttonClosePopupLogin.addEventListener("click", function(e) {
	e.preventDefault();
	overlay.classList.remove("overlay_visible");
	popupLogin.classList.remove("popup_visible");
	popupLogin.classList.remove("popup_invalid");
	fieldLogin.classList.remove("login-form__field_invalid");
	fieldPassword.classList.remove("login-form__field_invalid");
});

window.addEventListener("keydown", function(e) {
	if (e.keyCode === 27) {
		e.preventDefault();
		overlay.classList.remove("overlay_visible");
		popupLogin.classList.remove("popup_visible");
		popupLogin.classList.remove("popup_invalid");
	}
});

formLogin.addEventListener("submit", function(e) {
	if (!fieldLogin.value) {
		e.preventDefault();
		fieldLogin.classList.add("login-form__field_invalid");
		popupLogin.classList.add("popup_invalid");
		setTimeout(popupShakeReload, 1000);
	}
	if (!fieldPassword.value) {
		e.preventDefault();
		fieldPassword.classList.add("login-form__field_invalid");
		popupLogin.classList.add("popup_invalid");
		setTimeout(popupShakeReload, 1000);
	}
	if (isStorageSupport) {
		localStorage.setItem("login", fieldLogin.value);
	}
});

fieldLogin.addEventListener("blur", function() {
	if (fieldLogin.value) {
		fieldLogin.classList.remove("login-form__field_invalid");
	} else {
		fieldLogin.classList.add("login-form__field_invalid");
	}
});

fieldPassword.addEventListener("blur", function() {
	if (fieldPassword.value) {
		fieldPassword.classList.remove("login-form__field_invalid");
	} else {
		fieldPassword.classList.add("login-form__field_invalid");
	}
});
