import React from "react"
import { useState, useEffect } from "react"

export function GetUser() {
  const [joke, setJokes] = useState([])
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((result) => result.json())
      .then(setJokes)
  }, [])

  return (
    <ol className="result">
      <div>
        <ol className="setup">{joke.setup}</ol>
        <ol className="punchline">{joke.punchline}</ol>
        <br></br>
      </div>
    </ol>
  )
}
