import { useGetTrucks } from "../../hooks/useGetTrucks";
export const Homepage = () => {
    const { trucks } = useGetTrucks();
    return (
        <>
            <div>Home Page1</div>
            <div className="truck-list-homepage">
                <ul>
                    {trucks.map((truck) => {
                        const { description, imageurl, title } = truck;
                        return (
                            <div className="truck-list-item-div">
                                <li>
                                    <img src={imageurl} alt="food truck" height="200" width="200" />
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