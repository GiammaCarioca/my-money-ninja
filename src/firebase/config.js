import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDq3vheADJVl_9IkqPR1-kt6e1tfApleDA',
  authDomain: 'my-money-ninja-bcf47.firebaseapp.com',
  projectId: 'my-money-ninja-bcf47',
  storageBucket: 'my-money-ninja-bcf47.appspot.com',
  messagingSenderId: '526065852990',
  appId: '1:526065852990:web:ac76752c6cddfafc26a76f',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
