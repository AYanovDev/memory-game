import { useState, useEffect } from "react";
import "./card.css";
import { getDefinition } from "./get-definition";

export default function Card(props) {
  const [def, setDef] = useState("");

  useEffect(() => {
    getDefinition(props.name).then(setDef).catch(console.error);
  }, [props.name]);

  return (
    <div className="card" onClick={props.onClick}>
      <p className="word">{props.name}</p>
      <p className="definition">{def}</p>
    </div>
  );
}
