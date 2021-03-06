import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { getPopulationChartData } from "../../model/selector";

// import css
import "./PopulationViewV1.css";

const PopulationViewV1 = ({}) => {
  const chartData = useSelector(getPopulationChartData);

  return (
    <>
      {chartData && !!chartData.length && (
        <LineChart
          data={chartData}
          width={600}
          height={400}
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
          <Line
            type="monotone"
            dataKey="population"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      )}
    </>
  );
};

export default PopulationViewV1;
