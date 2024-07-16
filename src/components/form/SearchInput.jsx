import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

const SearchInput = () =>{

    const {searchValue, setSearchValue, handleAddStudent} = useContext(AppContext)
    const handleSearchStudent = (event) =>{
        setSearchValue(event.target.value)
    }
    return(
        <form className='space-x-3'>
        <input type="search" placeholder="Search student"
            onChange={handleSearchStudent} 
            value={searchValue}
            className='p-3 w-96 outline-none border  rounded-lg border-gray-400'/>
        <button onClick={handleAddStudent} className='w-7 h-7 rounded-full bg-white'>+</button>    
        </form>
    )
}

export default SearchInput