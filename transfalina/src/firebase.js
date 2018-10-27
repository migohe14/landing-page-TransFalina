import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBBmF0zwQLTjli-unDAvNAfbMvSljR4Yro",
    authDomain: "transfalina-4e46c.firebaseapp.com",
    databaseURL: "https://transfalina-4e46c.firebaseio.com",
    projectId: "transfalina-4e46c",
    storageBucket: "transfalina-4e46c.appspot.com",
    messagingSenderId: "157022875548"
});

export const db = firebaseApp.database()
export const storage = firebaseApp.storage()
export const auth = firebaseApp.auth()