import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const EditContact = (props) => {
  console.log(props)
  const [formStatus, setFormStatus] = React.useState('Submit')
  const [fname, setfName] = useState(props.row.firstName)
  const [lname, setlName] = useState(props.row.lastName)
  const [Email, setEmail] = useState(props.row.email)
  const [phno, setPhno] = useState(props.row.phoneNumber)
  const [address, setAddress] = useState(props.row.address)
  const [city, setCity] = useState(props.row.city)
  const [state, setState] = useState(props.row.state)
  const [country, setCountry] = useState(props.row.country)
  const [postalcode, setPostalCode] = useState(props.row.postalCode)
 

  const url = "https://localhost:7204/api/Employee"
  let history = useHistory()
  const onSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('Updating...')
    const { fname, lname, phno, email, address, city, state, country,postalcode } = e.target.elements
    const employeedata = {
      "id" : props.row.id,
      "firstName": fname.value,
      "lastName": lname.value,
      "phoneNumber": phno.value,
      "email": email.value,
      "address": address.value,
      "city": city.value,
      "state": state.value,
     "country" : country.value,
      "postalCode": postalcode.value,
    }
      axios.put(`https://localhost:7204/api/Employee/${props.row.id}`,
      employeedata)
      .then((result) => {
        GetUpdatedDetails()   
      }).catch((error)=>
      {
        console.log(error)
      })
    history.push("/")
  }
  async function GetUpdatedDetails() {
    axios.get("https://localhost:7204/api/Employee").then((res)=>
    {
      props.setData(res.data)
    })
  }
  
  return (
    <div className="container mt-5">
      <h2 className="mb-3" style={{ color: "darkblue" }}>{props.Name}</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name" style={{ color: "darkblue" }}>
            First Name
          </label>
          <input className="form-control" type="text" id="fname"  onChange={(e)=> setfName(e.target.value)} required value={fname}>
            </input>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name" style={{ color: "darkblue" }} >
            Last Name
          </label>
          <input className="form-control" type="text" id="lname" required onChange={(e)=> setlName(e.target.value)} value={lname}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email" style={{ color: "darkblue" }}>
            Email
          </label>
          <input className="form-control" type="email" id="email" required onChange={(e)=> setEmail(e.target.value)} value={Email}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phno" style={{ color: "darkblue" }} >
            Phone Number
          </label>
          <input className="form-control" type="text" id="phno" required onChange={(e)=> setPhno(e.target.value)} value={phno}/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="address" style={{ color: "darkblue" }}>
            Address
          </label>
          <textarea className="form-control" id="address" required onChange={(e)=> setAddress(e.target.value)} value={address}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="city" style={{ color: "darkblue" }}>
            City
          </label>
          <input className="form-control" type="text" id="city" onChange={(e)=> setCity(e.target.value)} value={city}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="state" style={{ color: "darkblue" }}>
            State
          </label>
          <input className="form-control" type="text" id="state"  onChange={(e)=> setState(e.target.value)} value={state}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="country" style={{ color: "darkblue" }} > 
            Country
          </label>
          <input className="form-control" type="text" id="country" onChange={(e)=> setCountry(e.target.value)} value={country}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="postalcode" style={{ color: "darkblue" }} >
            PostalCode
          </label>
          <input className="form-control" type="text" id="postalcode" onChange={(e)=> setPostalCode(e.target.value)} value={postalcode}/>
        </div>
        <button className="btn" type="submit" style={{ color: "darkblue", backgroundColor: "skyblue" }} >
          {props.button}
        </button>
      </form>
    </div>
  )
}
export default EditContact