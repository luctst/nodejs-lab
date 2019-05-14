function Render(DOMTree, root) {
	DOMTree.map(el => {
		root.appendChild(el);
	})
}

export default Render;
