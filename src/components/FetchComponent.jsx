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

    const fetchPokemonAxios = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response=>{
            console.log(response.data.results)
            setPokemon(response.data.results)
        })
        .catch(err=>console.log(err))
    }

    const fetchPokemonAxiosAwait = async() =>{
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        setPokemon(response.data.results)
    }

    return(
        <div>
            <button onClick={fetchPokemon}>Who are those Pokemon!?</button>
            <button onClick={fetchPokemonAwait}>Who are those Pokemon!?</button>
            <button onClick={fetchPokemonAxios}>Who are those Pokemon!?</button>
            <button onClick={fetchPokemonAxiosAwait}>Who are those Pokemon!?</button>
        {pokemon.map((mon, i)=>{
            return (<p key={i}>{mon.name}</p>)
        })}
        </div>
    )
}

export default FetchComponent