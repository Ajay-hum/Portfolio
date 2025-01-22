
import profile from '../Assets/profile photo.jpg';
import SkillHistogram from '../Components/SkillHistogram';

export default function About() {
  return (
    <div className="pt-20">
      <div className="m-10 md:m-14 md:flex">
        <div className="flex flex-col gap-3 p-2 xl:px-16 md:pt-16 md:w-1/2 h-64">
          <h3 className="md:text-4xl font-bold text-3xl">About Me.</h3>
          <p className="md:text-2xl text-xl">
            I am a Front-end developer based in Lagos Nigeria.
          </p>
          <p className="md:text-lg text-base">
            Since 2023, I&apos;ve enjoyed turning complex problems into simple, 
            beautiful and intuitive designs. When I&apos;m not pushing pixels, 
            you&apos;ll find me cooking, gardening or working out in the park.
          </p>
        </div>
        <div className="md:w-1/2 md:h-[30rem] lg:p-4 lg:mr-14 flex items-stretch">
          <img src={profile} alt="picture" className="h-full w-full object-cover" />
        </div>
      </div>
      <hr className='flex-grow border-t border-gray-400 mb-8 mt-1'/>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <SkillHistogram />
      </div>

    </div>
  )
}
