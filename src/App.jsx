import React from "react"
import { useEffect, useState } from "react"
import { JokeList } from "./Joke"
import { GetJoke } from "./GetJoke"
import "./App.css"

function App() {
  const [jokeToggle, setJokeToggle] = useState("")

  // useEffect(() => {}, [])

  return (
    <div>
      <div className="question-box">
        <h1>Click on the buttons for jokes!</h1>
      <button onClick={() => setJokeToggle("one")} className="one">
        One
      </button>
      <button onClick={() => setJokeToggle("ten")} className="ten">
        Ten
      </button>
      </div>
      <div>
        {jokeToggle === "one" && <GetJoke />}
        {jokeToggle === "ten" && <JokeList />}
      </div>
    </div>
  )
}

export default App
