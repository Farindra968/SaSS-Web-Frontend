
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route index element={<Home/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
