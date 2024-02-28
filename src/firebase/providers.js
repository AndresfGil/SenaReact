import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseAuth, FirebaseDB } from "./config";

export const registerUserWithEmailPassword = async ({ email, phone, address, name, password, rol }) => {

  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    const { uid } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, {
      email,
      password,
    });

    const userData = {
      name,
      uid,
      phone,
      address,
      rol
    };

    const usersCollectionRef = collection(FirebaseDB, "users");
    const userDocRef = doc(usersCollectionRef, uid);
    await setDoc(userDocRef, userData);

    return {
      ok: true,
      uid,
      email,
      password,
      name,
      phone,
      address,
      rol
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, name } = resp.user;

    return {
      ok: true,
      uid,
      name,
      email,
      password,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
