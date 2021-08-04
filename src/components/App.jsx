import React from "react";
import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/ecosport.jpg";
const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section><h1>Hola, React</h1></section>
      </main>
      <Recipes />
    </>
  )
}

export default App;