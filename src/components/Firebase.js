import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyA0wZg2JcqhPjHg7zTXMmptzvN4NTlmCpk",

  authDomain: "auth-2c4ee.firebaseapp.com",

  projectId: "auth-2c4ee",

  storageBucket: "auth-2c4ee.appspot.com",

  messagingSenderId: "465552013213",

  appId: "1:465552013213:web:3ff9e3651915e91b45e174"

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("profilePic",profilePic);

    }).catch((error) =>{
        console.log(error);
    })

}