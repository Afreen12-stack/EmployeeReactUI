import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const AddContact = (props) => {
  console.log(props)
  const [formStatus, setFormStatus] = React.useState('Submit')
  const [fname, setfName] = useState('')
  const [lname, setlName] = useState('')
  const [Email, setEmail] = useState('')
  const [phno, setPhno] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [postalcode, setPostalCode] = useState('')
 

  const url = "https://localhost:7204/api/Employee"
  let history = useHistory()
  const onSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { fname, lname, phno, email, address, city, state, country,postalcode } = e.target.elements
    let employeedata = {
      FirstName: fname.value,
      LastName: lname.value,
      PhoneNumber: phno.value,
      Email: email.value,
      Address: address.value,
      City: city.value,
      State: state.value,
      Country : country.value,
      PostalCode: postalcode.value,
    }
     await axios.post(url,
      employeedata)
      .then((result) => {
        GetUpdatedDetails()    
      })
    history.push("/")
  }
  async function GetUpdatedDetails() {
    axios.get(url).then((res)=>
    {
      props.setData(res.data)
      props.setColor(res.data[res.data.length-1].id)
    })
  }
  
  return (
    <div className="container mt-5">
      <h2 className="mb-3" style={{ color: "darkblue" }}>{props.button ? "Edit Contact" : "Add Contact"}</h2>
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
          {props.button ? props.button : formStatus}
        </button>
      </form>
    </div>
  )
}
export default AddContact