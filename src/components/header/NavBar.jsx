import { Link } from "react-router-dom"

export const NavBar = () =>{
    return(
        <nav className='flex space-x-3'>
            <Link to={'/'} className="hover:text-blue-500" >Home</Link>
            <Link to={'/students'} className="hover:text-blue-500">students</Link>
            <Link to={'/contact'} className="hover:text-blue-500">contact</Link>
           
        </nav>
    )
}