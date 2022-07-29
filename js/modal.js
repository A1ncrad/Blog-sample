const modalBtn = document.querySelectorAll("[data-modal]");
const body = document.body;
const modalClose = document.querySelectorAll(".modal__close-btn");
const modal = document.querySelectorAll(".modal");


modalBtn.forEach(item => {
	item.addEventListener("click", Event => {
		let $this = Event.currentTarget;
		let modalId = $this.getAttribute("data-modal");
		let modal = document.getElementById(modalId);
		let modalContent = modal.querySelector(".modal__content");

		modalContent.addEventListener("click", Event => {
			Event.stopPropagation();
		});

		modal.classList.add("show");
		body.classList.add("no-scroll");

		setTimeout(() => {
			modalContent.style.transform = "none";
			modalContent.style.opacity = "1";
		}, 1);
	});
});

modalClose.forEach(item => {
	item.addEventListener("click", Event => {
		let currentModal = Event.currentTarget.closest(".modal");

		closeModal(currentModal);
	});
});

modal.forEach(item => {
	item.addEventListener("click", Event => {
		let currentModal = Event.currentTarget;

		closeModal(currentModal);
	});
});

function closeModal(modal) {
	let modalContent = modal.querySelector(".modal__content");
	modalContent.removeAttribute("style");

	setTimeout(() => {
		modal.classList.remove("show");
		body.classList.remove("no-scroll");
	}, 200);
}