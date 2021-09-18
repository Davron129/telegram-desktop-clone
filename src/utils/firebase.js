// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, query, orderBy } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8g",
  authDomain: "telegram-2b524.firebaseapp.com",
  projectId: "telegram-2b524",
  storageBucket: "telegram-2b524.appspot.com",
  messagingSenderId: "70205436114",
  appId: "1:70205436114:web:fd89c21345e6982218bd0b"
};

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
  const userRef = collection(db, "users");
  const q = query(userRef, orderBy("users", "asc"))
  console.log(q)

  const snap = await getDocs(userRef);
  return snap.docs
}