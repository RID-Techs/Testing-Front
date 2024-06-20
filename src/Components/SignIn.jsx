import { useNavigate } from "react-router-dom"
import "../Components/Up.css"
import {toast, Zoom} from "react-toastify"

export function Login () {
    const navigate = useNavigate()

    const User = localStorage.getItem("User")

    const FillAllInputs = () => {
        toast.warn("All fields are mandatory", {
            position: "top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }
    const Welcome = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }
    const ErrorMes = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }
    
    const SignInButton = (e) => {
        e.preventDefault()
        const username = document.getElementById("Username")
        const password = document.getElementById("Password")

        if(username.value === "" || password.value === ""){
            FillAllInputs()
        } else {
            const Login = async () => {
                try {
                    const CheckUser = await fetch("https://testing-backend-3yhr.onrender.com/back/login", {
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
                    const res = await CheckUser.json()
                    if(CheckUser.ok){
                        Welcome(`Welcome ${username.value}`)
                        console.log(res.Welcome)
                        navigate("/home")
                    } else{
                        const NoUser = res.NoSuchUser
                        const WrongPassword = res.WrongPassword
                        const loginError = res.SignInError
                        if(NoUser){
                            ErrorMes(NoUser)
                        } else if (WrongPassword){
                            ErrorMes(WrongPassword)
                        } else if(loginError){
                            ErrorMes(loginError)
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            Login()
        }
    }

    return (
        <>
                <div className="Welcome">
                    <h1>Welcome {User}, Log in now !</h1>
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
                            <button onClick={SignInButton} id="signing-button" type="button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}