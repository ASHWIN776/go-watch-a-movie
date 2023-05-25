import { useState } from "react"
import Input from "./form/Input";
import { redirect, useNavigate, useOutletContext } from "react-router-dom";

export default function Login(){
    const {setJwtToken, setAlertInfo} = useOutletContext()
    const [loginCreds, setLoginCreds] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
        
    const handleSubmit = (e) => {
        e.preventDefault();

        if(loginCreds.email === "admin@admin.com"){
            setJwtToken(loginCreds.email)
            setAlertInfo({
                message: "Successfully Logged In",
                className: "alert-success"
            })
            navigate("/")
        } else {
            setAlertInfo({
                message: "Invalid Credentials",
                className: "alert-danger"
            })
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        
        setLoginCreds(prevCreds => ({
            ...prevCreds,
            [name] : value
        }))
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form action="" onSubmit={handleSubmit}>
                <Input 
                    title="Email Address"
                    type="email"
                    className="form-control"
                    name="email"
                    autocomplete="email-new"
                    onChange={handleChange}
                />
                <Input 
                    title="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    autocomplete="password-new"
                    onChange={handleChange}
                />
                <hr />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}