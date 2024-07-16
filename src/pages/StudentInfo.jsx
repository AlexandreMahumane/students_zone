import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import { data } from "../data";

const StudentInfo = () => {
    const {user} = useParams()

    const student = data.filter(e => e.linkUrl == user)
    console.log(student)
    return ( 
        <>
        <Header/>
        <div className='h-96 w-full flex items-center justify-center'>
        <div className="h-64 w-64 p-3 shadow-2xl">
            {student.map(e => 
            <div key={e.id}>
            <p>Name: {e.name}</p>
            <p>Age: {e.description}</p>
            </div>
            )}
        </div>
        </div>
        </>
     );
}
 
export default StudentInfo;