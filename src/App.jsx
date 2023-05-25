import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "./components/Alert";


export default function App() {
  // if the token is "", then the user is not logged in
  const [jwtToken, setJwtToken] = useState("")
  const [alertInfo, setAlertInfo] = useState({
    message: "",
    className: "d-none"
  })
  const navigate = useNavigate();

  const handleLogout = () => {
    setJwtToken("")
    navigate("/login")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Go watch a movie</h1>
        </div>
        <div className="col text-end">
          <Link to="/login">
            {
              jwtToken === "" 
              ?
                <span className="badge bg-success">Login</span>
              :
                <span className="badge bg-danger" onClick={handleLogout}>Logout</span>
              }
          </Link>
        </div>
        <hr className="mb-3"/>
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to="/movies" className="list-group-item list-group-item-action">Movies</Link>
              <Link to="/genres" className="list-group-item list-group-item-action">Genres</Link>
              {
                jwtToken !== "" &&
                <>
                  <Link to="/admin/movie/0" className="list-group-item list-group-item-action">Add a movie</Link>
                  <Link to="/manage-catalogue" className="list-group-item list-group-item-action">Manage Catalogue</Link>
                  <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
                </> 
              }
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert alertInfo={alertInfo} />
          <Outlet context={{
            jwtToken, setJwtToken, alertInfo, setAlertInfo
          }}/>
        </div>
      </div>
    </div>
  )
}
