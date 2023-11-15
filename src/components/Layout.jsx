import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Error } from "./Error"
import { Principal } from "./Principal"
import { Proyects } from "./Projects"
/* export const Layout=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home></Home>} path="/"></Route>
                    <Route element={<About></About>} path="About"></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
} */
export const Layout = createBrowserRouter([
    {
        path:"/",
        element:<Principal/>,
        errorElement:<Error></Error>
    },    
    {
        path:"About",
        element:<About/>,        
    },
    {
        path:"Proyects",
        element:<Proyects/>,       
    },
])