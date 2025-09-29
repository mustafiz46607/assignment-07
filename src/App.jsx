
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/navbar'
import Tickets from './components/Tickets/Tickets'
import TaskStatus from './components/Task-status/TaskStatus'


const fetchTickets =async () => {
  const res = await fetch('/tickets.json')
  return res.json()
} 

function App() {
 const ticketsPromise = fetchTickets()

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h1>Tickets are loading</h1>}>
        <Tickets ticketsPromise={ticketsPromise}></Tickets>
        
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
