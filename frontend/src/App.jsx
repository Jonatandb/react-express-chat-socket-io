import io from 'socket.io-client'
import { useState } from 'react'

const socket = io('/')

function App() {
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    socket.emit('message', message)
  }

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
    </div>
  )
}

export default App

