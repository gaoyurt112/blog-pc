import './App.css'
import Login from './pages/Login'
import LayOut from './pages/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/layout' element={<LayOut></LayOut>}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
