// components/DownloadCV.jsx
import CV from '../Assets/ASOGWA JUSTUS CHIMEREMUEZE CV.pdf';

export default function DownloadCV() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold">Download My CV</h2>
      <a 
        href={CV} 
        download 
        className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded"
      >
        Download CV
      </a>
    </section>
  );
};
