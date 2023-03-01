import React from "react";
import Headertop from "./Components/Header/Headertop";
import Headerbottom from "./Components/Header/Headerbottom";
import Banner from "./Components/Home/Banner";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Headertop />
      <Headerbottom />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
