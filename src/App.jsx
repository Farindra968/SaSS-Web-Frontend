
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route >
      <Route index element={<Home/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
