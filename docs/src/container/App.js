import ReactLight from "../../lib/ReactLight";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App () {
	return ReactLight.createComponent([
		Header(),
		Footer()
	]);
};

export default App;
