import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/LoginPage/LoginPage';
import Submit  from './Pages/Submit/Submit';
import NotFoundPafge from './Pages/NotFoundPage/NotFoundPafge';
import Reset from './Pages/ResetPage/ResetPage';
import MainContent from './Pages/Welcome/Welcome';
import JobsPage from './Pages/JobsPage/JobsPage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

const router = createBrowserRouter([
  { path: '/', element: <HomePage/> , errorElement: <NotFoundPafge/> },
  { path: '/login', element: <Login/>, errorElement:<NotFoundPafge/> },
  { path: '/submit', element: <Submit/>, errorElement:<NotFoundPafge/> },
  { path: '/forgot', element: <Reset/>, errorElement:<NotFoundPafge/> },
  { path: '/welcome', element: <MainContent/>, errorElement: <NotFoundPafge/> },
  { path: '/jobs', element: <JobsPage/>, errorElement: <NotFoundPafge/> }
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App