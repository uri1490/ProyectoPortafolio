import { Link } from "react-router-dom"

export  const Principal = ()=>{
    return <>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>        
            </ul>
        </nav>
    </div>
    </>
}