import { Link } from 'react-router-dom'


export default function Notfound() {
  return (
    <div className='w-full relative'>This page does not exist, <Link to='/'>Go Back To Home.</Link></div>
  )
}

