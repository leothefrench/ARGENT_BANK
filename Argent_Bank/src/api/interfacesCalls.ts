// INTERFACE LOGIN - FUNCTION sendDataToApi
export interface LoginData {
    email: string,
    password: string
}

// INTERFACE SIGN UP - FUNCTION sendDataToSignUp
export interface SignUp {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

// INTERFACE SIGN UP - FUNCTION updateUserProfile
export interface UpdateProfile {
    firstName: string,
    lastName: string
}