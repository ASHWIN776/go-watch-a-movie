import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Movie(){
    const {id : movieId} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        setMovie({
            id: 2,
            title: "Raider of the Lost Ark",
            release_date: "1981-06-12",
            runtime: 115,
            mpaa_rating: "PG-13",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim veritatis aliquam iusto consequatur amet nisi dolorum delectus esse error deleniti eligendi rem debitis, vel quod. Incidunt quae dolorum modi."
        })

    }, [movieId])

    return (
        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} minutes and Rated {movie.mpaa_rating}</em></small>
            <hr />
            <p>{movie.description}</p>
        </div>
    )
}