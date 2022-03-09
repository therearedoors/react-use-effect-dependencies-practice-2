import { useState, useEffect } from "react";

function StarshipsListItem(props) {
  const { starship } = props;
  const length = starship.pilots ? starship.pilots.length : 0
  const [pilots, setPilots] = useState([])

  const multiFetch = (urlArray,i) => {
    if (i >= length-1) return;
    i++
    fetch(starship.pilots[i])
    .then(res => res.json())
    .then(res => setPilots(pilots => [...pilots, res]))
    .then(() => multiFetch(urlArray,i))
  }

    useEffect(() => starship && multiFetch(starship.pilots,-1),[starship])

  console.log({ starship });

  return <li>{starship.name} - Pilots: {length>0?pilots.reduce((a,b)=>a+` , ${b.name}`,""):"no pilots"}</li>;
}

export default StarshipsListItem;
