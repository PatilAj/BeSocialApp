import { Routes, Route } from "react-router-dom"
import Home from "./Component/Home/Home"
import Profile from "./Component/Profile/Profile"
import Dashboard from './Component/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/user/:id" element={<Dashboard/>}></Route>
        <Route path="/Dashboard" element={<Profile/>}></Route>
      </Routes>
    </div>
  )
}

export default App