import './login.css';
import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const results = await signInWithPopup(auth, provider);
            // Check if the user's email domain is @g.ucla.edu
            if (results.user.email.endsWith('@g.ucla.edu')) {
                const authInfo = {
                    userID: results.user.uid,
                    name: results.user.displayName,
                    profilePhoto: results.user.photoURL,
                    isAuth: true,
                    email: results.user.email,
                };
                localStorage.setItem("auth", JSON.stringify(authInfo));
                navigate("/home-page");
            } else {
                // Sign out the user if the email domain is not @g.ucla.edu
                await auth.signOut();
                alert('Please sign in with your @g.ucla.edu email.');
            }
        } catch (error) {
            if (error.code === 'auth/cancelled-popup-request') {
                // User cancelled the sign-in process
                // console.log('User cancelled the sign-in process');
            }
        }
    };

    return (
        <div className='auth-page'>
            <p>Login With Google Account</p>
            <button className="google-login-button" onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    );
};
