import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore, addDoc, collection} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCCXl18R4_xe6p96X0hBlZRl9SvO_eI6KM",
    authDomain: "topic-project-6cc51.firebaseapp.com",
    projectId: "topic-project-6cc51",
    storageBucket: "topic-project-6cc51.appspot.com",
    messagingSenderId: "712743850897",
    appId: "1:712743850897:web:5781c1fa5e5a7abdcd0030",
    measurementId: "G-3GLKQCZE9C"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  export { db };
