import { useContext, useState } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Authentication/firebase.config";

const Personal = () => {
    const {user, usersCol} = useContext(AuthContext)
    const [age, setAge] = useState(0)
    console.log(age)
    const userData = usersCol.find(userr=> userr?.doc?.userEmail == user?.email)
    const id = userData?.id

    const changeAge = () =>{
        const userRef = doc(db, 'users', id)
        updateDoc(userRef, {Age: age})
    }
    
    return (
            <div className="max-w-7xl mx-auto">
                <div className="md:grid grid-cols-4">
                    <div className="col-span-3">
                    <div  className="flex justify-between border-2 flex-col lg:flex-row border-black p-5 rounded-lg my-10">
                        <img className="w-1/6" src={`${user?.photoURL ? user?.photoURL : 'https://i.ibb.co/f4hGS6m/image.png'}`} alt="" />
                        <div className="text-xl font-medium">
                            <h1>Name: {userData?.doc?.Name}</h1>
                            <h1>Email: {userData?.doc?.userEmail}</h1>
                            {userData?.doc?.Age ? 
                                <h1>Age: {userData?.doc?.Age}</h1>:
                                <div>
                                    <input type="number" onChange={e=>setAge(e.target.value)} placeholder="Your age" className="border-2 p-2 border-gray-700 w-1/2 h-10"/>
                                    <button onClick={changeAge} className="bg-black rounded-lg text-white p-1 ml-2 h-10">Submit</button>
                                </div>    
                            }
                        <h1>Role: {userData?.doc?.Role}({userData?.doc?.Active? 'Active': 'Inactive'})</h1>
                        </div>
                    </div>

                    </div>
                    <div className="col-span-1"></div>

                </div>
            </div>
    );
};

export default Personal;