import { useState } from "react"
import React from 'react'

const Message = ({setCurrentUser}) => {
  const messagesURL = "http://206.189.91.54//api/v1/messages"
  const loginURL = "http://206.189.91.54/api/v1/auth/sign_in"
  // const [variable, setVariableState] = useState("huh?")

  let user = {
    email: "chibby@mail.com",
    password: "chibby1234"
  }
  
  const loginMuna = async () => {
    // e.preventDefault()

    const loginResponse = await fetch(loginURL, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const result = await loginResponse.json()
    // setCurrentUser (result)
    console.log(result)
    setTimeout(() => alert(result), 175)
  }

  loginMuna()

  // const messageSend = async () => {
  //   let response = await fetch(messagesURL)

  //   console.log(response)
  // }
  
  // messageSend()

  return (
    <div className="messageFeatureDiv">
      <div className="user1Chat">
        <input type="text" className="inputChat">

        </input>
        <button className="sendButton">
            Send
        </button>
        <button onClick={loginMuna}>
            Sign-in lmao
        </button>
      </div>
      <div className="sharedChatBox">
        
      </div>
      <div className="user2Chat">
        <input type="text" className="inputChat">

        </input>
        <button className="sendButton">
            Send
        </button>
      </div>
    </div>
  )

}

export default Message
