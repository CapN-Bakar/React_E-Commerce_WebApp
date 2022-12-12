import { signInWithGooglePopup } from "../../utilities/firebase/firebase.utils";

const SignIn = () => {
  //Database and API call should be Asynchronous calls
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
