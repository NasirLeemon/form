import React from "react";
import "./App.css";
import { useState, useRef } from "react";

export default function ControlledForm() {

    const [userData, setUserData] = useState({
        firstName : '',
        lastName: '',
        email: '',
        phone: '',
        profession:'',
        userName: '',
        gender:'male',
        address: '',
        website: '',
        password:'',
    })

    const [submitted, setSubmitted] = useState(false)
    const[showData, setShowData]= useState({
        firstName : '',
        lastName: '',
        email: '',
        phone: '',
        profession:'',
        userName: '',
        gender:'male',
        address: '',
        website: '',
        password:'',
    })
    
    const [errors, setErrors] = useState({
        firstName : '',
        lastName: '',
        email: '',
        phone: '',
        profession:'',
        userName: '',
        gender:'male',
        address: '',
        website: '',
        password:'',
    })
    
    const firstNameRef = useRef(null)

    const {firstName, lastName, email, phone, profession, userName,gender, address, website, password} = userData

    const handleChange = (evt)=>{
        setUserData({
            ...userData,
            [evt.target.name] : evt.target.value
        })

        setErrors({
            ...errors,
            [evt.target.name] : ''
        })

       
        // console.log(finalData);
    }



    const handleSubmit = (evt) => {
        evt.preventDefault()
        // console.log(userData);

        const {firstName, lastName, email, phone, profession, userName, address, website, password} = userData

        firstNameRef.current.focus()

        const userErrors = {
            firstName : '',
        lastName: '',
        email: '',
        phone: '',
        profession:'',
        userName: '',
        address: '',
        website: '',
        password:'',
        }

        let isError = false;

        if (firstName === '') {
            isError = true;
            userErrors.firstName = 'First Name is Required'
            
        }

        if (lastName === '') {
            isError = true;
            userErrors.lastName = 'Last Name is Required'
            
        }

        if (email === '') {
            isError = true;
            userErrors.email = 'Email is Required'
           
        }

        if (phone === '') {
            isError = true;
            userErrors.phone = 'Phone Number is Required'
            
        }

        if (profession === '') {
            isError = true;
            userErrors.profession = 'Profession is Required'
          
        }

        if (userName === '') {
            isError = true;
            userErrors.userName = 'User Name is Required'
           
        }

        if (address === '') {
            isError = true;
            userErrors.address = 'Address is Required'
           
        }

        if (website === '') {
            isError = true;
            userErrors.website = 'Website url is Required'
           
        }

        if (password === '') {
            isError = true;
            userErrors.password = 'Password is Required'
           
        }

        setErrors(userErrors)
        if (isError) return

        setSubmitted(true)
        setShowData(userData)
        setUserData({
            firstName : '',
            lastName: '',
            email: '',
            phone: '',
            profession:'',
            userName: '',
            gender:'male',
            address: '',
            website: '',
            password:'',
           })
        //    console.log(userData);
        
    }

   
   

  return (
    <div className="container">
      <div className="form">
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
            id="firstName"
            name="firstName"
            ref={firstNameRef}
            value={firstName}
            onChange={handleChange}
            ></input>
            <p style={{color: 'red'}}>{errors.firstName}</p>
            <label htmlFor="lastName">Last Name:</label>
            <input
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            ></input>
            <p style={{color: 'red'}}>{errors.lastName}</p>
            <label htmlFor="email">Email:</label>
            <input
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            ></input>
            <p style={{color: 'red'}}>{errors.email}</p>
            <label htmlFor="phone">Phone Number:</label>
            <input 
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
             ></input>
             <p style={{color: 'red'}}>{errors.phone}</p>
             <label htmlFor="profession">Profession:</label>
             <select id="profession" name="profession" value={profession} onChange={handleChange}>
                <option value='' disabled>Select</option>
                <option value='webDev'>Web Devloper</option>
                <option value='softDev'>Software Devloper</option>
                <option value='designer'>Designer</option>
             </select>
             <input type='submit' value='submit' />
          </form>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">User Name: </label>
            <input
             id="userName"
             name="userName"
             value={userName}
             onChange={handleChange}
              ></input>
              <p style={{color: 'red'}}>{errors.userName}</p>
              <div>
              <label htmlFor="gender">Gender:</label>
              <input 
              type='radio' 
              name="gender" 
              checked={gender === 'male'}
              value='male'
              onChange={handleChange}/>male
              <input 
              type='radio' 
              name="name" 
              checked={gender === 'female'}
              value='female'
              onChange={handleChange}/>Female
              </div>
             
              
            <label htmlFor="address">Address:</label>
            <input 
            id="address" 
            name="address"
            value={address}
             onChange={handleChange}
             ></input>
             <p style={{color: 'red'}}>{errors.address}</p>
            <label htmlFor="website">Website:</label>
            <input 
            id="website"
            name="website"
            value={website}
             onChange={handleChange}
             ></input>
             <p style={{color: 'red'}}>{errors.website}</p>
            <label htmlFor="password">Password:</label>
            <input 
            id="password"
            name="password"
            value={password}
             onChange={handleChange}
             ></input>
             <p style={{color: 'red'}}>{errors.password}</p>
          </form>
        </div>
    </div>
    <div className="outPut">
        <div>
            <div className="fullName outPut-inner-div">
                <h4>Full Name</h4>
                {submitted && <p>{showData.firstName +' '+ showData.lastName }</p>}
            </div>
            <div className="website outPut-inner-div">
                <h4>Website</h4>
                {submitted && <a href={showData.website}>Clicck Here</a> }
            </div>
            <div className="phone outPut-inner-div">
                <h4>Phone Number</h4>
                {submitted && <p>{showData.phone}</p>}
            </div>
            <div className="email outPut-inner-div">
                <h4>Email</h4>
                {submitted && <p>{showData.email}</p>}
            </div>
            <div className="address outPut-inner-div">
                <h4>Address</h4>
                {submitted && <p>{showData.address}</p>}
            </div>
        </div>
    </div>
    </div>
  );
}
