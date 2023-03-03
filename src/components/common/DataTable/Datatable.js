import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Datatable = ({ rows, columns }) => {
  return <DataGrid rows={rows} columns={columns} />;
};

export default Datatable;
