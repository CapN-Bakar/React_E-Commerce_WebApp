import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utils";

const SignIn = () => {
  //Database and API call should be Asynchronous calls
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
