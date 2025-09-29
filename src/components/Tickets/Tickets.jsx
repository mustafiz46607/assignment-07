import React, { use, } from 'react';
import Ticket from '../Ticket/Ticket';
import TaskStatus from '../Task-status/TaskStatus';



const Tickets = ({ ticketsPromise, setInProgress, inProgress, clickedTicket, setClickedTicket,removeTicket,inResolved,setInResolved,setResolvedTickets,resolvedTickets }) => {
    // console.log(tic)
    const ticketsData = use(ticketsPromise)
    return (
        <div className='max-w-[1220px] mx-auto mb-5 md:grid grid-cols-4'>

            <div className='col-span-3'>
                <h1 className='mb-3 text-xl text-[#34485a] font-bold'>Customer Tickets</h1>
                <div className=' md:grid grid-cols-2 '>

                    {
                        ticketsData.map(tic => <Ticket key={tic.id}
                            tic={tic}
                            setInProgress={setInProgress}
                            inProgress={inProgress}
                            clickedTicket={clickedTicket}
                            setClickedTicket={setClickedTicket}
                            removeTicket={removeTicket}
                            inResolved={inResolved}
                            setInResolved={setInResolved}
                            resolvedTickets={resolvedTickets}
                            setResolvedTickets={setResolvedTickets}
                        ></Ticket>)
                    }
                </div>

            </div>
            <TaskStatus clickedTicket={clickedTicket} 
            inProgress={inProgress} 
            setInProgress={setInProgress}  
            setClickedTicket={setClickedTicket}
            removeTicket={removeTicket}
            inResolved={inResolved}
            setInResolved={setInResolved}
            resolvedTickets={resolvedTickets}
            setResolvedTickets={setResolvedTickets}
            ></TaskStatus>
        </div>

    );
};

export default Tickets;