import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Employees = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/employees")
      .then((res) => {
        console.log(res.data);
        setArr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    

  const handleDeleteClick = (id) => {
    Axios.delete("http://localhost:4000/employees/delete-employee/" + id)
    .then((res) => {
      if (res.status === 200) {
        alert("Record deleted successfully");
        window.location.reload();
      } else Promise.reject();
    })
    .catch((err) => alert(err));
};

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 0.5,
    },
    {
      field: "Edit Employee",
      headerName: "Edit Employee",
      sortable: false,
      renderCell: ({ id }) => (
        <Button variant="contained" color="success">
          Edit
        </Button>
      ),
    },
    {
      field: "Delete Employee",
      headerName: "Delete Employee",
      sortable: false,
      renderCell: ({ id }) => (
        <Button onClick={() => handleDeleteClick(id)} variant="contained" color="error">
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="EMPLOYEE DETAILS" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={arr}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Employees;
