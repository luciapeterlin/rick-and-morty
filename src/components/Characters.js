import { useState, useEffect } from "react";
import Character from "./Character";
import { useFetch } from "./../customHooks/useFetch"

function Characters() {

  const characters  = useFetch()

  return (
    <div className="characters-container">
      {Array.isArray(characters)
        ? characters.map(character => {
          return <Character key={character.id} character={character} />
        })
      : null}
    </div>
  );
}

export default Characters;
