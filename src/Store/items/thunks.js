import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { addItems } from './itemsSlice';


export const startAddingItems = ({ Titulo, Precio, Descripcion, Url }) => {
  return async () => {
    try {
      const itemsCollectionRef = collection(FirebaseDB, "items");

      await addDoc(itemsCollectionRef, {
        Titulo,
        Precio,
        Descripcion,
        Url
      });
    } catch (error) {
      console.error("Error al agregar el item a la colección:", error);
    }
  };
}

export const startLoadingItems = () => {
  return async (dispatch) => {
    try {
      const itemsCollectionRef = collection(FirebaseDB, "items");
      const itemsCollectionsSnapshot = await getDocs(itemsCollectionRef);

      const itemsData = [];
      itemsCollectionsSnapshot.forEach((doc) => {
        // Obtenemos el ID de cada documento
        const itemId = doc.id;
        // Obtenemos los datos de cada documento
        const itemData = doc.data();
        // Agregamos el ID al objeto de datos del producto
        const itemWithId = { ...itemData, uid: itemId };
        // Agregamos el producto con su ID al array de datos de productos
        itemsData.push(itemWithId);
      });

      dispatch(addItems(itemsData));

    } catch (error) {
      console.error('Error al obtener las colecciones de usuarios desde Firestore:', error);
      return { ok: false, errorMessage: error.message };
    }
  }
}

export const startUpdatingItem = async (producto) => {
  try {
    // Extraer el UID del producto
    const { uid, ...updatedData } = producto;

    // Llamar a la función de actualización en Firestore
    await updateItemInFirestore(uid, updatedData);

    console.log('El item se actualizó correctamente en Firestore.');
  } catch (error) {
    console.error('Error al actualizar el item en Firestore:', error);
  }
};

const updateItemInFirestore = async (uid, updatedData) => {
  const itemDocRef = doc(FirebaseDB, 'items', uid);

  await updateDoc(itemDocRef, updatedData);
};



export const starDeletingItem = async (uid) => {
  try {
    const itemDocRef = doc(FirebaseDB, 'items', uid);

    await deleteDoc(itemDocRef);

    startLoadingItems()

  } catch (error) {
    console.error('Error al eliminar el item de Firestore:', error);
  }
};
