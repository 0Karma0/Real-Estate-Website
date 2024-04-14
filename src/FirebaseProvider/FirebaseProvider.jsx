import { createContext } from "react";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const FirebaseProvider = ({children}) => {

    const allValues = {name: 'text'}

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;