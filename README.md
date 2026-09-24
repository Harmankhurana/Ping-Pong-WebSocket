# **PingPong WebSocket**

A simple real-time client-server communication project built with **React, TypeScript, and WebSockets**.

The project demonstrates how a WebSocket connection is established between a frontend client and a backend server, allowing the client to send a `Ping` message and receive a `Pong` response in real time.

## How It Works

```text
React Client
     │
     │ WebSocket Connection
     ▼
WebSocket Server
     │
     │ "Ping"
     ▼
     │ "Pong"
     │
     ▼
React Client
```

1. The React client establishes a WebSocket connection with the server.
2. The client sends a `Ping` message.
3. The WebSocket server receives the message.
4. The server responds with `Pong`.
5. The client receives the response and displays it using an alert.

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* WebSocket API

### Backend

* Node.js
* TypeScript
* `ws` WebSocket library

## Key Concepts Learned

This project was built to understand the fundamentals of WebSocket communication, including:

* Establishing a WebSocket connection
* Handling client connections on the server
* Sending messages from the client to the server
* Receiving messages on the server
* Sending responses from the server to the client
* Handling incoming messag
