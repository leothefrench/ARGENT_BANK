import './header.scss'
import { NavLink } from 'react-router-dom'
import argentBankLogo from '../../img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <nav className='main-nav'>
        <NavLink to='/' className='main-nav-logo'>
            <img 
                className='main-nav-logo-image'
                src={ argentBankLogo }
                alt="Argent Bank Logo" 
            />
            <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
            <NavLink to='/sign-in' className='main-nav-item'>
                {/* <i className="fa fa-user-circle"></i> */}
                <FontAwesomeIcon icon={faCircleUser} className='faCircleHeader'/>
                Sign In
            </NavLink>
        </div>
    </nav>
  )
}