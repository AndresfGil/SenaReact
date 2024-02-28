import { EmailAuthProvider, reauthenticateWithCredential, updatePassword, verifyBeforeUpdateEmail } from "firebase/auth";
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword } from "../../firebase/providers";
import { checkingCredentials, login, logout, setActiveUser, setUsersList } from "./";


export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startCreatingUserWithEmailPassword = ({ name, phone, address, email, password }) => {

  return async (dispatch) => {

    const result = await registerUserWithEmailPassword({ name, phone, address, email, password, rol: 'cliente' });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(logout());
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const result = await loginWithEmailPassword({ email, password });
      if (!result.ok) return dispatch(logout(result.errorMessage));

      const usersCollectionRef = collection(FirebaseDB, "users");
      const userDocRef = doc(usersCollectionRef, result.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();

        dispatch(setActiveUser(userData));
      } else {

        console.warn("Información del usuario no encontrada en Firestore");
      }
      dispatch(login(result));

    } catch (error) {

      console.error("Error al iniciar sesión:", error);
      dispatch(logout("Error al iniciar sesión"));
    }
  };
};

export const startUpdatingUser = ({ email, oldPassword, newPassword, displayName, lastname, age, photoURL }) => {

  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const userData = { email, newPassword, displayName, lastname, age, photoURL, };

    try {
      const user = FirebaseAuth.currentUser;

      if (email && email !== user.email) {

        const credentials = EmailAuthProvider.credential(user.email, oldPassword);
        await reauthenticateWithCredential(user, credentials);

        await verifyBeforeUpdateEmail(user, email);

      }

      if (newPassword) {

        const credentials = EmailAuthProvider.credential(user.email, oldPassword);

        await reauthenticateWithCredential(user, credentials);

        await updatePassword(user, newPassword);

      }

      const usersCollectionRef = collection(FirebaseDB, "users");
      const userDocRef = uid ? doc(usersCollectionRef, uid) : null;

      await updateDoc(userDocRef, { displayName, lastname, age, photoURL });
      console.log("Datos actulizados");

      dispatch(setActiveUser(userData));

      return Promise.resolve();

    } catch (error) {
      console.error("Error updating user:", error);
      return Promise.reject(error);
    }
  };
};

export const startLoadingUsers = () => {
  return async (dispatch) => {
    try {
      const usersCollectionRef = collection(FirebaseDB, "users");
      const usersCollectionsSnapshot = await getDocs(usersCollectionRef);

      const usersData = [];
      usersCollectionsSnapshot.forEach(doc => {
        const userData = doc.data();
        usersData.push(userData);
      });

      dispatch(setUsersList(usersData));

    } catch (error) {
      console.error('Error al obtener las colecciones de usuarios desde Firestore:', error);
      return { ok: false, errorMessage: error.message };
    }
  }
};

export const updateUserRole = async (userId, newRole) => {
  try {
    const userDocRef = doc(FirebaseDB, 'users', userId);

    await updateDoc(userDocRef, {
      rol: newRole
    });

  } catch (error) {
    console.error(`Error al actualizar el rol para el usuario con ID ${userId}:`, error);
    throw error;
  }
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
