import * as firebase from 'firebase'

export const firebaseInit = () => {
  const config = {
    apiKey: 'AIzaSyCG09vXhmY2Ngz8kuW1hfkwav-lK9ZSVYs',
    authDomain: 'which-movie-d85e6.firebaseapp.com',
    databaseURL: 'https://which-movie-d85e6.firebaseio.com',
    messagingSenderId: '1032160847254',
    projectId: 'which-movie-d85e6',
    storageBucket: 'which-movie-d85e6.appspot.com'
  }

  firebase.initializeApp(config)
}
