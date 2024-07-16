import Header from "../components/header/Header"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import NewStudent from "../components/form/NewStudent"
import SearchInput from "../components/form/SearchInput"
import ListStudents from "../components/list/ListStudents"

export const Students = () =>{


    const {dataFilter, setDataFilter,searchValue, formIsVisible, originalData,} = useContext(AppContext)



    useEffect(()=>{
       
    if(searchValue.trim() !== ''){
       const filter = originalData.filter(e => e.name.includes(searchValue))
        setDataFilter(filter)
    }else{
        setDataFilter(originalData)
    
}
           
    }, )
 
    return(
        <>
        <Header/>
        <div className='h-96 w-full flex items-center justify-center'>
        <div className='shadow-2xl p-5 w-fit '>
        {formIsVisible ? <NewStudent/> :
        <div>
        <SearchInput/>
            <div>
            {
                (dataFilter.length === 0 ) ? <p>Empty</p> : 
                <ListStudents />
                
            }
        </div>
            </div>
        }
        </div>
        </div>
        </>
    )
}