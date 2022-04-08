import { Button, Paper,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';
import * as React from 'react';
import id from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



export default function CustomizedTables() {
    const [data, setdata] = React.useState([])
 React.useEffect (( ) => {
    axios.get("http://localhost:5000")
    .then((res) => {
    setdata(res.data);
    })
    .catch((err) => console.log(err));
 })

 function del(id) {
   axios.delete(`http://localhost:5000/delete/user/${id}`)
   .then((res) => ( console.log("data succesfully delete.")
   ))
  window.location = "/table"
 }
  return (
    <>
      {
      data.length===0?
    <h1 className="text-center" style={{marginRight:100}} >no data to disply in table </h1> :
    <TableContainer style={{width:"1120px",paddingRight:30}} component={Paper}>
      <Table  sx={{ minWidth: 550 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <TableCell align="center"> User Id </TableCell>
             <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Password</TableCell>
            <TableCell align="center"> Confirm Password</TableCell>
            <TableCell  align="center"> Update</TableCell>
            <TableCell  align="center"> Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((iteam, index) => (
            <TableRow >
              <TableCell align="center" component="th" scope="row"> {index + 1}  </TableCell>
              <TableCell align="center">{iteam.name}</TableCell>
              <TableCell align="center">{iteam.email}</TableCell>
              <TableCell align="center">{iteam.pass}</TableCell>
              <TableCell align="center">{iteam.confpass}</TableCell>
              <TableCell align="center">

              <Button variant="contained" color="primary" onClick={(e) => window.location=`/${index}`}  startIcon={<EditIcon />} >Edit</Button>
             </TableCell>
             <TableCell>
              <Button style={{width:"95px",marginRight:"-25px"}}  onClick={(e) => del(index)}  variant="contained" color="secondary"  startIcon={<DeleteIcon />} >Delete</Button>
             </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          
        </TableBody>
      </Table>
    </TableContainer>
  }
  </>
  );
}

















