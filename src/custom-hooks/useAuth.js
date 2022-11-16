import {useState , useEffect} from 'react'
import {auth} from '../../src/firebase/config'
import {onAuthStateChanged} from 'firebase/auth'
const useAuth = () => {
    const [currentUser,setCurrentUser] = useState({})
    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });
    });
    return {
        currentUser
    }
}

export default useAuth;
