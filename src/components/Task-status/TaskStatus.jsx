import React from 'react';
import TaskCard from '../Task-cards/TaskCard';

const TaskStatus = ({ clickedTicket,inProgress,setInProgress,setClickedTicket,removeTicket }) => {


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
                    ></TaskCard>
                ))
            )}
            <h1 className='mb-3 text-xl text-[#34485a] font-bold'>Resolved Task</h1>
            <p className={`text-sm text-[#627382]`}>No resolved tasks yet.</p>
        </div>
    );
};

export default TaskStatus;