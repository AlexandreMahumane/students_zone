import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useForm } from "react-hook-form";

const NewStudent = () => {
    const {setStudentName, setStudentDescription,handleAddStudent} = useContext(AppContext)
    const [isVisible, setIsVisible] = useState(true)
    const errorStyles = { color: "red", fontSize: "12px", lineHeight: "18px" }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()



    const handleSetIsVisible = () =>{
        setIsVisible(!isVisible)
    }
    const handleOnSubmit = (data) =>{
        handleAddStudent(data)
    }
    
    return ( 
        <>
        <button onClick={handleSetIsVisible} className='mr-full'>X</button>
        <form noValidate onSubmit={handleSubmit(handleOnSubmit )} className='flex flex-col space-y-5 items-end'>

            
            <input placeholder="Name" 
                onChange={(event)=> setStudentName(event.target.value)}
                {...register("name", {
                    required: "O nome é obrigatório!",
                    minLength: {
                      value: 2,
                      message: "O nome deve ter no minimo 2 letras.",
                    },
                  })}
                className='p-3 w-96 outline-none border-r-0 border-l-0 border-t-0 border-b-2'/>
                 {errors.name && <p style={errorStyles}>{errors.name.message}</p>}


            <input placeholder="Description" 
             {...register("description", {
                required: "A descricao é obrigatória!",
                minLength: {
                  value: 2,
                  message: "A descricao deve ter no minimo 2 letras.",
                },
              })}
                onChange={(event)=> setStudentDescription(event.target.value)}
                className='p-3 w-96 outline-none border-r-0 border-l-0 border-t-0 border-b-2'/>
                {errors.name && <p style={errorStyles}>{errors.Description.message}</p>}
            
            <button  className="w-fit h-10  text-white px-5 rounded-md bg-green-700">Send</button>
        </form>
        </>
     );
}
 
export default NewStudent;