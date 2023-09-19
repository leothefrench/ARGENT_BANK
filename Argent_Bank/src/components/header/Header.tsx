import './header.scss'
import { NavLink } from 'react-router-dom'
import argentBankLogo from '../../img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types'
import { logout } from '../../reducers/pim'

export const Header = () => {
    const isLoggedIn = useSelector((state: RootState) => state.logged.isLoggedIn)
    const firstName = useSelector((state: RootState) => state.logged.firstName)
    console.log(firstName);
    

    const dispatch = useDispatch()

    const handleSignOut = () => { dispatch(logout())}
  
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
            {isLoggedIn ? (
                <NavLink to='/user/login' onClick={handleSignOut} className='main-nav-item'>
                    <FontAwesomeIcon icon={faCircleUser} className='faCircleHeader' />
                    <span>{firstName}</span>
                    <FontAwesomeIcon icon={faArrowRightFromBracket}  className='faCircleHeader' />
                        Sign Out
                </NavLink>
                ) : (
                <NavLink to='/user/login' className='main-nav-item'>
                    <FontAwesomeIcon icon={faCircleUser} className='faCircleHeader' />
                    Sign In
                </NavLink>
                )
            }
        </div>
    </nav>
  )
}