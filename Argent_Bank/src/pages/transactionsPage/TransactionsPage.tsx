import './transactionsPage.scss'
import { Transaction } from '../../components/transactions/Transaction'


export const TransactionsPage = () => {
  return (
    <>
        <Transaction className='accountTransaction' title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance'/>
    </>
  )
}