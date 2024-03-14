import algoliasearch from "algoliasearch";
import { useState, useEffect } from "react";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch";
import SearchMenuItem from "./SearchMenuItem";
import { algoliaAppID } from "../api";
import "./search.css";

const Search = () => {
    
    const [searchClient, setSearchClient] = useState(null);
    useEffect(() => {
        setSearchClient(algoliasearch(algoliaAppID, 'ee22c38b9d035ce5b9ad0e4a4f4689bd')); //public keys (admin key is only one you really need private, but we keep App ID private for extra security)
    }, [])

    const Hit = ({ hit }) => {
        return (
            <div>
                 
                <SearchMenuItem hit={hit}></SearchMenuItem>
            </div>
          
        );
    }

    return (
        <div> 
            {searchClient &&
                <div>
                    <InstantSearch searchClient={searchClient} indexName="menu_items">
                        <SearchBox className="search-button svg" placeholder="Search Menu Items" searchAsYouType={true} />
                        <Hits hitComponent={Hit} />
                       

                    </InstantSearch>   
                
                   
                </div>
             
            }
           
        </div>
         
       
        
    );
}

export default Search;