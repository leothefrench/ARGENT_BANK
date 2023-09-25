import './user.scss'
import { Account } from '../../components/account/Account'
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from '../../types'
import { WelcomeBack } from '../../components/welcome-back/WelcomeBack'
import {toggleEditName} from '../../reducers/pim'

export const User = () => {

  const firstName = useSelector((state: RootState) => state.logged.firstName);
  const lastName = useSelector((state: RootState) => state.logged.lastName);
  const isEditingName = useSelector((state: RootState) => state.logged.isEditingName)

  const dispatch = useDispatch()
  
  const handleToggleEditName = () => {
    dispatch(toggleEditName())
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditingName ? (
          <WelcomeBack firstName={firstName} lastName={lastName} />
        ) : (
          <>
            <h1 className='titleInUser'>Welcome back</h1><br/>
            <h1 className='header-name'>{firstName} {lastName}</h1>
            <button onClick={handleToggleEditName} className="edit-button">Edit Name</button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
      <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
      <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
    </main>
  )
}