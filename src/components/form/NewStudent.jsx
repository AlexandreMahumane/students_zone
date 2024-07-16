import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const NewStudent = () => {
    const {setStudentName, setStudentDescription,handleAddStudent} = useContext(AppContext)
    const [isVisible, setIsVisible] = useState(true)


    const handleSetIsVisible = () =>{
        setIsVisible(!isVisible)
    }
    
    return ( 
        <>
        <button onClick={handleSetIsVisible} className='ml-full'>X</button>
        <form className='flex flex-col space-y-5 items-end'>
            <input placeholder="Name" 
                onChange={(event)=> setStudentName(event.target.value)}
                className='p-3 w-96 outline-none border-r-0 border-l-0 border-t-0 border-b-2'/>

            <input placeholder="Description" 
                onChange={(event)=> setStudentDescription(event.target.value)}
                className='p-3 w-96 outline-none border-r-0 border-l-0 border-t-0 border-b-2'/>
            
            <button onClick={handleAddStudent} className="w-fit h-10  text-white px-5 rounded-md bg-green-700">Send</button>
        </form>
        </>
     );
}
 
export default NewStudent;