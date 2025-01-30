import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import projectsData from '../data/projects.json';
import curateImg from '../Assets/ProjectImgs/curate.png';

const images = {
  'curate.png': curateImg,
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
    <div className="container mx-auto px-6 pt-28">
      <img src={images[project.imgSrc]} alt={project.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="text-2xl">A {project.title}</p>
      <p className="text-lg">{project.description}</p>
    </div>
  );
}
