import './user.scss'
import { Account } from '../../components/account/Account'
import { Link } from 'react-router-dom'

export const User = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <Link to='/user/edit-username'  className="edit-button">Edit Name</Link>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
      <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
      <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
    </main>
  )
}