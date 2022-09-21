import { useState, useRef } from 'react';

export default function Chat2() {
  const [text, setText] = useState('');
  const alertRef = useRef(text);

  function handleChange(e) {
    setText(e.target.value);
    alertRef.current = e.target.value;
  }
  
  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + alertRef.current);
    }, 3000);
  }



  return (
    <>
      <input
        value={text}
        onChange={handleChange}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}