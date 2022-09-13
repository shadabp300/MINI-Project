import React, {Component, useState} from "react";
import '../styles/signup.css';


const SignUp = () => {


  const [data, setdata]=useState({
    name:"",
    email:"",
    gender:"male",
    phoneNumber:"",
    password:""
})

const handlesubmit = (e) => {
  e.preventDefault()

  if (!data.name || !data.email || !data.phoneNumber || !data.password) {
    return alert("All fields are mandatory")
  }

  else if ((data.name).match(/^[0-9A-Za-z]+$/) === null) { 
    return alert(" Name is not alphanumeric")
    }

  else if ((data.phoneNumber).length<10) {
    return alert("Please Check the Contact Number")
  }
  else if ((data.password).length<6) {
    return alert(" Password must contain atleast 6 letters")
  }

  else {
    let idx=(data.email).indexOf("@")
    alert(`Hello ${(data.email).slice(0,idx)}`)
    setdata({
      name:"",
      email:"",
      gender:"male",
      phoneNumber:"",
      password:""
  })
  } 
}
console.log(data)



  return (
    <div className="Auth-form-container">
       
      <form className="Auth-form" onSubmit={handlesubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title"></h3>
          <div className="text-center">
          </div>
          
          
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="name"
              value={data.name}
              onChange={(e)=> {
                setdata({...data,name:e.target.value})
            }}
            />
          </div>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g johndoe123@gmail.com"
              name="email"
              value={data.email}
              onChange={(e)=> {
                setdata({...data,email:e.target.value})
            }}
            />
          </div>

          <div className="form-group mt-3">
            <label>Gender</label>
            <select name="gender" className="form-control mt-1"  onClickCapture={(e)=> {
                setdata({...data,gender:e.target.value})
            }}>

              <option  value='male' >Male</option>
              <option value='female'  >Female</option>
              <option value='Other'  >Other</option>

            </select>
          </div>

          <div className="form-group mt-3">
            <label>Contact No.</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Phone Number"
              name='phoneNumber'
              value={data.phoneNumber}
              onChange={(e)=> {
                setdata({...data,phoneNumber:e.target.value})
            }}
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="xxxxxx"
              name="password"
              value={data.password}
              onChange={(e)=> {
                setdata({...data,password:e.target.value})
            }}
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            SignUp Form
          </p>
        </div>
      </form>
    </div>
  )
}


export default SignUp;
