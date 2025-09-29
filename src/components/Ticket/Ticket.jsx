import React from 'react';
import circleG from '../../assets/circle.png'
import calender from '../../assets/calender.png'
import circleY from '../../assets/circleY.png'
const handleClicked = () =>{
    console.log("clicked")
}
const Ticket = ({ tic }) => {
    // console.log(tic)
    
    return (
      
            <div onClick={handleClicked} className='bg-white text-black shadow-md rounded-md p-3 m-2'>
                <div className='flex justify-between items-center mb-2'>
                    <h3 className='text-[#001931] text-lg font-semibold'>{tic.title}</h3>
                    <div className={`flex items-center gap-2 p-2 rounded-2xl ${tic.status === "Open" ? "bg-[#b9f8cf] text-[#0b5e06]" : ""} ${tic.status === "In Progress" ? "bg-[#f8f3b9] text-[#9c7700]" : ""} ${tic.status === "Closed" ? "bg-red-300 text-black" : ""} `}>
                        <img src={tic.status === "Open" ? circleG : circleY} alt="" />
                        <p>{tic.status}</p>
                    </div>
                </div>

                <div className='mb-2'>
                    <p className='text-[#627382] text-sm'>{tic.description}</p>
                </div>
                
                <div className='flex justify-between items-center mb-2'>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[#627382] text-sm'>#{tic.id}</p>
                        <p className={`text-sm ${tic.priority === "Critical" ? "text-red-600" : ""} ${tic.priority === "High" ? "text-red-500" : ""} ${tic.priority === "Medium" ? "text-yellow-500" : ""} ${tic.priority === "Low" ? "text-green-500" : ""}`}>{tic.priority}</p>
                    </div>
                    <div className='flex gap-2 items-center mb-2'>
                        <p className='text-[#627382] text-sm'>{tic.customer}</p>
                        <div className='flex items-center gap-1'>
                            <img src={calender} alt="" />
                            <p className='text-[#627382] text-sm'>{tic.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Ticket;

//  {
//     "id": 1,
//     "title": "Login issue",
//     "description": "User unable to log in with correct credentials.",
//     "customer": "Alice Johnson",
//     "priority": "High",
//     "status": "Open",
//     "createdAt": "2025-09-20T09:30:00Z"
//   }