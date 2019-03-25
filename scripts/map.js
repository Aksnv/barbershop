var popupMap = document.querySelector(".popup_map");
var overlay = document.querySelector(".overlay");
var buttonOpenPopupMap = document.querySelector(".button_contacts");
var buttonClosePopupMap = popupMap.querySelector(".popup__close-button_map");
var mapImage = popupMap.querySelector(".popup_map img");

buttonOpenPopupMap.addEventListener("click", function(e) {
	e.preventDefault();
	overlay.classList.add("overlay_visible");
	popupMap.classList.add("popup_visible");
	mapImage.classList.add("visually-hidden");
});

buttonClosePopupMap.addEventListener("click", function(e) {
	e.preventDefault();
	overlay.classList.remove("overlay_visible");
	popupMap.classList.remove("popup_visible");
	mapImage.classList.remove("visually-hidden");
});

window.addEventListener("keydown", function(e) {
	if (e.keyCode === 27) {
		e.preventDefault();
		overlay.classList.remove("overlay_visible");
		popupMap.classList.remove("popup_visible");
		mapImage.classList.remove("visually-hidden");
	}
});
