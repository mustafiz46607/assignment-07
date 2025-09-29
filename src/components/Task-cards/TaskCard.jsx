import React from 'react';
import { toast } from 'react-toastify';

const TaskCard = ({card,inProgress,setInProgress,removeTicket,inResolved,setInResolved,resolvedTickets,
    setResolvedTickets}) => {
    const handleCompleteBtn=()=>{
        setInProgress(inProgress - 1)
        setInResolved(inResolved + 1)
        setResolvedTickets([...resolvedTickets, card]);
        removeTicket(card)
        toast("task completed")
        return
    }
    return (
        <div className='p-3 bg-white m-2 rounded-lg shadow-md mt-5'>
            <h2 className='text-lg text-[#001931] mb-2'>{card.title}</h2>
            <button onClick={handleCompleteBtn} className='p-3 bg-[#02a53b] w-full rounded-lg text-white'>Complete</button>
        </div>
    );
};

export default TaskCard;