import TicketImg from "../assets/movie_tickets.jpg"

export default function Home(){
    return (
        <>
            <div className="text-center">
                <h2>Find a movie to watch tonight</h2>
                <hr />
                <img src={TicketImg} alt="movie ticket pic" />
            </div>
        </>
    )
}