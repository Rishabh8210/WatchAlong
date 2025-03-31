"use client"
import { useEffect, useState } from 'react'

export default function () {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [value, setValue] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:3000');
    
    newSocket.onopen = () => {
      console.log('Connection established');
    };

    newSocket.onmessage = (message) => {
      setData(message.data);
      console.log('Message received:', message.data);
    };

    setSocket(newSocket);

    // Clean up on component unmount
    return () => newSocket.close();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setValue(newValue); // Update state

    
  }
  function handleclick(){
    // Send data only when WebSocket is open and socket is available
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(value); 
      }
  }
  return (
    <div className='h-screen w-full flex justify-center items-center'> 
      <div className='text-2xl font-semibold text-white flex flex-col gap-10'>
        <h1>Hello {data}, this side</h1>
        <input 
          className='h-10 w-96 rounded-md text-white bg-transparent border-2 outline-none px-5'
          type='text'
          name='value'
          value={value}
          placeholder='Enter text'
          onChange={handleChange}
        />
        <button className='h-10 w-fit rounded-md text-white bg-transparent border-2 outline-none px-5' onClick={() => handleclick()}>Send</button>
      </div>
    </div>
  );
}
