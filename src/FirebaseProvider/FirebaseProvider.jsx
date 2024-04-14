import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext} from "react";
import auth from "../../firebaseConfig";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const FirebaseProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const allValues = {
        createUser
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;