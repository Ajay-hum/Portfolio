import { AiOutlineDownload } from "react-icons/ai";
import CV from "../Assets/A Jay's CV.pdf";

export default function DownloadCV() {
  return (
    <section className="pt-20 bg-white">
      <div className="w-full flex flex-col justify-center items-center mt-20 md:mt-28">
      <h2 className="text-3xl font-bold">Download My CV</h2>
        <a 
          href={CV} 
          download 
          className="mt-4 bg-blue-600 inline-flex text-white py-2 px-2 rounded gap-3"
        >
          <AiOutlineDownload className="mt-1"/>
          Download CV
        </a>
      </div>
    </section>
  );
};
