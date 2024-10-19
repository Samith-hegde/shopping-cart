import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import useInventory from './hooks/useInventory'
import './App.css'

function App() {
  const { inventory, changeQuantity } = useInventory();

  return (
    <>
      <Header />
      <Outlet context={{ inventory, changeQuantity }} />
      <Footer />
    </>
  )
}

export default App
