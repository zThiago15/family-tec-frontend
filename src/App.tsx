import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing-page/landing-page'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
  )
}

export default App
