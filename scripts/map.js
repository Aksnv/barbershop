/* ------------- Popup - Map ------------- */

var popupMap = document.querySelector(".popup_map");
var buttonOpenPopupMap = document.querySelector(".contacts__button_contacts");
var buttonClosePopupMap = popupMap.querySelector(".popup__close-button");

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
		if (popupMap.classList.contains("popup_visible")) {
			e.preventDefault();
			overlay.classList.remove("overlay_visible");
			popupMap.classList.remove("popup_visible");
			mapImage.classList.remove("visually-hidden");
		}	
	}
});
