
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUix6bwXCqy9r3FEqkig3Obj5rXzTQpBI",
  authDomain: "bloogingapp-react.firebaseapp.com",
  projectId: "bloogingapp-react",
  storageBucket: "bloogingapp-react.appspot.com",
  messagingSenderId: "524019044885",
  appId: "1:524019044885:web:ac11e66210d9ceeea4f41c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app