// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId

// apiKey: "AIzaSyB6kWB-6ygbbtKE8Jv5Gfirs9u9ZaNb91w",
// authDomain: "mobile-info-b9fdf.firebaseapp.com",
// projectId: "mobile-info-b9fdf",
// storageBucket: "mobile-info-b9fdf.appspot.com",
// messagingSenderId: "660006227901",
// appId: "1:660006227901:web:babdffb96e0136f7de8cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB6kWB-6ygbbtKE8Jv5Gfirs9u9ZaNb91w",
//   authDomain: "mobile-info-b9fdf.firebaseapp.com",
//   projectId: "mobile-info-b9fdf",
//   storageBucket: "mobile-info-b9fdf.appspot.com",
//   messagingSenderId: "660006227901",
//   appId: "1:660006227901:web:babdffb96e0136f7de8cd4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// export { auth };