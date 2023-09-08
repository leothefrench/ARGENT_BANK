import './welcome-back.scss'

interface WelcomeBackProps {
  firstName: string;
  lastName: string;
}

export const WelcomeBack: React.FC<WelcomeBackProps> = ({firstName, lastName}) => {
  return (
    <div>
        <h1>Welcome back</h1><br />
        <div>
            <input type="text" value={firstName} className='inputWelcomeBack' />
            <input type="text" value={lastName} className='inputWelcomeBack' />
        </div>
        <div>
            <button className='buttonWelcomeBack'>Save</button>
            <button className='buttonWelcomeBack'>Cancel</button>
        </div>
    </div>
  )
}