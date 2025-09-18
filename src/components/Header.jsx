import { LOGO_URL } from "../utils/constant";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./userSlice";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Check user authentication state on component mount
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/dashboard");
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate to login page
        navigate("/");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubcribe();
  }, []);

  //logic for sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //redirect to login page
        //  navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error, "error in sign out");
      });
  };

  return (
    <div className="absolute py-8 px-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between">
      <img src={LOGO_URL} alt="logo-img" className="w-50" />
      {user && (
        <div className="flex p-4 m-4 gap-4">
          <img
            src="/src/assets/profile_img.png"
            alt="profile"
            className="w-8 rounded"
          />
          <button
            className=" cursor-pointer bg-red-700  p-2 rounded-md text-white shadow-lg hover:bg-red-800"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
