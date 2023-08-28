import { useState, useEffect } from "react"

export function GetJoke() {
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
        <br></br>
        <ol className="punchline">{joke.punchline}</ol>
      </div>
    </ol>
  )
}
