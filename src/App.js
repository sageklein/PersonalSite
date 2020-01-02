import React from "react";
import PageContent from "./Components/PageContent/PageContent";
import HeroCard from "./Components/HeroCard/HeroCard";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<HeroCard />
			<PageContent />
			<Footer />
		</div>
	);
}

export default App;

