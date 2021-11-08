import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


// initialize Firebase app
initializeFirebase();


const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [user, setUser] = useState({});
    const auth = getAuth();


    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsLoading(false));

    }


    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));

    }


    // observe user state
    useEffect(() => {
        const unsubscirbe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscirbe;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }
    return {
        user,
        registerUser, logOut, loginUser, isLoading
    }
};

export default useFirebase;