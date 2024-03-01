import { useGetTrucks } from "../../hooks/useGetTrucks";
import { useNavigate, Link } from "react-router-dom";

import "./homepage.css";

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
                <Link to="/LeaderBoard" >LeaderBoard</Link>
            </nav>

            <div className="homepage">
                <div className="pageTitle">Home</div>
                <div className="foodTruckList">
                    {trucks.map((truck, index) => {

            <div className="truck-list-homepage">
                <ul>
                    {trucks.map((truck) => {

                        const { description, imageurl, title, navStr } = truck;
                        return (
                            <div className="foodTruckItem" key={index} onClick={() => handleClick(navStr)}>
                                <div style={{ backgroundImage: `url(${imageurl})` }}></div>
                                 <h2 className="truckTitle">{title}</h2>
                                <p>{description}</p>
                            </div>
                            // hello world
                        );
                    })}
                </div>
            </div>
        </>
    );
};