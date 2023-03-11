import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./components/data.js"
import './App.css';

function App() {
    
     const cards = data.map(item => {
      return (
          <Card 
          key={item.id}
          item={item}
            
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
          <Hero />
          <section className="cards-list">
                {cards}
            </section>
      </div>
  )
}

export default App;