import { XAxis, YAxis, Tooltip, Legend, Bar, BarChart } from "recharts";
import { useSelector } from "react-redux";
import { getPopulationChartData } from "../../model/selector";

// import css
import "./PopulationViewV2.css";

const PopulationViewV2 = () => {
  const chartData = useSelector(getPopulationChartData);
  return (
    <BarChart
      width={600}
      height={400}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis
        tickFormatter={(tick) => {
          if (tick !== 0) {
            return parseInt(Math.log(tick));
          }
          return tick;
        }}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="population" fill="#8884d8" />
    </BarChart>
  );
};

export default PopulationViewV2;
