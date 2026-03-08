import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
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

export const getDataProductById = async ( collectionName: string, id: string) => {
    const response = await getDoc(doc(fireStore, collectionName, id));
    if(response.exists()) {
        return {id: response.id, ...response.data()};
    } 
    const data= await response.data();
    return data;
}