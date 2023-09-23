import './welcome-back.scss'

// import { useState } from 'react';
import { login } from '../../reducers/pim';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../api/callApi';
import { RootState } from '../../types';

interface WelcomeBackProps {
  firstName: string;
  lastName: string;
}

export const WelcomeBack: React.FC<WelcomeBackProps> = ({firstName, lastName}) => {
  
  // const [newFirstName, setNewFirstName] = useState(firstName || '')
  // const [newLastName, setNewLastName] = useState(lastName || '')
  
  const token = useSelector((state: RootState) =>  state.logged.token)
  // console.log(token)
  const newFirstName = useSelector((state: RootState) => state.logged.firstName )
  const newLastName = useSelector((state: RootState) => state.logged.lastName )

  const dispatch = useDispatch()

  // Handler for save button
  const handleSaveClick = async () => {
    // I call the API for updating the data for the user profile who are connected
    try {
      await updateUserProfile(token, {firstName: newFirstName, lastName: newLastName})
      dispatch(login ({ token, firstName: newFirstName, lastName: newLastName }))
    } catch(error) {
      console.log('Erreur de la mise à jour du profil: ', error)
    }
  }

  // Handler for cancel button
  const handleCancelClick = () => {
      dispatch(login({token, firstName: '', lastName: '' }))
  }

  return (
    <div>
      <h1 className='titleWelcomeBack'>Welcome back {firstName} {lastName}</h1><br/>
      <div>
        <input
          type="text"
          value={newFirstName}
          onChange={(e) => dispatch(login({token, firstName: e.target.value, lastName: newLastName}))}
          className='inputWelcomeBack'
        />
        <input
          type="text"
          value={newLastName}
          onChange={(e) => dispatch(login({token, firstName: newFirstName, lastName: e.target.value}))}
          className='inputWelcomeBack'
        />
      </div>
      <div>
        <button className='buttonWelcomeBack' onClick={handleSaveClick}>Save</button>
        <button className='buttonWelcomeBack' onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
};
