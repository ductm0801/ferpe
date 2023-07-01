import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import FormAddEdit from "./components/FormAddEdit";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/add" element={<FormAddEdit></FormAddEdit>}></Route>
        <Route path="/update/:id" element={<FormAddEdit></FormAddEdit>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
