import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  console.log({ props });
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
        <br />
        <Example example={props.meaning.example} />
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
