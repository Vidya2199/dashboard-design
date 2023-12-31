import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { DashboardAPIS } from "../Services/DashBoardAPIS";

import DataTable from "react-data-table-component";
import CircularProgress from "@mui/material/CircularProgress";

export default function Dashboard() {
  const [param, setParam] = useState(0);

  useEffect(() => {
    DashboardAPIS.getDetails(param)
      .then((res) => {
        console.log(res);
        setParam(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, [param]);

  let Columns1 = [
    {
      name: "Topics",
      selector: (row) => row.topics,
    },
    {
      name: "Relevance",
      selector: (row) => row.relevance,
    },
    {
      name: "Region",
      selector: (row) => row.region,
    },
    {
      name: "Intensity",
      selector: (row) => row.intensity,
    },
    {
      name: "Likelihood",
      selector: (row) => row.likelihood,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
  ];

  const [rows, setRows] = useState([]);
  console.log(setRows);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <DataTable
            noDataComponent={<div>No Leave Record Found</div>}
            highlightOnHover
            pointerOnHover
            selectableRowsSingle={true}
            style={{ border: 1 }}
            dense={"true"}
            responsive={true}
            columns={Columns1}
            data={rows}
            pagination={true}
            progressComponent={<CircularProgress style={{ padding: 10 }} />}
            paginationServer={true}
            paginationTotalRows={100}
            onChangePage={() => {}}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
