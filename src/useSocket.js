import React, { useEffect, useState } from "react"
import socket from "socket.io-client"

const useSocket = (serverUrl, topic) => {
  const [msg, setMsg] = React.useState(null)
  const [isConnected, setConnected] = useState(false)

  const client = socket.connect(serverUrl)
  client.on("connect", () => setConnected(true))
  client.on("disconnect", () => setConnected(false))

  useEffect(() => {
    client.on(topic, data => {
        setMsg(data)
    })
  }, [topic, client])
  return { msg, isConnected }
}

export default useSocket