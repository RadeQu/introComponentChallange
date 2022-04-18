const inputs = document.querySelectorAll("input");
const subBtn = document.querySelector("button");
subBtn.addEventListener("click", () => {
	for (let i = 0; inputs.length; i += 1) {
		let input = inputs[i];
		const elem = input.placeholder;
		const regx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
		if (input.value == "" && input.placeholder != "example@email/com") {
			input.nextElementSibling.textContent = `${elem} cannot be empty`;
			input.classList.add("active");
			input.classList.remove("neutral");
			input.classList.add("placeholderVisible")
		} else if (input.value.length >= 1) {
			if(input.classList.contains("placeholderVisible")){
			input.classList.remove("placeholderVisible")}
			input.classList.add("neutral");
			input.classList.remove("active");
			input.nextSibling.textContent = ``;
			if (input.placeholder == "Email Address" || input.placeholder == "example@email/com") {
				if (input.value.match(regx)) {
					input.placeholder = "Email Address";
					input.classList.remove("placeholderColor");
				} else {
					input.nextElementSibling.textContent = `Looks like this is not an email`;
					input.classList.add("active");
					input.classList.remove("neutral");
					input.value = ""
					input.placeholder = "example@email/com";
					input.classList.add("placeholderColor");
				}
			}
		} else if (input.placeholder == "example@email/com" && input.value == ""){
			input.nextElementSibling.textContent = `Email Address cannot be empty`;
			input.classList.add("active");
			input.classList.remove("neutral");
			input.classList.add("placeholderVisible")
			input.classList.remove("placeholderColor");
		}
	}
});
