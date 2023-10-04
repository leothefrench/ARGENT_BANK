import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home } from '../../pages/home/Home'
import { SignInForm } from '../signInForm/SignInForm'
import { User } from '../../pages/user/User'
import { Error } from '../../pages/error/Error'

export const Router = () => {

  const token = useSelector((state) => state.logged.token)
  console.log(token);

  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <SignInForm /> } />
        <Route path='/profile' element={token ? (<User />) : (<Navigate to='/login' replace />) } />
        <Route path='*' element={ <Error /> } /> 
    </Routes>
  )
}