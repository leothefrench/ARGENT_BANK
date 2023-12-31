import axios from 'axios'
// IMPORT DES INTERFACES TS
import { LoginData, SignUp, UpdateProfile } from './interfacesCalls'

// [ Base URL: localhost:3001/api/v1 ]
const baseURL = 'http://localhost:3001/api/v1'
const apiUrlLogin = `${baseURL}/user/login`
const apiUrlSignup = `${baseURL}/user/signup`

export const sendDataToApi = async (data: LoginData) => {
    const {email, password} = data

    const dataPosted = {
        email: email,
        password: password
    } 
    try {
    const response = await axios.post(apiUrlLogin, dataPosted)
    const  { token, firstName, lastName } = response.data.body;

    return { token, firstName, lastName };

    } catch(error) {
        console.error(error);
        throw error;
    }
}

export const sendDataToSignUp = (data: SignUp) => {
    const {email, password, firstName, lastName} = data

    const dataPosted = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }

    axios.post(apiUrlSignup, dataPosted)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
}

// POST User Profile
export const fetchUserProfile = async (token: string) => {
    try {
        // Check if token exist
        if (!token) {
            throw new Error('Token not found');
        }

        // On se sert du Token pour le header du la méthode POST
        const headers = {
            'Authorization': `Bearer ${token}`
        }

        // URL endpoint pour récupérer le profile utilisateur
        const apiUrlProfile = `${baseURL}/user/profile`

        // On fait la requête avec POST
        const response = await axios.post(apiUrlProfile, {}, { headers })

        // Récupération des datas du profile
        const dataProfile = response.data.body
        return dataProfile
    }

    catch(error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
}

// PUT User profile
export const updateUserProfile = async (token: string,data: UpdateProfile) => {

    const {firstName, lastName} = data

    try {
        // Check if token exist
        if (!token) {
            throw new Error('Token not found');
        }

        // On introduit le Token dans le header du post
        const headers = {
            'Authorization': `Bearer ${token}`
        }

        // URL endpoint pour récupérer le profile utilisateur
        const apiUrlProfile = `${baseURL}/user/profile`

        // Format des datas à transmettre pour update
        const dataSendToUpdate = {
            firstName: firstName,
            lastName: lastName
        }

        // On fait la requête avec POST
        const response = await axios.put(apiUrlProfile, dataSendToUpdate, { headers })

        // Récupération des datas du profile Updated
        const dataProfileUpdated = response.data.body
        return dataProfileUpdated
    }

    catch(error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
}