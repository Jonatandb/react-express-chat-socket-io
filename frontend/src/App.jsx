import io from 'socket.io-client';

const socket = io('http://localhost:4000')

function App() {
  return (
    <div>Hello</div>
  )
}

export default App