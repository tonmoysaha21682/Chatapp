import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './firebaseConfig.jsx'
import 'react-toastify/dist/ReactToastify.css';
import Registrationa from './Pages/Registration/Registrationa.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/registar",
    element: <div><Registrationa></Registrationa></div>,
  },
  {
    path: "/login",
    element: <div><Login></Login></div>,
  },
  {
    path: "/",
    element: <div><Home></Home></div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
