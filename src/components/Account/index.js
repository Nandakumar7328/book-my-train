import React,{useState,useEffect} from 'react'
import Header from '../Header'
import './index.css'
const Account = () => {
    const [userData,setUserData] = useState([])


     const getAgentData = async() => {
        const id = localStorage.getItem("ID")
        const url = `https://train-ticket-booking.onrender.com/get-agent-details/${id}`
        const option = {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
             },
        }

        const response = await fetch(url,option)
        const data = await response.json()
        console.log(data[0].name)
        setUserData(data[0])

     }

     useEffect( () => {
        const  status = localStorage.getItem("status") 
        if (status === "false"){
            getAgentData()
        }else{
            getAdminData()
        }
        
     }, []);
     const getAdminData = async() => {
        const url = 'https://train-ticket-booking.onrender.com/get-admin-details'
        const option = {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
             },
        }

        const response = await fetch(url,option)
        const data = await response.json()
        setUserData(data[0])

     }
    console.log(userData.name)
    const  status = localStorage.getItem("status") 
    return( <div className='account-main-container'>
    <Header/>
    {status === "true" ? (<div className='account-sub-container'>
      <p className='para'>Name-: {userData.username}</p>
      <p className='para'>Email-: {userData.email} </p>
    </div>):(<div className='account-sub-container'>
      <p className='para'>Name-: {userData.name}</p>
      <p className='para'>DOB-: {userData.dateOfBirth} </p>
      <p className='para'>Phonenumber-: {userData.phonenumber}</p>
      <p className='para'>Adress-: {userData.address} </p>
    </div>)}
    </div>
    )
}

export default Account