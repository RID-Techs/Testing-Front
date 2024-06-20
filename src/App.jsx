import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary";
import {Error} from "./Errors/Error"
import {ErrorPage} from "./Errors/ErrorPage"
import {LoadHomePage} from "./Components/Prefetch"
import { SignUp } from "./Components/SignUp";
import { Login } from "./Components/SignIn";
import { Home } from "./Components/Home";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary fallback={Error}>
          <SignUp/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/login",
      element: (
        <ErrorBoundary fallback={Error}>
          <Login/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/home",
      loader: LoadHomePage,
      element: (
        <ErrorBoundary fallback={Error}>
          <Home/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  )
}

export default App
