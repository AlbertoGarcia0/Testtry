import firebase from 'firebase'


export function FB_isUserLogged(firebase_auth){
    return firebase_auth.currentUser !== null
}

export function FB_getCurrUser(firebase_auth){
    return firebase_auth.currentUser
}

export async function FB_Authentication(user_logged, firebase_auth){
    if(user_logged){
        await FB_logOut(firebase_auth)
    }else{
        await FB_logIn(firebase_auth)
    }
    return await FB_isUserLogged(firebase_auth)
}

export function FB_logOut(firebase_auth){
    if(firebase_auth != null){
        firebase_auth.signOut()
    }

}

export function FB_logIn(firebase_auth){
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase_auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
    return firebase_auth.signInWithPopup(googleAuthProvider);
    })
    .catch(function(error) {
    });
}