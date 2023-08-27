import React from "react"
import { JokeList } from "./Joke"
import "./App.css"

function App() {
  return (
    <div>
      <h1>Click on the buttons for jokes!</h1>
      <button>One</button>
      <button className="ten">Ten</button>
      <div>
        <JokeList />
      </div>
    </div>
  )
}

export default App
