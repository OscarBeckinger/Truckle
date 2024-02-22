import { useGetTrucks } from "../../hooks/useGetTrucks";
import { useNavigate, Link } from "react-router-dom";
import "./homepage.css";

export const Homepage = () => {
    const { trucks } = useGetTrucks();
    const navigate = useNavigate();

    //naviagtion test 
    const handleClick = (navStr) => {
        navigate(navStr);
    };

    return (
        <>
    {/* is this proper way to do navigation? */}
        <nav> 
                    <Link to="/AccountSettings" className="accButton">Account Settings</Link>
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
        </>
    );
};