import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import  SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

// api key ba26b31e

const API_URL = 'http://www.omdbapi.com?apikey=ba26b31e';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    
    useEffect(() => {
        searchMovies('Spiderman');
    },[]);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                ></img>
            </div>

            {movies?.length > 0
            ? (
                <div className="container">
                    {movies.map((movie) => <MovieCard movie={movie}/>)}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found!</h2>
                </div>
            )}
        </div>
    );
}

export default App;