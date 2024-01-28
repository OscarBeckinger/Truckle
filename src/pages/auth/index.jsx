import { auth, provider } from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'

export const Auth = () => {
    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider);
        console.log(results);
    };
    return (<div className='auth-page'>
        <p>Login With Google Account</p>
        <button className="google-login-button" onClick={signInWithGoogle}> {" "} Sign In With Google</button>
    </div>
    );
};