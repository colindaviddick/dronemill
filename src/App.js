import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Footer from "./Footer";
import Contact from "./Contact";

function App() {
	return (
		<div className="full-page-contents">
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} exact />
				<Route path='/home' element={<Home />} exact />
				<Route path='/shop' element={<Shop />} exact />
				<Route path='/about' element={<About />} exact />
				<Route path='/contact' element={<Contact />} exact />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
