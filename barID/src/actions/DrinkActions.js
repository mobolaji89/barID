import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  DRINK_UPDATE,
  DRINK_CREATE,
  DRINKS_FETCH_SUCCESS,
  DRINK_SAVE_SUCCESS
} from './types';

export const drinkUpdate = ({ prop, value }) => {
  return {
    type: DRINK_UPDATE,
    payload: { prop, value }
  };
};

export const drinkCreate = ({ name, price, status, amount, userID, code, image_url }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('/users/t3of9lsLxheAq9jhYUHkBmMigc72/drinks')
      .push({ name, price, status, amount, userID, image_url, code });

    firebase.database().ref(`/users/${currentUser.uid}/drinks`)
      .push({ name, price, status, amount, image_url, code })
      .then(() => {
        dispatch({ type: DRINK_CREATE });
        Actions.drinkList({ type: 'reset' });
      });
  };
};

export const drinksFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/drinks`)
      .on('value', snapshot => {
        dispatch({ type: DRINKS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const drinkSave = ({ name, price, status, amount, uid, image_url }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/drinks/${uid}`)
      .set({ name, price, status, amount, image_url })
      .then(() => {
        dispatch({ type: DRINK_SAVE_SUCCESS });
        Actions.drinkList({ type: 'reset' });
      });
  };
};

export const drinkDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/drinks/${uid}`)
      .remove()
      .then(() => {
        Actions.drinkList({ type: 'reset' });
      });
  };
};
