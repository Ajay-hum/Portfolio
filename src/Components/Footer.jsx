import { Link } from 'react-router-dom'

const footerlinks = [
  { link: "./about", text: "About" },
  { link: "/projects", text: "Projects" },
  { link: "/downloadcv", text: "Resume" },
  { link: "./contact", text: "Contact" }
]

export default function Footer() {
  return (
    <footer className="relative items-center bg-black gap-4 p-4 flex-col flex md:flex-row md:justify-between md:px-12 md:py-8 text-white">
      <div>
        <p>&copy; {new Date().getFullYear()} Justus Asogwa</p>
      </div>
      <div>
        <ul className='flex space-x-8'>
            {footerlinks.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className='flex hover:text-blue-400 underline'>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
      </div>
    </footer>
    // <div></div>
  )
}