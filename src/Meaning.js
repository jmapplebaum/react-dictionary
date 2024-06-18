import React from "react";

export default function Meaning(props) {
  console.log({ props });
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        Definition: {props.meaning.definition}
        <br />
        <em>Example: {props.meaning.example}</em>
      </p>
    </div>
  );
}
