if (!window.toggleClass) {
	window.toggleClass = (element, className) => {
		element.classList.contains(className)
			? element.classList.remove(className)
			: element.classList.add(className);
	};
}

window.addEventListener("message", (message) => {
	const element = document.querySelector(`.element#${message.data.id}`);
	window.toggleClass(element, "active");
});

window.addEventListener("load", () => {
	const svgElement = document.querySelector("#svgElement");
	const domTriggers = document.querySelectorAll(".element");

	domTriggers.forEach((i) => {
		i.addEventListener("click", (e) => {
			// do stuff on DOM
			window.toggleClass(e.target, "active");
			// Send Id to SVG
			svgElement.contentWindow.postMessage(e.target.getAttribute("id"), "*");
		});
	});
});
