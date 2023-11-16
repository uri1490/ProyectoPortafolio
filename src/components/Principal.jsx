import { Link, Outlet } from "react-router-dom"

export  const Principal = ()=>{
    return <>
    
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>        
                </ul>
            </div>
            
        </nav>
        <Outlet></Outlet>
    </>
}