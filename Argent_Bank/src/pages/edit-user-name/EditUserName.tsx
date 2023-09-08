import './edit-user-name.scss'
import { Account } from '../../components/account/Account'
import { WelcomeBack } from '../../components/welcome-back/WelcomeBack'

export const EditUserName = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
          <WelcomeBack firstName='Tony' lastName='Jarvis'/>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
      <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
      <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
    </main>
  )
}
