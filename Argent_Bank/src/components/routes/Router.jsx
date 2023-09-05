import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/home/Home'
import { SignIn } from '../../pages/sign-in/SignIn'
import { User } from '../../pages/user/User'

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/sign-in' element={ <SignIn /> } />
        <Route path='/user' element={ <User /> } />
        {/* <Route path='*' element={ <Error /> } />  */}
    </Routes>
  )
}