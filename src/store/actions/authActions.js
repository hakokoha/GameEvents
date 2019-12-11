export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0],
          eventsParticipating: []
        })
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }

  export const participateInEvent = (eventId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const personId = getState().firebase.auth.uid;
        var personsEventsParticipating;
        personsEventsParticipating = profile.eventsParticipating.length > 0 ? 
                      JSON.parse(JSON.stringify(profile.eventsParticipating)) :
                      personsEventsParticipating = [];

        // eventId - current eventId
        // personsEventsParticipating - all event the person is participating
        if(personsEventsParticipating.includes(eventId)) {
          personsEventsParticipating = personsEventsParticipating.filter(event => event !== eventId)
        } else {
          personsEventsParticipating.push(eventId);
        }

        firestore.collection('users').doc(`${personId}`).set({
            ...profile,
            eventsParticipating: personsEventsParticipating
        }).then(() => {
            dispatch({ type: "PARTICIPATE_EVENT" });
        }).catch((err) => {
            dispatch({ type: "PARTICIPATE_EVENT_ERROR", err});
        });
    }
};