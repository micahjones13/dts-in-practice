import { rowData, columnData } from "../assets/tableData";
import "./Table.css";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          {columnData.map((header) => {
            return <th>{header.headerName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row) => {
          return (
            <tr>
              <td>{row.currentTag}</td>
              <td>{row.originalTag}</td>
              <td>{row.sensor}</td>
              <td>{row.astat}</td>
              <td>{row.obsTime}</td>
              <td>{row.obType}</td>
              <td>{row.azRtAsc}</td>
              <td>{row.elDec}</td>
              <td>{row.range}</td>
              <td>{row.rangeRate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
