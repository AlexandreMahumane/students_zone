import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../context/AppContext"

const ListStudents = () => {

    const {dataFilter, setDataFilter,originalData, setOriginalData} = useContext(AppContext)
    const handleDeleteStudent = (name) =>{
        const index = dataFilter.findIndex(e => e.name == name)
        const deleteStudent = [...originalData]
        deleteStudent.splice(index, 1)
        setOriginalData(deleteStudent)
        setDataFilter(deleteStudent)
    }

    return(
        <ul className='text-center flex flex-col space-y-3 mt-3'>
        {dataFilter.map((e, index) => 
        
            <li key={index} className='flex justify-between p-2 border rounded-lg border-black'>
             <p>{e.name}</p>
                <div>
                    <Link  className='' 
                    to={`/studentInfo/${e.linkUrl}`}>  i </Link>
                    <button  onClick={()=>handleDeleteStudent(e.name)}>del</button> 
                </div>  
                </li>
         )}
        </ul>
    )
}

export default ListStudents