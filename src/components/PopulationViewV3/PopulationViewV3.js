import { Table } from "rsuite";
import { useSelector } from "react-redux";

import { getPopulationTableData } from "../../model/selector";

// import css
import "./PopulationViewV3.css";

const { Column, HeaderCell, Cell } = Table;

const PopulationViewV3 = () => {
  const tableData = useSelector(getPopulationTableData);
  return (
    <Table height={400} data={tableData} bordered cellBordered width={300}>
      <Column width={100} align="center" fixed>
        <HeaderCell>Year</HeaderCell>
        <Cell dataKey="year" />
      </Column>

      <Column width={200} fixed>
        <HeaderCell>Population</HeaderCell>
        <Cell dataKey="population" />
      </Column>
    </Table>
  );
};

export default PopulationViewV3;
