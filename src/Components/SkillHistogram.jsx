
import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const skillData = [
  { skill: 'HTML', level: 90 },
  { skill: 'CSS', level: 65 },
  { skill: 'JavaScript', level: 90 },
  { skill: 'React', level: 95 },
  { skill: 'TailwindCSS', level: 80 },
];

export default function SkillHistogram() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 className="text-center text-2xl font-bold mb-4 text-black">My Skill Levels</h2>
      <ResponsiveContainer>
        <BarChart data={skillData} margin={{ top: 20, right: 40, left: 30, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="level" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
