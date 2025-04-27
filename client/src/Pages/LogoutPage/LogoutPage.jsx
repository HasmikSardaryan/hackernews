// import React, { use } from 'react';

// export default function Logout() {

//     useEffect(() => {
//         handleLogout();
//     }, []);
    
//     const handleLogout = async () => {
//     try {
//         const response = await fetch('http://localhost:3000/logout', {
//         method: 'POST',
//         credentials: 'include', 
//     });
            
//     if (response.ok) {
//         localStorage.removeItem('token'); 
//         alert('Logged out successfully!');
//         navigate('/');
//     } else {
//         alert('Logout failed');
//     }
//     } catch (error) {
//          alert('Error connecting to server during logout');
//     }

//     };

//     return (
//         <div>
//           <h1>Logout</h1>
//           <p>You have successfully logged out.</p>
//         </div>
//       );
// } 