import React, {useState} from 'react';

export function App (){

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')

  function signUp (){
    alert(`First name: ${firstName}\n
            Last name: ${lastName}\n 
            Email: ${email}\n 
            Password: ${password}\n 
            Phone number: ${phone}\n 
            Date of birth: ${dateOfBirth}\n 
            Gender: ${gender} 
    `)
  }


  return(
    <div id='app'>
      <h2>Sign up for Yahoo Mail</h2>
      <h3>Create a Yahoo email address</h3>
      <form>
        <input
          type='text'
          placeholder='First name'
          value= {firstName}
          onChange={(e)=>{
            setFirstName(e.target.value)
          }}
        ></input>
        <input
          type='text'
          placeholder='Last name'
          value= {lastName}
          onChange={(e)=>{
            setLastName(e.target.value)
          }}
        ></input> <br/>
        <input
          type='email'
          placeholder='Email address'
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        ></input> <br/>
        <p>I want to use my current email address</p>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        ></input> <br/>
        <input
          type= 'tel'
          placeholder='Mobile phone number'
          value={phone}
          onChange={(e)=>{
            setPhone(e.target.value)
          }}
        ></input> <br/>
        <input
          type='text'
          placeholder='Day of birth'
          value={dateOfBirth}
          onChange={(e)=>{
            setDateOfBirth(e.target.value)
          }}
        ></input> <br/>
        <input
          type='text'
          placeholder='Gender'
          value={gender}
          onChange={(e)=>{
            setGender(e.target.value)
          }}
        ></input> <br/>
        <button
        onClick={signUp}>Sign up!</button>
      </form>
    </div>
  )
}