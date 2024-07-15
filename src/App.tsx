import React, { useState } from 'react';

const URL = (phone: string, text: string) => `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;

const App = () => {

  const [phone, setPhone] = useState<string>('');
  const [text, setText] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = URL(phone, text? text : 'hola');
    // window.open(url, '_blank');
    window.location.href = url;
  };

  return (
    <>
      <header>
        <img src='img/banner.jpg' id='logo' alt='logo'></img>
        <h1>Open in WhatsApp</h1>
        <p>Start a chat with any phone number you want<br/>without the need to add it as a contact!</p>
      </header>
      <article>
        <form onSubmit={handleSubmit}>
          <label>Phone number:</label>
          <input type="text" required value={phone} placeholder='e.g. +1234567890' pattern='\+[0-9]{7,}' onChange={(e) => setPhone(e.target.value)} />
          <label>Message:</label>
          <input type="text" placeholder='(optional)' value={text} onChange={(e) => setText(e.target.value)} />
          <button type="submit" className='btn'>Submit</button>
        </form>
      </article>
    </>
  );
}

export default App;
