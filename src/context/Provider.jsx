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

    
    const handleAddStudent = (data)=>{
       
        console.log(data)
        if(data.name && data.description){
            const newStudent = {
                linkUrl: data.name,
                name: data.name,
                description: data.description
            }
            console.log("new ", newStudent)
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