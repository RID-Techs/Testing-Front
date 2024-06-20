import { useNavigate } from "react-router-dom"
import "../Components/Up.css"
import {toast, Zoom} from "react-toastify"
import { useEffect } from "react"

export function SignUp () {
    const navigate = useNavigate()
    
    const User = localStorage.getItem("User")
    useEffect(() => {
        if(User) {
            navigate("/login")
        }
    }, [navigate, User])

    const FillAllInputs = () => {
        toast.warn("All fields are mandatory", {
            position: "top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }
    const SignInNow = () => {
        toast.success("You can log in now !", {
            position: "top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }

    const SignUpButton = (e) => {
        e.preventDefault()
        const username = document.getElementById("Username")
        const password = document.getElementById("Password")

        if(username.value === "" || password.value === ""){
            FillAllInputs()
        } else {
            const SigningUp = async () => {
                try {
                    const createUser = await fetch("https://testing-backend-3yhr.onrender.com/back/signup", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username.value,
                            password: password.value
                        })
                    })
                    const res = await createUser.json()
                    if(createUser.ok){
                        SignInNow()
                        localStorage.setItem("User", username.value)
                        console.log(res.SignUpMessage)
                        navigate("/login")
                    } else{
                        console.log(res.SignUpError)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            SigningUp()
        }
    }

    return (
        <>
                <div className="Welcome">
                    <h1>Welcome, Sign up now !</h1>
                </div>
            <div className="register-content" style={{height: "100vh"}}>
                <div className="register-form">
                    <form>
                        <div className="input-holder">
                            <label id="label-1" htmlFor="Username">Username : </label>
                            <input id="Username" type="text" placeholder="Username" autoComplete="none"/>
                        </div>
                        <div className="input-holder">
                            <label id="label-2" htmlFor="Password">Password : </label>
                            <input id="Password" type="password" placeholder="Password"/>
                        </div>
                        <div className="signing-button-holder">
                            <button onClick={SignUpButton} id="signing-button" type="button">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}