
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import SinglePage from './pages/product/SinglePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route index element={<Home/>} />
      <Route path="/product/:id" element={<SinglePage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
