import './welcome-back.scss'

import { useState, useEffect } from 'react';
import { login, toggleEditName } from '../../reducers/pim';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../api/callApi';
import { RootState } from '../../types';

interface WelcomeBackProps {
  firstName: string;
  lastName: string; 
}

export const WelcomeBack: React.FC<WelcomeBackProps> = () => {
    
  const token = useSelector((state: RootState) =>  state.logged.token)
  const newFirstName = useSelector((state: RootState) => state.logged.firstName )
  const newLastName = useSelector((state: RootState) => state.logged.lastName )
  
  const dispatch = useDispatch()

  const [localFirstName, setLocalFirstName] = useState(newFirstName);
  const [localLastName, setLocalLastName] = useState(newLastName);

  useEffect(() => {
    setLocalFirstName(newFirstName);
    setLocalLastName(newLastName);
  }, [newFirstName, newLastName]);

  // Handler for save button
  const handleSaveClick = async () => {
    try {
      // Vérifiez si les champs d'entrée ne sont pas vides avant la mise à jour
      if (localFirstName.trim() !== '' && localLastName.trim() !== '') {
        await updateUserProfile(token, { firstName: localFirstName, lastName: localLastName })
        dispatch(login({ token, firstName: localFirstName, lastName: localLastName }))
        dispatch(toggleEditName());
      }
    } catch(error) {
      console.log('Erreur de la mise à jour du profil: ', error)
    }
  }

  // Handler for cancel button
  const handleCancelClick = () => {
    // Réinitialisez les champs d'entrée
    setLocalFirstName('');
    setLocalLastName('');
    // TIMER
    setTimeout(() => {
      dispatch(toggleEditName());
    }, 1000)
    
  }

  // Handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Mise à jour l'état local en fonction du champ d'entrée modifié
    if (e.target.name === 'first-name') {
      setLocalFirstName(e.target.value);
    } else if (e.target.name === 'last-name') {
      setLocalLastName(e.target.value);
    }
  }

  return (
    <div>
      <h1 className='titleWelcomeBack'>Welcome back</h1><br/>
      <div>
        <input
          type="text"
          name="first-name"
          value={localFirstName}
          onChange={handleInputChange}
          className='inputWelcomeBack'
        />
        <input
          type="text"
          name="last-name"
          value={localLastName}
          onChange={handleInputChange}
          className='inputWelcomeBack'
        />
      </div>
      <div>
        <button className='buttonWelcomeBack' name="save" onClick={handleSaveClick}>Save</button>
        <button className='buttonWelcomeBack' name="cancel" onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
};