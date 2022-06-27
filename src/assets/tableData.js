export const columnData = [
  { headerName: "Current tag", field: "currentTag" },
  { headerName: "Original tag", field: "originalTag" },
  { headerName: "Sensor", field: "sensor" },
  { headerName: "ASTAT", field: "astat" },
  { headerName: "Obs time", field: "obsTime" },
  { headerName: "Ob type", field: "obType" },
  { headerName: "Az/Rt asc", field: "azRtAsc" },
  { headerName: "El/Dec", field: "elDec" },
  { headerName: "Range", field: "range" },
  { headerName: "Range rate", field: "rangeRate" },
];
const agColumnData = columnData.slice(0);
agColumnData.shift();
const agRowData = Array(24);
for (let i = 0; i < agRowData.length; i++) {
  agRowData[i] = {
    selected: false,
    currentTag: 19999999,
    originalTag: "000011111",
    sensor: 450,
    astat: "FULL",
    obsTime: "2020 158 01:23:45:678",
    obType: "OBTYPE_5",
    azRtAsc: 150,
    elDec: 3500,
    range: 7500,
    rangeRate: 100,
  };
}
export const rowData = agRowData.slice(0).map((item) => {
  item.control = true;
  return item;
});
