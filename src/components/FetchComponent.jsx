import React, {useState} from 'react'
import axios from 'axios'

const FetchComponent = () => {
    const[pokemon, setPokemon] = useState([])

    const fetchPokemon = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response=>{
            return response.json()
        })
        .then(jsonResponse=>{
            console.log(jsonResponse.results)
            setPokemon(jsonResponse.results)
        })
        .catch(err=>console.log(err))
    }

    const fetchPokemonAwait = async()=>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        setPokemon(jsonResponse.results)
    }

    return(
        <div>
            <button onClick={fetchPokemon}>Who are those Pokemon!?</button>
            <button onClick={fetchPokemonAwait}>Who are those Pokemon!?</button>
        {pokemon.map((mon, i)=>{
            return (<p key={i}>{mon.name}</p>)
        })}
        </div>
    )
}

export default FetchComponent