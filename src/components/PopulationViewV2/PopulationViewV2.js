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
      // tickFormatter={(tick) => {
      //   if (tick !== 0) {
      //     return Math.round(Math.log10(tick) * 10);
      //   }
      //   return tick;
      // }}
      />
      <Tooltip
        formatter={(value, name, props) => {
          console.log("Value", value, name, props);
          return props.payload.actualPopulation;
        }}
      />
      <Legend />
      <Bar dataKey="population" fill="#8884d8" />
    </BarChart>
  );
};

export default PopulationViewV2;
