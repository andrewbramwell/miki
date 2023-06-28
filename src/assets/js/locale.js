const toggle = document.getElementById("currLocale");

function toggleDropdown(event) {
	event.preventDefault();
	const hiddenLocales = document.querySelectorAll(".locale__link--hidden");
	hiddenLocales.forEach((el) => el.classList.toggle("open"));
}

toggle.addEventListener("click", toggleDropdown);
