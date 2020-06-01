import React from 'react';

import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCJ7GoQ-ge4CiWdwXXDwGv-3ivnVspBN4k",
    authDomain: "testtry-firebase.firebaseapp.com",
    databaseURL: "https://testtry-firebase.firebaseio.com",
    projectId: "testtry-firebase",
    storageBucket: "testtry-firebase.appspot.com",
    messagingSenderId: "487652346924",
    appId: "1:487652346924:web:ae9224a6ea8a8958741589"
  };


firebase.initializeApp(firebaseConfig)

export default function getFB(){
    return firebase
}