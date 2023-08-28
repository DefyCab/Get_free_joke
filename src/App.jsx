import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { JokeList } from "./Joke"
import { GetUser } from "./GetUser"
import "./App.css"

function App() {
  return (
    <div>
      <h1>Click on the buttons for jokes!</h1>
      <button>One</button>
      <button className="ten">Ten</button>
      <div>
        <GetUser />
        {/* <JokeList /> */}
      </div>
    </div>
  )
}

export default App
