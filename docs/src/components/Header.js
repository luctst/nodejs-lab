import ReactLight from "../../lib/ReactLight";

function Header() {
	return ReactLight.createComponent("header", {
		content: "Test",
		attributes: [
			{name: "class", value: "container"}
		]
	});
}

export default Header;
