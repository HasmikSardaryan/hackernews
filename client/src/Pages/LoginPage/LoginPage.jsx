// import React from "react";
// import './LoginPage.css'
// function Login() {
//     return(
//         <>
//         <div>
//             <p>Login</p>
//             <span>
//             Username:    
//             <input type="text" placeholder="username"/>
//             </span>
//             <span>
//             Password:
//             <input type="text" placeholder="password"/>
//             {/* <Link>Forgot your password?</Link> */}
//             </span>
//             <button>Login</button>
//         </div>
//         <div>
//             <p>Create Account</p>
//             <span>
//             Username:
//             <input type="text" placeholder="username"/>
//             </span>
//             <span>
//             Password:
//             <input type="text" placeholder="password"/>
//             </span>
//             <button>create account</button>
//         </div>
//         </>
//     )
// }

// export default Login




import React, { useState } from "react";
import './LoginPage.css';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        // mode: 'no-cors'
      }
    );
      const data = await response.json();
      if (response.ok) {
        alert('Account created!');
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (err) {
      alert('Error connecting to server');
    }
  };

  return (
    <div>
      <p>Create Account</p>
      <span>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </span>
      <span>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </span>
      <button onClick={handleRegister}>Create Account</button>
    </div>
  );
}

export default Login;
