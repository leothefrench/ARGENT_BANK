import './signInForm.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { sendDataToApi } from '../../api/callApi'
import { fetchUserProfile } from '../../api/callApi'
import { login } from '../../reducers/pim'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ApiResponse } from '../../types';

export const SignInForm = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [rememberMe, setRememberMe] = useState(false)

const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }
const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }
const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => { setRememberMe(e.target.checked) }
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     try {
        // Envoie des données à l'API
        const response: ApiResponse = await sendDataToApi({email: username, password: password});

        // Réception du token & utilisation 
        const { token } = response;
        const userProfile = await fetchUserProfile(token)

        dispatch(login({token, ...userProfile}))

        // Navigue vers la page user - qui a ce endpoint
        navigate('/profile/')
     } catch (error) {
        console.log(error);
     }
    }

  return (
    <main className="main bg-dark">
    <section className="sign-in-content">
        {/* <i className="fa fa-user-circle sign-in-icon"></i> */}
        <FontAwesomeIcon icon={faCircleUser} className='sign-in-icon'/>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username"
                    defaultValue={username}
                    required
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password" 
                    defaultValue={password}
                    required
                    onChange={handlePasswordChange}
                />
            </div>
            <div className="input-remember">
                <input 
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">Sign In</button>
        </form>
    </section>
    </main>
  )
}