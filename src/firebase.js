// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
    apiKey: "AIzaSyAI1mAxd4TWbq7ZpdkJcsbwP9uAowfhTEY",
    authDomain: "slack-clone-fc11c.firebaseapp.com",
    projectId: "slack-clone-fc11c",
    storageBucket: "slack-clone-fc11c.appspot.com",
    messagingSenderId: "158342085028",
    appId: "1:158342085028:web:2b28a93a0e28186c5e2931",
    measurementId: "G-PXNGRZZ663"
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage(firebaseApp);

export default getFirestore();
