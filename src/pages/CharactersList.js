import React from 'react'
import "./CharactersList.css"
import { useCharaters } from '../hooks/useCharacters';
import {Link} from 'react-router-dom'


export default function CharactersList() {

    const {loading , data  } = useCharaters()

    // Returns 3 nodes
    // error , loading , data 
    // propirdad error no contiene , ver forma de cachar errores        
    
    if(loading) return <div>Loading...</div>;

  return (
    <div className='character-list'>
        {
            data?.characters.results.map((character) => <ListCompoponet key={character.id} character={character} />)
        }
    </div>
  )
}


function ListCompoponet( { character }  ) {
    //console.log(image)
    return(
        <Link to={`/${character.id}`}>
            <img src={character.image} alt = {character.name} />
            <h2>{character.name}</h2>
        </Link>
    )
}
  