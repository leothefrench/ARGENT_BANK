import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/home/Home'
import { SignInForm } from '../signInForm/SignInForm'
import { User } from '../../pages/user/User'
import { EditUserName } from '../../pages/edit-user-name/EditUserName'
import { Error } from '../../pages/error/Error'

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <SignInForm /> } />
        <Route path='/user' element={ <User /> } />
        {/* <Route path='/profile' element={ <EditUserName /> } /> */}
        <Route path='*' element={ <Error /> } /> 
    </Routes>
  )
}