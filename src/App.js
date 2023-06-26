import React from 'react'
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom'
import Crud from './Crud'
import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard"
import About from "./About"
import Cart from "./Cart"
import Search from './Search';
import LocalStorage from './Login';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path='/' element={<LocalStorage />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      {/* <Route path='/about' element={<About />} /> */}
      <Route path='/Cart' element={<Cart />} />
     

      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>

  )
}
