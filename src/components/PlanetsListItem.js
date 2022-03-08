import { useState, useEffect } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')

  useEffect(() => planet && fetch(planet.films[0])
                              .then(res => res.json())
                              .then(res => setFirstFilm(res.title))
                              ,[planet])

  console.log("Planet", planet);
  return <li>{planet.name} - First Film: {firstFilm}</li>;
}

export default PlanetsListItem;
