import { NavBar } from "./NavBar"

const Header = () => {
    return ( 
        <header className="flex justify-between shadow-sm p-4 h-16">
        <div>
            <h1>Logo</h1>
        </div>
    <NavBar/>
    </header>
     );
}
 
export default Header;