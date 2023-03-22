import React from "react";
import { Route } from "react-router-dom";
import MyUser from "./view/iam/iam";
import NavBar from "./view/navBar/NavBar";
import About from "./view/about/about";
import Proyects from "./Components/ContainerCard/ContainerCard";
import Footer from "./view/footer/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MyUser />
      <About />
      <Proyects />
      <Footer />
    </div>
  );
}

export default App;
