import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { width } from '@mui/system';
import axios from 'axios';
import {useState , useEffect } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },

  { field: 'email', headerName: 'Email', width: 160 },
  {
    field: 'contactNumber',
    headerName: 'Contact Number',
    type: 'number',
    width: 160,
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 160,
  },
  {
    field : 'status',
    headerName : 'Status',
    width : 160,
    renderCell : ()=>(
        <div>
            Active
        </div>
    )
  },
  {
    field : 'Action',
    headerName : 'action',
    width : 90,
    renderCell : ()=>{
        return (
            <div className='flex justify-evenly items-center h-full'>
                <CiEdit className='text-xl' />
                <MdDelete className='text-xl' />
            </div>
        )
    }
  },
];



export default function DataTable() {

    const [rows , setRows] = useState([]);

    const fetchData = async ()=>{
        try {
            const response = await axios.get("http://localhost:3000/users/getAllUsers");
            
            const newRows = response.data.data.map((item , i)=>{
                return {...item,id : i}
            });
            setRows(newRows);

            
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
