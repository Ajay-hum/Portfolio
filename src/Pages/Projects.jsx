import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos"
import "aos/dist/aos.css"

import curateImg from "../Assets/ProjectImgs/crnt.png";
import bookImg from "../Assets/ProjectImgs/onlbks.png"
import travImg from "../Assets/ProjectImgs/travel.png"
import endeImg from "../Assets/ProjectImgs/encdec.png"
import blwImg from "../Assets/ProjectImgs/blogweb.png"



const images = {
  "crnt.png": curateImg,
  "onlbks.png": bookImg,
  "travel.png": travImg,
  "encdec.png": endeImg,
  "blogweb.png": blwImg,
};

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    fetch(`${baseUrl}data.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
      
      AOS.init({
        duration: 1000,
        once: false
      })
  },[]);

  return (
    <div className='md:pt-20 pt-32 bg-white'>
      <div data-aos="fade-right" data-aos-duration="800" className='flex flex-col gap-3 p-2 xl:px-16 md:pt-16 shadow-md md:h-72 h-40 w-full'>
        <h1 className='lg:text-5xl md:text-4xl font-bold text-3xl ml-10'>Portfolio.</h1>
        <p className='lg:text-2xl md:text-xl text-lg ml-10'>Check out Projects I have worked on.</p>
      </div>
      <div className='px-7 md:px-20 gap-4 items-center justify-between grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {data.map(({ id, imgSrc, name, title, description }) => {
          const imagePath = images[imgSrc]; 

          return (
            <div key={id} data-aos="fade-up" className='my-3 overflow-hidden bg-white rounded-xl border-black border-2'>
              <div className='bg-gray-500 m-6 h-52 relative overflow-hidden group'>
                <img src={imagePath} alt={name} className='h-full w-full object-cover' />
                <div className="absolute flex items-center text-center over p-0 justify-center flex-col w-full bottom-0 h-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:h-full">
                  <h3 className='text-white font-semibold text-xl'>{name}</h3>
                  <p className='text-white text-lg'>({title})</p>
                </div>
              </div>
              <div className='p-4'>
                <p className='text-md text-black'>{description.slice(0, 100)}...</p>
                {/* Add Link to project details */}
                <Link to={`/projectview/${id}`} className="text-blue-500 mt-2 block font-semibold">
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

