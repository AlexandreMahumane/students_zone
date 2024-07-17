import student from '../../public/img.png';
import Header from '../components/header/Header';

const Home = () => {
    return ( 
        <>
            <Header/> 
            <div className="flex  items-center justify-between px-8 py-16">
                
                <div className='ml-40 w-1/3 h-2/3'>
                    <img src={student} alt="Student" className="rounded-lg shadow-lg" />
                </div>
                <div className='w-1/2 ml-16'>
                    <div className='max-w-lg'>
                        <h2 className='text-4xl font-bold text-gray-800 mb-4'>Students Zone</h2>
                        <p className='text-gray-700 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Error quod dolorem facere ullam quae natus, rem quas!
                            Autem deserunt, sed exercitationem veritatis laboriosam ipsam
                            adipisci aliquam expedita? Pariatur, quam error.
                        </p>
                    </div>
                </div>
            </div> 
        </>
    );
}
 
export default Home;
