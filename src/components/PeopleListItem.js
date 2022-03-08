import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState('');

  useEffect(() => person && fetch(person.homeworld)
          .then(res => res.json())
          .then(res=>setHomeworld(res))
          ,[props])

  console.log("person", person)

  return (
    <ul>
      {homeworld && <li>{person.name} - Homeworld: {homeworld.name}</li>}
    </ul>
  );
}

export default PeopleListItem;
