import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './pages/ProductList'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Welcome to the E-commerce webiste</h2>
        <ProductList />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
