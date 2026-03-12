import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const fireStore = getFirestore(app);

export const getDataProducts = async (collectionName: string) => {
  const snapshot = await getDocs(collection(fireStore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

export const getDataProductById = async ( collectionName: string, id: string) => {
    const response = await getDoc(doc(fireStore, collectionName, id));
    if(response.exists()) {
        return {id: response.id, ...response.data()};
    } 
    const data= await response.data();
    return data;
}


export async function signIn(userData: {email: string}) {
  const queryLogin = query(
    collection(fireStore, "users"),
    where("email", "==", userData.email),
  );

  const snapshot = await getDocs(queryLogin);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if(data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string; 
  },
  callback: Function,
) {
  const queryRegister = query(
    collection(fireStore, "users"),
    where("email", "==", userData.email),
  );

  const snapshot = await getDocs(queryRegister);


  if (!snapshot.empty) {
    callback({ status: false, message: "Email already exists" });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      await addDoc(collection(fireStore, "users"), {
        fullname: userData.fullname,
        email: userData.email,
        password:hashedPassword, 
        role: "user",
        created_at: new Date(),
      });

      callback({ status: true, message: "Register success" });
    } catch (error) {
      callback({ status: false, message: "Registration failed" });
    }
  }
}
