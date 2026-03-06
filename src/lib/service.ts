import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./firebase";


const fireStore = getFirestore(app);
export const getDataProducts = async (collectionName: string) => {
    const snapshot = await getDocs(collection(fireStore, collectionName))

    const data= snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    return data;
}