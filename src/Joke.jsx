import { useEffect, useState } from "react"

export function JokeList() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then((result) => result.json())
      .then(setJokes)
  }, [])

  return (
    <ol className="result">
      {jokes.map((joke) => (
        <div>
          <ol className="setup" key={joke.id}>
            {joke.setup}
          </ol>
          <ol className="punchline">{joke.punchline}</ol>
          <br></br>
        </div>
      ))}
    </ol>
  )
}

// todolist:

// change button when clicked
// display joke when click on button
