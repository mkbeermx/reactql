import React, { useState } from 'react'
import { gql , useLazyQuery } from '@apollo/client'

const GET_CHARACTER_LOCATION = gql`
        query GetCharacterLocations($name:String){
            characters(filter:{name:$name}){
                results {
                    location {
                        name,
                        id
                    }
                }
            }
        }        
    `
export default function Search() {

    const [name,setName] = useState("")
    const [getLocations,{loading , data , called ,error}] = useLazyQuery(GET_CHARACTER_LOCATION,{
        variables : {
            name,
        }
    })

    console.log(
        loading,
        data,
        called,
        error
    )
    
 
  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={()=>getLocations()}>Serach</button>
        
        {loading && <div>Loading...</div>}
        {error && <div>something happens...</div>}
        {data && (
            <ul>
                {data.characters.results.map((character) => {
                    return <li key={Math.random()}>{character.location.name}</li>
                })}
            </ul>
        )}
    </div>
  )
}
