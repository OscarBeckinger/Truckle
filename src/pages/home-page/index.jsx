import { useGetTrucks } from '../../hooks/useGetTrucks';
import { useNavigate, Link } from 'react-router-dom';
import home from '../home-page/assets/TrucklyImageSmall.png';
import move from '../home-page/assets/movingTruck.png';
// import CombinedMenuItems from '../../components/CombinedMenuItems';
import './homepage.css';

export const Homepage = () => {
    const { trucks } = useGetTrucks();
    const navigate = useNavigate();
    const handleClick = (navstr) => {
        // state object can contain any data you want to pass to the destination page.
        navigate(navstr);
    };

    return (
        <>
            {/* is this proper way to do navigation? */}
            <nav>
                <Link to="/AccountSettings" className="accButton">Account Settings</Link>
            </nav>
            <div className="homepage">
                <div className="truckle-home">
                    <img src = {home} className ="home"/></div>

                <div class="background-top"></div>
                <div class="background-bottom"></div>
                                          
                <div className="foodTruckList">
                    {trucks.map((truck, index) => {
                        const { description, imageurl, title, navStr } = truck;
                        return (
                            <div className="foodTruckItem" key={index} onClick={() => handleClick(navStr)}>
                                <div style={{ backgroundImage: `url(${imageurl})` }}></div>
                                 <h2 className="truckTitle">{title}</h2>
                                <p>{description}</p>

                                <div class="move-truck"></div>
                                <img src = {move} className ="move"/>             
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};