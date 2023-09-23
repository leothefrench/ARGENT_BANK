import './user.scss'
import { Account } from '../../components/account/Account'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {RootState} from '../../types'

export const User = () => {

  const firstName = useSelector((state: RootState) => state.logged.firstName);
  const lastName = useSelector((state: RootState) => state.logged.lastName);

  return (
    <main className="main bg-dark">
      <div className="header">
          <h1>Welcome back<br />{firstName} !</h1>
          <Link to='/profile'  className="edit-button">Edit Name</Link>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
      <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
      <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
    </main>
  )
}