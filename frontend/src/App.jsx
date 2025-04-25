import './App.css'
import SignIn from './pages/SignIn'
import Header from './pages/Components/Header'
import SignUp from './pages/SignUp'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/video' element={<VideoPage/>}></Route>

    </Routes>
    </>
  )
}

export default App
