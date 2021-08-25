import { XAxis, YAxis, Tooltip, Legend, Bar, BarChart } from "recharts";
import { useSelector } from "react-redux";
import { getPopulationChartData } from "../../model/selector";

// import css
import "./PopulationViewV2.css";

const PopulationViewV2 = () => {
  const chartData = useSelector(getPopulationChartData);
  return (
    <>
      {chartData && !!chartData.length && (
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
          <YAxis />
          <Tooltip
            formatter={(value, name, props) => {
              return props.payload.actualPopulation;
            }}
          />
          <Legend />
          <Bar dataKey="population" fill="#8884d8" />
        </BarChart>
      )}
    </>
  );
};

export default PopulationViewV2;
