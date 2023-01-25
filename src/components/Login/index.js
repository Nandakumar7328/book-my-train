import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'
const Login = (props) => {
  const [isSelectUser,clickUser] = useState(true)
  const [email,changeEmail] = useState('')
  const [password,changePassword] = useState('')
  const [isErrorShow,displayError] = useState(false)
  const[erroMsg,addErrorMsg] = useState('')
  const [isSuperAdmin, changeToAgent] = useState(true)
 
  const onSubmitUserDetails = async event => {
     event.preventDefault()
     const url = isSuperAdmin ? 'https://train-ticket-booking.onrender.com/login-super-admin':'https://train-ticket-booking.onrender.com/login-agent'
     const userData = {
      email:email,
      password:password
     }
     const options ={
      method:"POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
              },
     }
      
     const response = await fetch(url,options)
     const data = await response.json()
     if (data.status === true){
        localStorage.setItem("ID",data.ID)
        localStorage.setItem("status",isSuperAdmin)
        if(isSuperAdmin === false){
          localStorage.setItem("limit",data.limit)
        }
        displayError(false)
        const  {history} = props 
          history.replace("/")
     }else{
      addErrorMsg(data.msg)
      displayError(true)
     }


  }

  const onClickMaster = () => {
    clickUser(false)
    changeToAgent(true)
  }
  const onClickStudent = () => {
    clickUser(false)
    changeToAgent(false)
  }

  const onChangeEmail = event => {
    changeEmail(event.target.value)
  }

  const onChangePassword = event => {
    changePassword(event.target.value)
  }

  const getId = localStorage.getItem("ID")
    if (getId !== null)  {
        return <Redirect to="/" />
      }

  return(
    <div>
      { isSelectUser ? 
    
      ( <div className='login-main-container'>
        <div className='sub-select-container'>
        <img src='https://res.cloudinary.com/duv0mhzrm/image/upload/v1674488347/png-transparent-logo-train-train-text-logo-mode-of-transport-thumbnail-removebg-preview_fcnsc1.png' alt="logo"/>
        <p className='user-type-para'>Select User type?</p>
         <button onClick={onClickMaster} type='button' className='btn-select-user'>Super Admin</button>
         <button onClick={onClickStudent} type='button'className='btn-select-user'>Agent</button>
      </div>
      </div>) : (<div className='login-main-container-one'>
              <form className='login-sub-container' onSubmit={onSubmitUserDetails}>
                <h1 className='login-main-heading'>Login</h1>
                <label  htmlFor='email' className='labele-heading'>Email</label>
                <input onChange={onChangeEmail} value={email} id='email'  className='input-container' type="text" placeholder="Enter Your Email"/>
                <label  htmlFor='password' className='labele-heading'>Password</label>
                <input onChange={onChangePassword} value={password} id='password' className='input-container' type="password" placeholder="Enter Your Password"/>
                <button className='btn' type='submit'>Login</button>
                {isErrorShow && <p className='error'>*{erroMsg}</p>}
              </form>
           </div>)}
    </div>
  )
}

export default Login