import { useState } from "react";
import { AppContext } from "./AppContext";
import { data } from "../data";


const Provider = ({children}) => {

    const [formIsVisible, setFormIsVisible] = useState(false)
    const [studentDescription, setStudentDescription] = useState('')
    const [studentName, setStudentName] = useState('')
    const [originalData, setOriginalData] = useState(data)
    const [searchValue, setSearchValue] = useState('')
    const [dataFilter, setDataFilter] = useState(data)
    const [message, setMessage]= useState([])

    
    const handleAddStudent = (event)=>{
        event.preventDefault()
        if(studentName.length && studentDescription.length !== 0){
            const newStudent = {
                linkUrl: studentName,
                name: studentName,
                description: studentDescription
            }

            const updateData = [...originalData, newStudent]
            setOriginalData(updateData)
            
            setFormIsVisible(!formIsVisible)
        }
        setFormIsVisible(!formIsVisible)
    }


    const value ={
        formIsVisible, 
        setFormIsVisible,
        handleAddStudent,
        studentName, 
        setStudentName,
        studentDescription, 
        setStudentDescription,
        originalData, 
        setOriginalData,
        searchValue, 
        setSearchValue,
        dataFilter, 
        setDataFilter,
        message, 
        setMessage
    }
    return ( 
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
     );
}
 
export default Provider;