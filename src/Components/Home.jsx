import { useNavigate } from "react-router-dom"
import {toast, Zoom} from "react-toastify"

export function Home() {
    const navigate = useNavigate()
    const User = localStorage.getItem("User")

    const GoodBye = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }
    const LogOut = (e) => {
        e.preventDefault()
        const LogingOut = async () => {
            try {
                const LogOutProcess = await fetch("https://testing-backend-3yhr.onrender.com/back/logout", {
                    method: "POST",
                    credentials: "include"
                })
                if(LogOutProcess.ok){
                    GoodBye(`See you soon Dear ${User}`)
                    navigate("/")
                }
            } catch (error) {
                console.log(error)
            }
        }
        LogingOut()
    }

    return (
        <>
            <div className="home">
                <h1>Hi {User}, hope you are doing well !</h1>
                <h2>You are on the homepage.</h2>
                <button onClick={LogOut} id="log-out" type="button">Log out</button>
                <div className="content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde alias earum optio. Et odio distinctio, facere repellat quisquam fugiat sapiente labore quia velit eos, repudiandae voluptate eum! Hic, id temporibus.
                Similique, repellendus? Eum, nobis harum facere iste minima aspernatur error fuga, voluptatibus nostrum eligendi itaque esse voluptatum velit rerum repellendus deleniti officiis saepe iusto officia aliquam tenetur consequatur. Saepe, facilis.
                Dolorem aspernatur exercitationem non sapiente magni asperiores. Neque autem exercitationem rerum iste in perspiciatis reprehenderit eveniet doloribus aliquid ex ullam, corporis accusantium, fugit commodi dicta explicabo corrupti rem eos at.
                Autem nobis neque quam optio, delectus voluptas dicta rem inventore commodi numquam pariatur dolores, eaque nostrum quisquam accusantium quo vel cupiditate id doloribus maiores corporis beatae vitae eligendi sit. Earum!
                Libero, ipsum nesciunt accusamus impedit, harum cum alias quisquam consequatur repellendus dolore exercitationem voluptate odit perferendis necessitatibus modi in dignissimos soluta consequuntur sed maiores neque? Aut in cumque consequatur facilis.
                Fuga, vitae expedita! Hic dolorum mollitia cumque minus nulla eos nobis, necessitatibus facilis amet, consectetur eveniet beatae ullam eaque! Sapiente fuga iure impedit repudiandae quae aperiam, reiciendis tempore quia doloremque!
                Incidunt est cupiditate blanditiis, ea vero nostrum neque adipisci asperiores necessitatibus inventore fugit mollitia deleniti iste cum debitis illum eius, exercitationem assumenda nesciunt. Illo, esse! Praesentium obcaecati quo nihil dolore.
                Rem maxime laudantium veritatis. Molestiae debitis, officiis mollitia error laboriosam nisi veritatis culpa, at hic iure ipsam impedit. Velit, debitis adipisci praesentium iste quos doloribus ut omnis accusantium eos dolores.
                Distinctio minus quod tenetur molestias similique nam pariatur deleniti eaque iste, nobis, consectetur id delectus sed ad sunt ipsa porro rem praesentium accusantium excepturi alias quibusdam facilis totam. Ad, illum?</p>
                </div>
            </div>
            <div className="faq">
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <img height={300} src="https://github.com/RID-Techs/My-images/blob/main/Faq.jpg?raw=true " alt="Image" />
                <a id="doc" href="https://github.com/RID-Techs/My-images/blob/main/parthia.pdf?raw=true" rel="noopener noreferrer" download={`Prince of Parthia.pdf`}>Parthia Doc</a>
            </div>
        </>
    )
}