import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard'
import './Results.css'
import axios from './axios'
import FlipMove from 'react-flip-move'

function Results({ selectedOption }) {
//state is like writing a variable in React
    const [movies, setMovies] = useState(["1", "2", "3"]);
    useEffect(() => {
        // run this code once when the Results component loads/mount
        async function fetchData() {
        //await means waiting for response to come back
        //returns an array of all the movies from the selectedOption
            const request = await axios.get(selectedOption);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption]) //runs code every time selectedOption changes
    //flipmove is a react library to add a nice animation when switching to different nav titles
    return (
        <div className="results">
            <FlipMove> 
                {movies.map((movie) => (
     //mapping through the array of movies and passing the movie as a prop into the VideoCard  
     //key allows React to not have to re-render the entire list, just the VideoCard             
                <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Results
