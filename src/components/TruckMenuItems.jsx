import { useGetTruckMenuItems } from "../hooks/useGetTruckMenuItems.js";
const TruckMenuItems = ({ assocTruck }) => {
    const items = useGetTruckMenuItems(assocTruck);
    console.log("COMPONENT ITEMS: ", items);
    //console.log("Assoc Truck: ", assocTruck);
    return (
        <>
            <div>Menu Items</div>
            <div>
                <ul>
                    {items.map((item) => {
                        const { associatedTruck, description, imageurl, title, } = item;
                        return (
                            <div>
                                <li>
                                    <img src={imageurl} alt="menu item" height="100" width="100" />
                                    <h2>{title}</h2>
                                    <h4>{associatedTruck}</h4>
                                    <p>{description}</p>
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>

        </>
    );

}
export default TruckMenuItems;