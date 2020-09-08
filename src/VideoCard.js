import React, { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'
import {ThumbUpSharp} from '@material-ui/icons'

//base URL for the images
const base_url = "https://image.tmdb.org/t/p/original/";

//using forwardRef to point at HTML on the page 
const VideoCard = forwardRef(({ movie }, ref) => {
//passing movie from array into the VideoCard to display on screen
//text truncate is a react installation that I'm using to truncate the text after 1 line 
    return (
        <div ref={ref} className="videoCard">           
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path }`} alt="movie poster" />              
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview} 
            />            
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} • <ThumbUpSharp />{" "}
                {movie.vote_count}
            </p>
        </div>
    )
})

export default VideoCard
