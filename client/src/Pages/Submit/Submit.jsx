import React from "react";
import { useState } from "react";

function Submit() {

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    try {
        const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title, url, text }),
    });
    }
    catch (err) {
      alert('Error connecting to server1');
    }
    
  }
    return (
      <>
      <div>
      <div className="submit-container">
      <div className="header">Y Submit</div>

    <form className="submit-form">
      <label>title<br/>
        <input type="text" name="title" onChange={e => setTitle(e.target.value)}/>
      </label><br/>

      <label>url<br/>
        <input type="text" name="url" onChange={e => setUrl(e.target.value)}/>
      </label><br/>

      <label>text<br/>
        <textarea name="text" rows="5" onChange={e => setText(e.target.value)}></textarea>
      </label><br/>

      <button type="submit" onClick={handleSubmit}>submit</button>
    </form>

    <p className="note">
      Leave url blank to submit a question for discussion. If there is no url, text will appear at the top of the thread. If there is a url, text is optional.
      <br />
      You can also submit via <a href="#">bookmarklet</a>.
    </p>
    </div>
    </div>
    </>
  )
}


export default Submit;