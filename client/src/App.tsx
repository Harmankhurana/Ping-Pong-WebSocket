import { useEffect, useRef, useState } from "react";
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | undefined>(undefined);
  const inputRef = useRef();

  function SendMessage() {
    if (!socket) {
      return;
    }

    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    };
  }, []);

  return (
    <div>
      <h1>Ping Pong Game</h1>

      <input ref = { inputRef } type="text" placeholder="Message..." />
      <button onClick={SendMessage}>Send</button>
    </div>
  );
}

export default App;