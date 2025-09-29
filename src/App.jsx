
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/navbar'
import Tickets from './components/Tickets/Tickets'
import TaskStatus from './components/Task-status/TaskStatus'


const fetchTickets = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
}

const ticketsPromise = fetchTickets()
function App() {
  const [inProgress, setInProgress] = useState(0)
  const [clickedTicket, setClickedTicket] = useState([])
  const removeTicket = (card) => {
    const clickedTicketData = clickedTicket.filter(tick => tick.title !==card.title)
    setClickedTicket(clickedTicketData)
  }
  return (
    <>
      <Navbar></Navbar>

      <Banner inProgress={inProgress}></Banner>

      <Suspense fallback={<h1>Tickets are loading</h1>}>

        <Tickets ticketsPromise={ticketsPromise}
          inProgress={inProgress}
          setInProgress={setInProgress}
          setClickedTicket={setClickedTicket}
          clickedTicket={clickedTicket}
          removeTicket={removeTicket}
        >

        </Tickets>

      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
