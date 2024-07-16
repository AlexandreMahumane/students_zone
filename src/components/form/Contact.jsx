import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

const ContactForm = ({handle}) =>{

    const {setStudentName, setMessage} = useContext(AppContext)


    return(
        <form className='flex flex-col space-y-5 items-end'>
        <input placeholder="Name" 
        onChange={(event)=> setStudentName(event.target.value)}
            className='p-3 w-96 outline-none border-r-0 border-l-0 border-t-0 border-b-2'/>

        <input placeholder="Message" 
            onChange={(event)=> setMessage(event.target.value)}
            className='p-3 w-96 outline-none border-r-0 border-l-0 border-t-0 border-b-2'/>
        
        <button onClick={handle} className="w-fit h-10  text-white px-5 rounded-md bg-green-700">Send</button>
        </form>
    )
}

export default ContactForm