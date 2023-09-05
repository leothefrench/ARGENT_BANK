import './header.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className='main-nav'>
        <NavLink to='/'>
            <img src="../img/argentBankLogo.png" alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
            <NavLink to='/'>
                <i className="fa fa-user-circle"></i>
                Tony
            </NavLink>
            <NavLink to='/'>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </NavLink>
        </div>
    </nav>
  )
}