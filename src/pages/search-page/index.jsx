//import CombinedMenuItems from "../../components/CombinedMenuItems";
import Search from "../../components/Search";
import TruckLocations from "../../components/TruckLocations";
import Navbar from "../../components/Navbar";
export const Searchpage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Search></Search>
            <div height={100}></div>
            <h2>Times/Locations</h2>
            <TruckLocations></TruckLocations>
            {/*<CombinedMenuItems assocTruck={"None"}></CombinedMenuItems>*/}
        </>
    );
}
