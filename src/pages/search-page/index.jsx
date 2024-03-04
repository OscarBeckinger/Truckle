//import CombinedMenuItems from "../../components/CombinedMenuItems";
import Search from "../../components/Search";
import TruckLocations from "../../components/TruckLocations";

export const Searchpage = () => {
    return (
        <>
            <Search></Search>
            <div height={100}></div>
            <h2>Times/Locations</h2>
            <TruckLocations></TruckLocations>
            {/*<CombinedMenuItems assocTruck={"None"}></CombinedMenuItems>*/}
        </>
    );
}
