import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth, { db } from "./firebase.config"
import { addDoc, collection, onSnapshot, snapshotEqual } from "firebase/firestore";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [usersCol, setUsersCol] = useState([])
    const [loading, setLoading] =useState(true)
    const [user, setUser] =useState(null)
    const [month, setMonth] =useState('january')

    const createUser = ( email, password) =>{
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInPop = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            const Role = 'Member'
            const Name = currentUser?.displayName || user?.displayName 
            const userEmail = currentUser?.email || user?.email
            const Age = 0
            const Active = true
            const userrr = collection(db, 'users')

            
            setUser(currentUser)
            setLoading(false)
            
            if(currentUser){
                const unsubscribe = onSnapshot(userrr, snapshot =>{
                    const uuss =snapshot.docs.map(doc=>({id:doc.id, doc:doc.data()}))
                    setUsersCol(uuss)
                        if(user?.email){
                            const iff = uuss.find(userr =>userr.doc.userEmail == user?.email)
                        if(!iff){
                            addDoc(userrr, {Name, Role, Age, Active, userEmail})
                        }else{
                            console.log('ase already')
                        }
                        }
                    
                })
                return()=>{
                    unsubscribe()
                }
            }
        })
        return()=>{
          unSubscribe()  
        }
    },[user?.email, user?.displayName])

    const authInfo = { user,loading,month, setMonth,usersCol, createUser, signInUser,signInPop, logOut }

return(
<AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
)
}

export default AuthProvider;