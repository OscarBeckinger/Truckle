import './auth.css';
import acaiBowlImage from '../auth/assets/acaibowl.png';
import burgerImage from '../auth/assets/burger.png';
import bulgogiRiceImage from '../auth/assets/bulgogirice.png';
import donutsImage from '../auth/assets/donuts.png';
import iceCreamImage from '../auth/assets/icecream.png';
import mangoRiceImage from '../auth/assets/mangorice.png';
import mangoSmoothieImage from '../auth/assets/mangosmoothie.png';
import tacoImage from '../auth/assets/taco.png';
import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../auth/assets/TruckleImage.png';


export const Auth = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const results = await signInWithPopup(auth, provider);
            if (results.user.email.endsWith('@g.ucla.edu')) { 
                const authInfo = {
                    userID: results.user.uid,
                    name: results.user.displayName,
                    profilePhoto: results.user.photoURL,
                    isAuth: true,
                    email: results.user.email,
                    creationDate: results.user.metadata.creationTime, 
                };
                console.log(results.user.email);
                console.log(results.user.displayName)
                localStorage.setItem("auth", JSON.stringify(authInfo));
                navigate("/home-page");
            } else {
                // Sign out the user if the email domain is not @g.ucla.edu
                alert("Please use email with @g.ucla.edu domain name. ");
                await auth.signOut();
            }
        } catch (error) {
            if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
                //console.log("ERROR: ", error);
                console.log('User cancelled the sign-in process');
            } else {
                //console.log("ERROR: ", error);
                alert("Firebase API Error, Please try rerunning the Set Up Script:     (./set_up.sh) you may have entered the API key incorrectly. If this Error Presists then Firebase might be down, wait a couple minutes and it should be fine.");
            }
        };
    };
    return (
        <div className='auth-page'>
            <p>Login With Google Account</p>
            <button className="google-login-button" onClick={signInWithGoogle}>Sign In With Google</button>
            
            <div className="truckle-logo">
               <img src = {logo} className ="logo"/>


           </div>
            
            <div className="acaiBowl">
                <img src = {acaiBowlImage} alt= "acai-bowl" className="images-d"/>
            </div>
            <div className="burger">
                <img src = {burgerImage} alt= "burger" className="images-d"/>
            </div>
            <div className="bulgogiRice">
                <img src = {bulgogiRiceImage} alt= "bulgogi-rice" className="images-d"/>
            </div>
            <div className="donuts">
                <img src = {donutsImage} alt= "donuts" className="images-d"/>
            </div>
            <div className="iceCream">
                <img src = {iceCreamImage} alt= "ice-cream" className="images-d"/>
            </div>
            <div className="mangoRice">
                <img src = {mangoRiceImage} alt= "mango-rice" className="images-d"/>
            </div>
            <div className="mangoSmoothie">
                <img src = {mangoSmoothieImage} alt= "mango-smoothie" className="images-d"/>
            </div>
            <div className="taco">
                <img src = {tacoImage} alt= "taco" className="images-d"/>
            </div>
        </div>
    );
};
