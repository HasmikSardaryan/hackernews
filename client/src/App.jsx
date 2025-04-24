import { Link } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/LoginPage/LoginPage';
import Submit  from './Pages/Submit/Submit';
import NotFoundPafge from './Pages/NotFoundPage/NotFoundPafge';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'

// App.use(cors());

const router = createBrowserRouter([
  { path: '/', element: <HomePage/> , errorElement: <NotFoundPafge/>},
  { path: '/login', element: <Login/>, errorElement:<NotFoundPafge/>},
  { path: '/submit', element: <Submit/>, errorElement:<NotFoundPafge/>},

]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App