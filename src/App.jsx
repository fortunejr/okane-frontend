import React from "react"
import './styles/App.css'
import { BrowserRouter,Route,Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Investments from "./pages/Investments"
import BuyInvestments from "./pages/BuyInvestments"
import SellInvestments from "./pages/SellInvestments"
import ProtectedRoute from "./components/ProtectedRoutes"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import InvestmentDetails from './pages/InvestmentDetails'

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route 
        path="/investments" 
        element={
          <ProtectedRoute>
            <Investments />
           </ProtectedRoute>
        } />
        <Route 
        path="/investments/:id" 
        element={
          <ProtectedRoute>
            <InvestmentDetails />
           </ProtectedRoute>
        } />
        <Route 
        path="/investments/buy/:id" 
        element={
          <ProtectedRoute>
            <BuyInvestments />
           </ProtectedRoute>
        } />
        <Route 
        path="/investments/sell" 
        element={
          <ProtectedRoute>
            <SellInvestments />
           </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
