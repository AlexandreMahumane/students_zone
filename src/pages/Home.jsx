import student from '../assets/student.png'

const Home = () => {
    return ( 
    <>
    <Header/> 
    <div className="flex">
        <div className='mt-32 w-1/2 ml-24 flex justify-end'>
            <div className='w-64'>
            <h2 className='text-4xl font-bold'>Students Zone</h2>
            <p>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Error quod dolorem facere ullam quae natus, rem quas!
                 Autem deserunt, 
                sed exercitationem veritatis
                 laboriosam ipsam adipisci aliquam expedita? Pariatur, quam error.</p>
            </div>
        </div>
        <div className=' w-1/2'>
            <img src={student} alt="" />
        </div>
    </div> 
    </>);
}
 
export default Home;