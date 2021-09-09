// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8g",
  authDomain: "telegram-2b524.firebaseapp.com",
  projectId: "telegram-2b524",
  storageBucket: "telegram-2b524.appspot.com",
  messagingSenderId: "70205436114",
  appId: "1:70205436114:web:fd89c21345e6982218bd0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addUser = async(name, age) => {
    try {
        addDoc(collection(db, "users"), {
          first: name,
          born: age
        });
        console.log("Created");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const getUsers = async () => {
    // const users = await getDocs(collection(db, "users"));
    // console.log(users)
    // const docRef = doc(db, "users", 0)
    const querySnapshot = await getDocs(collection(db, "users"));
    // const querySnapshot = await getDocs(docRef);
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    console.log(doc)
    });

}

getUsers();

// addUser("Davron Normuminov", 19);



// console.log(usersData)