import { useEffect, useState } from "react"

export function JokeList() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then((res) => res.json())
      .then(setJokes)
    }, [])
    debugger

  return (
    <ol>
      {jokes.map((joke) => (
        <li key={joke.id}>{joke.setup}</li>
      ))}
    </ol>
  )
}
