import { useGetTrucks } from "../../hooks/useGetTrucks";
import { useNavigate } from "react-router-dom";
export const Homepage = () => {
    const { trucks } = useGetTrucks();
    const navigate = useNavigate();

    //naviagtion test 
    const handleClick = (navStr) => {
        navigate(navStr);
    };

    return (
        <>
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