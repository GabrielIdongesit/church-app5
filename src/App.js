import React from 'react';
import Activities from './Components/Activities';
import Donate from './Components/Donate';
import Footer from './Components/Footer';
import Event from './Components/Event';
import Navbar from './Components/Navbar';
import TopBar from './Components/TopBar';
import Home from './Components/Home';
import Location from './Components/Location';



const App = () => {
  return (
    <div>
        <TopBar />
        <Navbar />
        <Home />
        <Activities />
        <Event />
        <Location />
        <Donate />
        <Footer />
    </div>
  )
}

export default App