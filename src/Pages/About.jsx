import profile from '../Assets/profile photo.jpg';
import SkillHistogram from '../Components/SkillHistogram';
import SkillPieChart from '../Components/SkillPiechart';

export default function About() {
  return (
    <div className="pt-20">
      <div className="m-10 md:m-14 md:flex">
        <div className="flex flex-col gap-3 p-2 xl:px-16 md:pt-16 md:w-1/2 h-64">
          <h3 className="md:text-4xl font-bold text-3xl">About Me.</h3>
          <p className="md:text-2xl text-xl">
            Frontend Developer - Building Modern, Scalable, and Intuitive Web Applications
          </p>
          <p className="md:text-lg text-base">
            Since 2023, I&apos;ve enjoyed turning complex problems into simple, 
            beautiful and intuitive designs. When I&apos;m not pushing pixels, 
            you&apos;ll find me cooking, gardening or working out in the park.
          </p>
        </div>
        <div className="md:w-1/2 md:h-[30rem] lg:p-4 lg:mr-14 max-sm:mt-6 flex items-stretch">
          <img src={profile} alt="picture" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="bg-gray-100 p-10 rounded-lg shadow-md flex justify-center mb-16">
        {/* Show BarChart only on large screens */}
        <div className="hidden md:block w-full lg:px-60">
          <SkillHistogram />
        </div>
        {/* Show PieChart only on small screens */}
        <div className="block md:hidden w-full p-18">
          <SkillPieChart />
        </div>
      </div>
    </div>
  );
}

