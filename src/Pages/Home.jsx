import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import images for use
import profile from '../Assets/profile photo.jpg';
import img from '../Assets/future.jpeg';
// Imported project images here
import curateImg from '../Assets/ProjectImgs/curate.png';

const images = {
  'curate.png': curateImg,
  // Add more images as needed
};

export default function Home() {
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
  }, []);

  return (
    <section className="z-50 flex-row justify-center items-center gap-12 pt-20 pb-16">
      <div className="flex justify-center items-center">
        <img 
          src={img} 
          alt="Example" 
          className="h-72 md:h-96 w-full" 
        />
        <img
          src={profile}
          alt="Small Photo"
          className="absolute z-100 left-3/4 transform -translate-x-1/2 rounded-full border-white shadow-lg max-480px:bottom-52 max-600px:bottom-52 sm:bottom-52 w-40 h-40 md:bottom-[90px] md:w-80 md:h-80 border-4 "
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center mt-20 md:mt-28">
        <div className="flex flex-col gap-6 text-center w-3/4 mt-4 md:mt-8">
          <h1 className="section text-4xl lg:text-5xl font-extrabold">Bonjour!</h1>
          <p className="md:text-xl leading-relaxed">
            I&apos;m Justus - A Frontend developer based in Lagos, Nigeria. With a strong foundation 
            in modern web technologies and a keen eye for design, I specialize in building responsive, 
            user-friendly, and visually appealing web interfaces. With every line of code, I transform innovative 
            ideas into seamless digital experiences that delight users and solve real-world problems.
          </p>
        </div>
        <div className='mt-4 md:mt-10'>
          <button className='bg-black p-1 rounded-lg border-white border-2'>
            <Link to="./about" className='section text-1xl text-white'>Know more about Me</Link>
          </button>
        </div>
      </div>
      <div className="flex items-center mt-14">
        <hr className="flex-grow border-t border-gray-400 ml-14 md:ml-32" />
        <span className="mx-4">MY LATEST WORK</span>
        <hr className="flex-grow border-t border-gray-400 mr-14 md:mr-32" />
      </div>
      <div className='p-10 md:px-20 gap-4 items-center justify-between grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {
          data.map(({ imgSrc, name, title, description }, index) => {
            const imagePath = images[imgSrc]; // To  Get the correct image path

            return (
              <div key={index} className='my-3 overflow-hidden bg-white rounded-xl border-black border-2'>
                <div className='bg-gray-500 m-6 h-52 relative overflow-hidden group'>
                  <img src={imagePath} alt={name} className='h-full w-full object-cover'/>

                  <div className="absolute flex items-center text-center over p-0 justify-center flex-col w-full bottom-0 h-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:h-full">
                    <h3 className='text-white font-semibold'>{name}</h3>
                    <p className='text-white text-lg'>({title})</p>
                  </div>
                </div>
                <div className='p-4'>
                  {/* <div className="justify-between">
                    <h6 className='text-base text-black font-semibold'>
                      
                    </h6>
                  </div> */}

                  <p className='text-xs text-black'>
                    {description}
                  </p>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}