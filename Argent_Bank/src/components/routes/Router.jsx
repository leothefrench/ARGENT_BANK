import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/home/Home'
import { SignInForm } from '../signInForm/SignInForm'
import { User } from '../../pages/user/User'
import { EditUserName } from '../../pages/edit-user-name/EditUserName'
import { Error } from '../../pages/error/Error'

// import { TransactionsPage } from '../../pages/transactionsPage/TransactionsPage'

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/user/login' element={ <SignInForm /> } />
        <Route path='/user' element={ <User /> } />
        <Route path='/user/edit-username' element={ <EditUserName /> } />
        {/* <Route path='/user/transactions' element={ <TransactionsPage /> } /> */}
        <Route path='*' element={ <Error /> } /> 
    </Routes>
  )
}