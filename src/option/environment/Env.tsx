
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXeTs0UOnHbjI1gEIcSpw9watzaLB9d5I",
  authDomain: "monosushi-eb6f8.firebaseapp.com",
  databaseURL: "https://monosushi-eb6f8-default-rtdb.firebaseio.com",
  projectId: "monosushi-eb6f8",
  storageBucket: "monosushi-eb6f8.appspot.com",
  messagingSenderId: "475071618503",
  appId: "1:475071618503:web:dcbfaf26218b1f65e7cde2"
};
export const app = initializeApp(firebaseConfig);