function createComponent (htmlTag, data, children) {
	if (typeof htmlTag === "object") {
		const elementTab = [];

		htmlTag.map((el) => {
			const tag = document.createElement(el.type);

			if (el.data) {
				tag.textContent = el.data.typeContent;
			}

			elementTab.push(tag);
		});

		return elementTab;
	} else {
		const HtmlData = {
			type: htmlTag,
			data: {
				typeContent: data.content ? data.content : null,
				attributes: data.attributes ? data.attributes : []
			},
		}
		return HtmlData;
	}
};

export default createComponent;
