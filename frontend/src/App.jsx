import io from 'socket.io-client'
import { useState, useEffect } from 'react'

const socket = io('/')

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    const newMessage = {
      body: message,
      id: 'Me'
    }
    receiveMessage(newMessage)
    socket.emit('message', message)
  }

  useEffect(() => {
    socket.on('message', receiveMessage)
    return () => socket.off('message', receiveMessage)
  }, [messages])

  const receiveMessage = message =>
    setMessages(previousState => [...previousState, message])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Write your messange...'
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <button>Send</button>
      </form>

      <ul>
        {
          messages.map((msg, idx) => <li key={idx}>{msg.id}: {msg.body}</li>)
        }
      </ul>

    </div>
  )
}

export default App







