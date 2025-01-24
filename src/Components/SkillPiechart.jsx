import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
  
//   const skillData = [
//     { skill: 'HTML', level: 90 },
//     { skill: 'CSS', level: 75 },
//     { skill: 'JavaScript', level: 90 },
//     { skill: 'React.js', level: 95 },
//     { skill: 'TailwindCSS', level: 80 },
//   ];

  const skillData = [
    { skill: 'HTML', level: 25 },
    { skill: 'CSS', level: 10 },
    { skill: 'JavaScript', level: 25 },
    { skill: 'React.js', level: 25 },
    { skill: 'TailwindCSS', level: 15 },
  ];
  
  // Colors for each skill
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4567'];
  
  // Custom label function to display skill names and levels inside the slices
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
      >
        {`${name}`}
      </text>
    );
  };
  
  export default function SkillPieChart() {
    return (
      <div style={{ width: '100%', height: 400 }}>
        <h2 className="text-center text-2xl font-bold mb-4 text-black">My Skill Levels</h2>
        <ResponsiveContainer>
          <PieChart>
          <Pie
            data={skillData}
            dataKey="level"
            nameKey="skill"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={renderCustomizedLabel}
            stroke="none" // Removes the stroke
          >
            {skillData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  