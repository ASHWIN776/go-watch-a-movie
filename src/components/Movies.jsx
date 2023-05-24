import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Movies(){
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim veritatis aliquam iusto consequatur amet nisi dolorum delectus esse error deleniti eligendi rem debitis, vel quod. Incidunt quae dolorum modi."
            },
            {
                id: 2,
                title: "Raider of the Lost Ark",
                release_date: "1981-06-12",
                runtime: 115,
                mpaa_rating: "PG-13",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim veritatis aliquam iusto consequatur amet nisi dolorum delectus esse error deleniti eligendi rem debitis, vel quod. Incidunt quae dolorum modi."
            },
            {
                id: 3,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim veritatis aliquam iusto consequatur amet nisi dolorum delectus esse error deleniti eligendi rem debitis, vel quod. Incidunt quae dolorum modi."
            },

        ]

        setTimeout(() => setMovies(moviesList), 1000) // mimic the delay
    }, [])
    
    return (
        <div>
            <h2>Movies</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map(movie => (
                            <tr key={movie.id}>
                                <td>
                                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                                </td>
                                <td>{movie.release_date}</td>
                                <td>{movie.runtime}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}