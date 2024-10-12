import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import useInventory from './hooks/useInventory'

function App() {
  const { inventory, changeQuantity } = useInventory();

  return (
    <>
      <Header />
      <Home />
      <Shop inventory={inventory} changeQuantity={changeQuantity}/>
      <Cart inventory={inventory} changeQuantity={changeQuantity}/>
      <Footer />
    </>
  )
}

export default App
