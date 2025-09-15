import React, { useRef, useState } from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";
import CheckValidation from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  //from validation Starts here...

  const email = useRef(null);
  const password = useRef(null);

  const HandlingButtonClick = () => {
    console.log(email.current.value);
    const message = CheckValidation(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);
    if (message) return; // If there's an error message, do not proceed

    // Proceed with sign-in or sign-up logic here
    if (!isSignIn) {
      //SignUp Logic here...
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    } else {
      //SignIn Logic here...
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleHandling = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <img
        src={BG_URL}
        alt="bg-img"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40"></div>{" "}
      {/* optional dark overlay */}
      <Header />
      {/* Login Form */}
      <form
        className="absolute top-1/2 left-1/2 w-1/3 p-10  rounded-xl  transform-none -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-opacity-80  bg-[#000000] opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl py-5">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {/* Only for New User */}
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded bg-[#1e2432]"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-2 mb-4 border rounded bg-[#1e2432]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded bg-[#1e2432]"
        />
        <p className="text-red-700 font-bold text-xl">{errorMsg}</p>
        <button
          className="bg-red-700 w-full p-3 mt-5 text-xl"
          onClick={HandlingButtonClick}
          type="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleHandling}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
