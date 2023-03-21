import { Fragment, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Delete} from '@material-ui/icons';
import {Edit} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios'
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./NavBar";
import '../App.css';

const Userdata = (props) => {

  let history = useHistory();
  console.log(props)
  const [order, setOrder] = useState("ASC") //To handle order 
  const [count, setCount] = useState(0)
  let sorted
  useEffect(() => {
    if(!props.data)
    {
      getData() 
    }
      
  },[])
  const getData= ()=>
  {
    axios.get("https://localhost:7204/api/Employee").then((res)=>
    {
     props.setData(res.data)
    })

  }
  const onRowDelete = (i)=>
  {
     axios.delete(`https://localhost:7204/api/Employee/${i}`)
      .then((result) => {
        if(result.status === 200)
        {
          getData()    
        }
        else
        {
          console.log("Error")
        }
      })
  }
  const handleAscOrder = (name) => {
    switch(name)
    {
      case "firstName" :   sorted = [...props.data].sort((a, b) => a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1);
      break;
      case "lastName" :   sorted = [...props.data].sort((a, b) => a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1);
      break;
      case "email" :   sorted = [...props.data].sort((a, b) => a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1);
      break;
      case "address" :   sorted = [...props.data].sort((a, b) => a.address.toLowerCase() > b.address.toLowerCase() ? 1 : -1);
      break;
      case "city" :   sorted = [...props.data].sort((a, b) => a.city.toLowerCase() > b.city.toLowerCase() ? 1 : -1);
      break;
      case "phoneNumber" :   sorted = [...props.data].sort((a, b) => a.phoneNumber.toLowerCase() > b.phoneNumber.toLowerCase() ? 1 : -1);
      break;
      case "country" :   sorted = [...props.data].sort((a, b) => a.country.toLowerCase() > b.country.toLowerCase() ? 1 : -1);
      break;
      case "state" :   sorted = [...props.data].sort((a, b) => a.state.toLowerCase() > b.state.toLowerCase() ? 1 : -1);
      break;
    }
   
    props.setData(sorted)
    setOrder("DSC")
  }
  const handleOrder = (name) => {
    if (order === "DSC") {
      handleDscOrder(name)
    }
    else {
      handleAscOrder(name)
    }
    
  }
  const onRowEdit = (rowid) =>        
  { 
   props.data.filter((row) => 
    {
      if(rowid == row.id)
      {
        props.setRow(row)
        
      }
    })
    history.push('/EditContact')
   
  }
  const handleDscOrder = (name) => {

    switch(name)
    {
      case "firstName" :   sorted = [...props.data].sort((a, b) => a.firstName.toLowerCase() < b.firstName.toLowerCase() ? 1 : -1);
      break;
      case "lastName" :   sorted = [...props.data].sort((a, b) => a.lastName.toLowerCase() < b.lastName.toLowerCase() ? 1 : -1);
      break;
      case "email" :   sorted = [...props.data].sort((a, b) => a.email.toLowerCase() < b.email.toLowerCase() ? 1 : -1);
      break;
      case "address" :   sorted = [...props.data].sort((a, b) => a.address.toLowerCase() < b.address.toLowerCase() ? 1 : -1);
      break;
      case "city" :   sorted = [...props.data].sort((a, b) => a.city.toLowerCase() < b.city.toLowerCase() ? 1 : -1);
      break;
      case "phoneNumber" :   sorted = [...props.data].sort((a, b) => a.phoneNumber.toLowerCase() < b.phoneNumber.toLowerCase() ? 1 : -1);
      break;
      case "country" :   sorted = [...props.data].sort((a, b) => a.country.toLowerCase() < b.country.toLowerCase() ? 1 : -1);
      break;
      case "state" :   sorted = [...props.data].sort((a, b) => a.state.toLowerCase() < b.state.toLowerCase() ? 1 : -1);
      break;
      case "postalcode" :   sorted = [...props.data].sort((a, b) => a.postalCode.toLowerCase() < b.postalCode.toLowerCase() ? 1 : -1);
      break;
    }
    props.setData(sorted)
    setOrder("ASC")
  }
  return (
    <Fragment>
      <NavBar setCount = {setCount}/>
      <Table striped bordered hover style={{ border: "1px solid", marginLeft: "0%" }} className='tables'>
        <thead>
          <tr>
            <th>#</th>
            <th onClick={()=>handleOrder("firstName")} style={{cursor:"pointer"}}>First Name
            </th>
            <th onClick={()=>handleOrder("lastName")} style={{cursor:"pointer"}}>Last Name
            </th>
            <th onClick={()=>handleOrder("email")} style={{cursor:"pointer"}}>Email
            </th>
            <th onClick={()=>handleOrder("phoneNumber")} style={{cursor:"pointer"}}>Phone Number
            </th>
            <th onClick={()=>handleOrder("address")} style={{cursor:"pointer"}}>Address
            </th>
            <th onClick={()=>handleOrder("city")} style={{cursor:"pointer"}}>City</th>
            <th onClick={()=>handleOrder("state")} style={{cursor:"pointer"}}>State</th>
            <th onClick={()=>handleOrder("country")} style={{cursor:"pointer"}}>Country</th>
            <th onClick={()=>handleOrder("postalcode")} style={{cursor:"pointer"}}>PostalCode</th>
          </tr>
        </thead>
        <tbody>
        {
          props.data ? props.data.map(row=>(
            <tr key={row.id} style={props.color == row.id ? {backgroundColor:"green"} : {backgroundColor:""}}>
              <td>{row.id}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.email}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.address}</td>
              <td>{row.city}</td>
              <td>{row.state}</td>
              <td>{row.country}</td>
              <td>{row.postalCode}</td>
              <td><Delete style={{cursor:'pointer'}} onClick={()=>onRowDelete(row.id)}/></td>
              <td><Edit style={{cursor:'pointer'}}  onClick={()=>onRowEdit(row.id)}/></td>
            </tr>
          )) : null
          }
        </tbody>
      </Table>
      <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "1px" }}>
        Employee: Confidential Data
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Email</FooterLink>
            <FooterLink href="#">Phone Number</FooterLink>
          </Column>
          </Row>
         </Container> 
         </Box>
    </Fragment>

  );
}
export default Userdata;
