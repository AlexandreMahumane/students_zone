import { useContext, useState } from "react"
import Header from "../components/header/Header"
import ContactForm from "../components/form/Contact"
import { AppContext } from "../context/AppContext"

export const Contact = () =>{
    const [isVisible, setIsVisible] = useState(true)
    const {studentName, message} = useContext(AppContext)

    const handleSetIsVisible = () =>{
        setIsVisible(!isVisible)
    }
    
    return(
        <>
        <Header/>
        <div className='h-96 w-full flex items-center justify-center'>
       {(isVisible) ? 
       <div className='shadow-2xl p-5 w-fit '>
            <ContactForm handle={handleSetIsVisible}/>
        </div>  :

        <div className="h-64 w-64 p-3 shadow-xl">
            <div className='w-full text-end'><button onClick={handleSetIsVisible}>X</button></div>
            <p>Name: <span>{studentName}</span></p>
            
            <p>Age: <span>{message}</span></p>
            
        </div>
         
        }
        </div>
        </>
    )
} 