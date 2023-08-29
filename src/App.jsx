import React from "react"
import { useState } from "react"
import { JokeList } from "./components/Joke"
import { GetJoke } from "./components/GetJoke"
import "./css/App.css"

function App() {
  const [jokeToggle, setJokeToggle] = useState("")

  return (
    <div>
      <div className="question-box">
        <h1>J O K E S</h1>
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
