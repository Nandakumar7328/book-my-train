import React,{useState,useEffect} from 'react'
import Header from "../Header"
import './index.css'

const AgentFull = () => {
    const [allBooking,setAllBooking] = useState([])

    const  getAllBooking = async() => {
        const url = 'https://blue-violet-gorilla-tux.cyclic.app/get-all-booking'
        const options ={
            method:"GET",
                  headers: {
                      'Content-Type': 'application/json',
                      accept: 'application/json',
                    },
           }
        const response = await fetch(url,options)
        const data = await response.json()
        console.log(data)

        if(response.ok === true){
            setAllBooking(data)
        }
    }

    useEffect(() => {
        getAllBooking()
    },[])

    return (
        <div className='main-all-booking'>
            <Header/>
           <div className='ticket-container'>
        {allBooking.map(eachData => (
            <div className='each-ticket' id={eachData.id}>
            <img className="logo-ticket" src="https://res.cloudinary.com/duv0mhzrm/image/upload/v1674488347/png-transparent-logo-train-train-text-logo-mode-of-transport-thumbnail-removebg-preview_fcnsc1.png" alt='logo'/>
           <div className='ticket-sub'>
            <p className='para-ticket'>Name: {eachData.name}</p>
            <p  className='para-ticket'>Age: {eachData.age}</p>
            <p className='para-ticket'>Seat {eachData.seatNumber}</p>
            <p  className='para-ticket'>Banglore To Mysore</p>
           </div>
           </div>
        ))}
           </div>
        </div>
       
    )
}

export default AgentFull