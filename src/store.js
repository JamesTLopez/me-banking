import {createStore,combineReducers} from 'redux'
import firebase from 'firebase'
import 'firebase/firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer} from 'redux-firestore'
import { createFirestoreInstance } from 'redux-firestore'
import notifyReducer from './Reducers/notifyReducer'
import settingsReducer from './Reducers/settingsReducer'

const firebaseConfig = {
  apiKey: "AIzaSyDsE5PzzAmhri7p2bdpdoTCeOJu0mRgJxc",
  authDomain: "me-banking.firebaseapp.com",
  databaseURL: "https://me-banking.firebaseio.com",
  projectId: "me-banking",
  storageBucket: "me-banking.appspot.com",
  messagingSenderId: "811007446564",
  appId: "1:811007446564:web:f956aa6bcfc2af83b0d2b1"

}
//react-redux firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)
// init firestore
firebase.firestore();


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notifyReducer: notifyReducer,
  settingsReducer:settingsReducer
})

//Local Store

if(!localStorage.getItem('settingsReducer')){

  const defaultSettings = {
    disableBalanceOnAdd:true,
    disableBalanceOnEdit:false,
    allowRegistration:false

  }

  localStorage.setItem('settingsReducer',JSON.stringify(defaultSettings))

}


const initialState = {settingsReducer: JSON.parse(localStorage.getItem('settingsReducer'))}


export const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}
