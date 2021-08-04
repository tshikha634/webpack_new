import {useState} from "react";

const elevenShieldReceipe = {
  leatherStrips : 2,
  ironIngot : 1,
  refinedMoonstone : 4
}

const elvenGaountletsReceipe = {
  ...elevenShieldReceipe,
  leather : 1,
  refinedMoonstone : 4
}

console.log(elevenShieldReceipe);
console.log(elvenGaountletsReceipe);

const Recipes = () => {
  const [receipe, setReceipe] = useState({});
  return (
    <div>
      <h3>Current Receipe</h3>
      <button onClick={() => setReceipe(elevenShieldReceipe)}>Elven Shield Receipe</button>
      <button onClick={() => setReceipe(elvenGaountletsReceipe)}>Elven Gaount Shield Receipe</button>
      <ul>
        {Object.keys(receipe).map((material) => <li key={material}>{material}:{receipe[material]}</li>)}
      </ul>
    </div>
  )
}

export default Recipes;