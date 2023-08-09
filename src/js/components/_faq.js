const accordionItems = document.querySelectorAll(".faq__elem")

if (accordionItems.length) {
	accordionItems.forEach((itemAccordion) => {
		const accordionTitle = itemAccordion.querySelector(".faq__title-box")
		const accordionContent = itemAccordion.querySelector(".faq__content")

		accordionTitle.addEventListener("click", () => {
			if (!itemAccordion.classList.contains("faq__elem--active")) {
				const accordionItemsActive = document.querySelectorAll(".faq__elem--active")
				accordionItemsActive.forEach(itemAccordionActive => {
					const accordionContent = itemAccordionActive.querySelector(".faq__content")
					itemAccordionActive.classList.remove("faq__elem--active")
				})

				itemAccordion.classList.add("faq__elem--active")

			} else {
				itemAccordion.classList.remove("faq__elem--active")
			}
		})
	})
}


