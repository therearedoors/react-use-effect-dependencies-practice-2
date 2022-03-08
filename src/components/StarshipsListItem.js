import { useState, useEffect } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')

  useEffect(()=>starship.pilots[0] && fetch(starship.pilots[0])
                            .then(res => res.json())
                            .then(res => setFirstPilot(res.name))
                            ,[starship])

  console.log({ starship });

  return <li>{starship.name} - First Pilot: {firstPilot?firstPilot:"no pilots"}</li>;
}

export default StarshipsListItem;
