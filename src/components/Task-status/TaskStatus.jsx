import React from 'react';
import TaskCard from '../Task-cards/TaskCard';

const TaskStatus = ({ clickedTicket, inProgress, setInProgress, setClickedTicket, removeTicket, inResolved, setInResolved, resolvedTickets, setResolvedTickets }) => {


    return (
        <div className=''>
            <h1 className='mb-3 text-xl text-[#34485a] font-bold'>Task Status</h1>

            {clickedTicket.length === 0 ? (
                <p className="text-sm text-[#627382]">Select a ticket to add to Task Status</p>
            ) : (
                clickedTicket.map(card => (
                    <TaskCard key={card.id} card={card}
                        inProgress={inProgress}
                        setInProgress={setInProgress}
                        clickedTicket={clickedTicket}
                        setClickedTicket={setClickedTicket}
                        removeTicket={removeTicket}
                        setInResolved={setInResolved}
                        inResolved={inResolved}
                        resolvedTickets={resolvedTickets}
                        setResolvedTickets={setResolvedTickets}
                    ></TaskCard>
                ))
            )}
            <h1 className='mb-3 text-xl text-[#34485a] font-bold'>Resolved Task</h1>
            {resolvedTickets.length === 0 ? (
                <p className="text-sm text-[#627382]">No resolved tasks yet.</p>
            ) : (
                resolvedTickets.map(task => (
                    <p key={task.id} className="text-md text-[#001931] bg-[#e0e7ff] p-2 rounded-md mb-2">
                        {task.title}
                    </p>
                ))
            )}
        </div>
    );
};

export default TaskStatus;