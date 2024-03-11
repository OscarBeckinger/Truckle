//import CombinedMenuItems from "../../components/CombinedMenuItems";
import Search from "../../components/Search";
import TruckLocations from "../../components/TruckLocations";
import Navbar from "../../components/Navbar";
import "./styles.css";
export const Searchpage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Search></Search>
            <div height={100}></div>
            <div className="locations">
                <TruckLocations></TruckLocations>
            </div>
            {/*<CombinedMenuItems assocTruck={"None"}></CombinedMenuItems>*/}
        </>
    );
}
