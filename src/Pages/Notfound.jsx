import { Link } from 'react-router-dom'
import img from '../Assets/simple.jpeg'


export default function Notfound() {
  return (
    <div className='section w-full relative pt-20'>
      <div className='text-5xl justify-center text-center p-[2rem] flex flex-col'>
        Sorry, This page does not exist.
        <Link to='/' className='text-blue-500 underline text-xl'>
          Go Back To HomePage.
        </Link>
      </div>
      <div className='w-full h-[30rem] justify-center items-center mx-10'>
        <img src={img} alt="notfd" />
      </div>
    </div>
  )
}

