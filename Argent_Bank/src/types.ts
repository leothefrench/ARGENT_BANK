export interface RootState {
    logged: {
        isLoggedIn: boolean,
        token: string, 
        firstName: string,
        lastName: string
    }
}

export interface ApiResponse {
    token: string;
    firstName: string;
    lastName: string;
}