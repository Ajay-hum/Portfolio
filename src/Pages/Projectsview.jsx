import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import curateImg from "../Assets/ProjectImgs/crnt.png";
import bookImg from "../Assets/ProjectImgs/onlbks.png"
import travImg from "../Assets/ProjectImgs/travel.png"

const images = {
  "crnt.png": curateImg,
  "onlbks.png": bookImg,
  "travel.png": travImg,
};

export default function Projectsview() {
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

  const { projectId } = useParams();
  const project = data.find((p) => p.id === Number(projectId));

  if (!project) {
    return <div className="text-center text-red-500">Project not found.</div>;
  }

  return (
    <div className="pt-20 pb-10">
      <div className='flex flex-col justify-center items-center gap-2 m-7 md:m-10'>
        <div className="md:w-2/3 lg:w-2/4 md:h-96 lg:my-6 pb-12 items-start">
          <img src={images[project.imgSrc]} alt={project.name} className="w-full md:h-[25rem] h-96 object-cover rounded-lg mb-4" />
        </div>
        <div className='flex flex-col gap-3 md:text-start sm:text-center md:w-4/5 w-full mt-4 md:mt-12'>
          <h1 className="text-2xl lg:text-3xl font-semibold underline text-center">{project.name}</h1>
          <p className="text-2xl text-center">{project.title}</p>
          <p className='text-xl text-center'><Link to={project.link} className='text-xl underline text-blue-500'>View Project online</Link></p>
          <p className="md:text-xl leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
