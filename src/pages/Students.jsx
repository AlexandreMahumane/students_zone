import Header from "../components/header/Header"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import NewStudent from "../components/form/NewStudent"
import SearchInput from "../components/form/SearchInput"
import ListStudents from "../components/list/ListStudents"
import Footer from "../components/footer/Footer"

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

  <Header />
  <div className='h-[47rem] flex items-center justify-center'>
    <div className='shadow-2xl p-5 max-w-lg w-full'>
      {formIsVisible ? (
        <NewStudent />
      ) : (
        <div>
          <SearchInput />
          <div>
            {dataFilter.length === 0 ? (
              <p className='text-center mt-4'>Nenhum estudante encontrado.</p>
            ) : (
              <ListStudents />
            )}
          </div>
        </div>
      )}
    </div>
  </div>
  <Footer/>
</>

    )
}