import authReducer, { AuthState } from "./auth/duck"

export interface RootState {
    auth: AuthState,
}

export const rootReducer = {
    auth: authReducer,
}
