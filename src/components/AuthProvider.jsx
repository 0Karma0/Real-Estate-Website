import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import {auth} from "../../firebaseConfig"

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>console.log(result.user))
    }
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>console.log(result.user))
    }

    const authInfo = {
        registerUser,
        loginUser
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;