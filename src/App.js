import React from "react";
import Headertop from "./Components/Header/Headertop";
import Headerbottom from "./Components/Header/Headerbottom";
import Banner from "./Components/Home/Banner";
import Footer from "./Components/Footer/Footer";
import Stats from "./Components/Home/Stats";
import StatsTwo from "./Components/Home/StatsTwo";
import Cards from "./Components/Home/Cards";

function App() {
  return (
    <div className="App">
      <Headertop />
      <Headerbottom />
      <Banner />
      <Stats />
      <StatsTwo />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
