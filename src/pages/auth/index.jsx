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

            const authInfo = {
                userID: results.user.uid,
                name: results.user.displayName,
                profilePhoto: results.user.photoURL,
                isAuth: true,
                email: results.user.email,
            };
            console.log(results.user.email);
            console.log(results.user.displayName)
            localStorage.setItem("auth", JSON.stringify(authInfo));
            navigate("/home-page");
        } catch (error) {
            if (error.code === 'auth/cancelled-popup-request') {
                // User cancelled the sign-in process
                console.log('User cancelled the sign-in process');
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
