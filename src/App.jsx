import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from './pages/ErrorPage'
import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext()

function App() {
  const [Theme , setTheme] =useState('light')

useEffect(()=>{
  if (Theme == 'light') {
    document.body.classList.remove('dark')
    document.body.classList.add('light')
  }else{
    document.body.classList.remove('light')
    document.body.classList.add('dark')
  }
},[Theme])


  return (
    <ThemeContext.Provider value={{Theme , setTheme}}>
      <Routes>
      <Route path="/" element={<MainLayout><Home></Home></MainLayout>}></Route>
      <Route path="/about" element={<MainLayout><About></About></MainLayout>}></Route>
      <Route path="/products" element={<MainLayout><Products></Products></MainLayout>}></Route>
      <Route path="/details/:id" element={<MainLayout><ProductDetails></ProductDetails></MainLayout>}></Route>
      <Route path="/cart" element={<MainLayout><Cart></Cart></MainLayout>}></Route>
      <Route path="*" element={<MainLayout><ErrorPage></ErrorPage></MainLayout>}></Route>
    </Routes>
    </ThemeContext.Provider>
    
  );
}

export default App;
