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
  { skill: 'HTML', level: 90, color: 'white' },
  { skill: 'CSS', level: 85, color: 'white' },
  { skill: 'JavaScript', level: 80, color: 'white' },
  { skill: 'React', level: 75, color: 'white' },
  { skill: 'TailwindCSS', level: 70, color: 'white' },
];

export default function SkillHistogram() {
  return (
    <div style={{ width: '50%', height: 400 }}>
      <h2 className="text-center text-2xl font-bold mb-4 text-black">Skill Levels</h2>
      <ResponsiveContainer>
        <BarChart data={skillData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="level" fill="color" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
