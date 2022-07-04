import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import "./style.css"

const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'firstname',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastname',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
    editable: true,
  },
  {
    field: 'username',
    headerName: 'Username',
    width: 160
  },
  {
    field : 'branch',
    headerName: "Branch",
    width: 160
  },
  {
    field: "year",
    headerName: "Year",
    width: 160
  },
  {
    field: "division",
    headerName: "Division",
    width: 160
  },
  {
    field: "prn",
    headerName: "Registration No.",
    width: 160
  },
  {
    field: "roll",
    headerName: "Roll No.",
    width: 160
  }
];

export default function Demo() {
  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/record")
    .then((res)=>{
        setData(res.data);
    });
  },[]);

  return (
    <div className='data-table'>
    <Box sx={{ height: 400}}>
      <DataGrid
        columns={columns}
        rows = {data}
        getRowId = {(row) => row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
    </div>
  );
}