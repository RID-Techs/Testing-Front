
export async function LoadHomePage () {
    
    const GetHomePage = async(retryCount = 0) => {
        try {
            const HomePage = await fetch("https://testing-backend-3yhr.onrender.com/back/home", {
            method: "GET",
            credentials: "include"
          })

          if(HomePage.status === 401 && retryCount < 1){
            const RefreshedToken = await GetNewToken()
            if(RefreshedToken){
                return await GetHomePage(retryCount + 1)
            }
          }

          const Home = await HomePage.json()
          console.log(Home)
          return Home;
          } catch (error) {
            console.log("Error on the Homepage :", error)
            return null;
          }
    }

    const GetNewToken = async() => {
        try {
          const NewToken = await fetch("https://testing-backend-3yhr.onrender.com/back/refreshtoken", {
            method: "POST",
            credentials: "include"
          })
          
            if(NewToken.status === 403){
              alert("Hi, your Session is over. Please, Login Again")
              window.location.href = "/"
          }
          
          const newTokenAnswer = await NewToken.json()
          return newTokenAnswer
        } catch (error) {
          console.log("Error while getting a new Token :", error)
          return null
        }
      }

    return await GetHomePage()
}