import React from 'react'
import Navbar from '../MainPage/SubComponents/Navbar'
import {DataGrid} from "@mui/x-data-grid";
import Demo from './Demo';


const Teacher = () => {
  const columns = [
    {headerName:"ID",field:"_id",width:300},
  ]
  return (
    <>
    <Navbar />
    <div className='t-heading'>
      <h1>All Student data</h1>
    </div>
    <Demo />
    </>
  )
}

export default Teacher