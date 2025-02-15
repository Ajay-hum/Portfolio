import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import profile from '../Assets/profile photo.jpg'
import ContactForm from "../Components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-20 md:px-8">
      <div className="m-8 md:m-14 md:flex">
        <div className="flex flex-col gap-3 p-2 xl:px-16 md:pt-16 md:w-1/2 md:h-[30rem]">
          <h1 className="lg:text-6xl md:text-4xl font-bold text-3xl">contact.</h1>
          <p className="lg:text-3xl md:text-2xl text-lg">Get with me via social media or send me an email.</p>
          <div className="flex lg:gap-32 md:gap-20 gap-10 p-4"> {/* I added flex and gap for spacing */}
            <a href="https://www.linkedin.com/in/justus-asogwa-726427293" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ImLinkedin className="hover:text-blue-400 text-4xl sm:text-3xl md:text-4xl lg:text-5xl" />
              <p className="ml-2 font-semibold text-lg">LinkedIn</p>
            </a>
            <a href="https://github.com/Ajay-hum" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaGithub className="hover:text-blue-400 text-4xl sm:text-3xl md:text-4xl lg:text-5xl" />
              <p className="ml-2 font-semibold text-lg">Github</p>
            </a>
          </div>
          <div className="flex lg:gap-32 md:gap-20 gap-10 p-4">
            <a href="https://twitter.com/Gentle_soul_26" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <BsTwitterX className="hover:text-blue-400 text-4xl sm:text-3xl md:text-4xl lg:text-5xl" />
              <p className="ml-2 font-semibold text-lg">Twitter</p>
            </a>
            <a href="https://instagram.com/gentle_soul_26" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <AiFillInstagram className="hover:text-blue-400 text-4xl sm:text-3xl md:text-4xl lg:text-5xl" />
              <p className="ml-2 font-semibold text-lg">Instagram</p>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 lg:p-4 lg:mr-2 max-sm:mt-6 flex md:h-[30rem] items-stretch">
          <img src={profile} alt="photo" className="w-full h-full object-cover items items-stretch"/>
        </div>
      </div>
      <div className="mt-10 h-1/4 md:h-1/3 flex items-center justify-center w-full shadow-xl">
        <ContactForm />
      </div>
    </div>
  );
}












