import { useGetTrucks } from "../../hooks/useGetTrucks";
import { useNavigate, Link } from "react-router-dom";
import CombinedMenuItems from "../../components/CombinedMenuItems";

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
            <div>Home Page1</div>
            <div className="truck-list-homepage">
                <ul>
                    {trucks.map((truck) => {
                        const { description, imageurl, title, navStr } = truck;
                        return (
                            <div className="truck-list-item-div">
                                <li>
                                    <img src={imageurl} alt="food truck" height="200" width="200" onClick={() => handleClick(navStr)} />
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
            {/*<MenuItems assocTruck={"None"}></MenuItems>*/}
            <h1>Menu Items</h1>
            <CombinedMenuItems assocTruck={"None"}></CombinedMenuItems>
        </>
    );
};