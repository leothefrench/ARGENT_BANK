import './transactions.scss'
import { Account } from '../account/Account'

interface AccountProps {
  title: string;
  amount: string;
  description: string;
}

export const Transaction: React.FC<AccountProps> = ({title, amount, description}) => {
  return (
    <main className="main bg-lightBlue">
      <h2 className="sr-only">Accounts</h2>
      <Account title={title} amount={amount} description={description} />
    </main>
  )
}