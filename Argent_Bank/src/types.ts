export interface RootState {
    logged: {
        isLoggedIn: boolean
        firstName: string
    }
}

export interface ApiResponse {
    token: string;
    firstName: string;
    lastName: string;
}