// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import useSocket from "./useSocket";

// const Sockt = ({ serverUrl, topic }) => {
//   const { msg, isConnected } = useSocket(serverUrl, topic)

//   const [pesan, setPesan] = useState('')
//   return (
//     <div>
//       <h4>Pesan</h4>
//       <h1>{JSON.stringify(msg)}</h1>

//       <input type="text" onChange={e => setPesan(e.target.value)} />

//       <button></button>
//       <h3>{`CONNECTED: ${isConnected}`}</h3>
//     </div>
//   );
// };

// Sockt.propTypes = {
//   serverUrl: PropTypes.string.isRequired,
//   topic: PropTypes.string.isRequired
// };

// export default Sockt;

import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import useSocket from "./useSocket";
import Axios from "axios";

const Sockt = ({ serverUrl, topic }) => {
  const { msg, isConnected } = useSocket(serverUrl, topic)

  const [pesan, setPesan] = useState('')

  const sendMessage = e =>  {
    e.preventDefault()
    if(pesan.trim() !== '') {
        Axios.post('http://localhost:8080', {pesan})
    } 
    window.scrollTo(0,document.body.scrollHeight)
    setPesan('')
  }

  return ( 
    <Fragment>
        <h2>You are {isConnected ? 'online' : 'offline'}</h2>

        {msg !== null && msg.map( (item, index) => (
            <div className="container" key={index}>
                <img src="https://avatars.io/twitter/asruldev" alt="Avatar" style={{width:'100%'}} />
                <p> {item.pesan} </p>
                <span className="time-right">{ item.waktu } - by { item.ip }</span>
            </div>
        ))}

        <form className="stycky-bottom" onSubmit={e => sendMessage(e)}>
            <input type="text" onChange={e => setPesan(e.target.value)} />
            <button onClick={e => sendMessage(e)}>Send</button>
        </form>
    </Fragment>
  );
};

Sockt.propTypes = {
  serverUrl: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired
};

export default Sockt;
