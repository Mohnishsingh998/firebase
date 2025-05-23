import {getDatabase , ref ,set} from 'firebase/database'
import { app } from './firebase'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth'
import SignupPage from './pages/signUp';
import React from 'react'

import './App.css';

// const db = getDatabase(app); // Initialize Realtime Database and get a reference to the service
const  auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service
function App() {
  // const putData = ()=>{
  //   set(ref(db, "user/mohnish"),{ // Set the data in the  ref : - to specfifi location where you want to store and fetch data   
  //   // set : it helps in over writing the data
  //   // ref : it helps in specifying the location where you want to store and fetch data
  //   // //database 
  //     id : 1,
  //     name : "Mohnish",
  //     age : 22,
  //   })
  // }
  const signUpUser = ()=>{
    createUserWithEmailAndPassword(auth,'mohnishsingh@gmail.com','mohnish123')
    .then((value) => console.log(value));
  };
  return (
    <div className='App'>
      <SignupPage/>
    </div>
  );
}

export default App