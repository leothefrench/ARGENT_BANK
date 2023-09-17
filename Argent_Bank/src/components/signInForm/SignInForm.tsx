import './signInForm.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { sendDataToAPi } from '../../api/callApi'

export const SignInForm = () => {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [rememberMe, setRememberMe] = useState<boolean | undefined>(false)

const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }
const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }
const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => { setRememberMe(e.target.checked) }
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     try {
        await sendDataToAPi(username, password)
     } catch(error) {
        console.log(error);
        
     }
    
    }


  return (
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
                    value={username}
                    required
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password" 
                    value={password}
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
  )
}