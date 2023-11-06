import React from 'react'
import './Character.css'
import { useCharater } from '../hooks/useCharacter'
import {useParams} from 'react-router'

export default function Character() {

    const { id } = useParams()

    const { data , loading } = useCharater(id) 
    
    if(loading) return <span>Loading</span> 
    if(data?.character ==  null && !loading  ) return <span>No datos pa mostrar</span> 

  return (
    <div className='character'>
        <img src={data.character.image} alt={data.character.image} width={750} height={750}/>
        <div className='character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='.character-episode'>
                {data.character.episode.map( episode => {
                    return <div key={episode.episode}>
                        {episode.name} - <b>{episode.episode}</b>
                        </div>
                })}    
            </div>
        </div>
    </div>
  )
}
