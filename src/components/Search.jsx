import algoliasearch from "algoliasearch";
import { useState, useEffect } from "react";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch";
import SearchMenuItem from "./SearchMenuItem";
import "./search.css";

const Search = () => {
    const [searchClient, setSearchClient] = useState(null);
    useEffect(() => {
        setSearchClient(algoliasearch('L9VGEOMP3C', 'ee22c38b9d035ce5b9ad0e4a4f4689bd'))
    }, [])

    const highlightedClasses = {
        root: 'text-lg font-bold text-gray-700'
    }

    const searchClasses = {
        input: 'text-sm rounded-md p-2 border outline-none focus:border-indigo-600 transition duration-200',
        submit: 'w-8 h-8 ml-2',
        submitIcon: 'w-4 h-4',
        root: 'w-fit mx-auto'
    }

    const hitClasses = {
        root: 'max-w-lg mt-4',
        list: 'flex flex-col gap-y-3',
        item: 'flex felx-col gap-y-2 [&>h2]:font-bold'
    }

    const Hit = ({ hit }) => {
        return (
            <div>
                <SearchMenuItem hit={hit}></SearchMenuItem>
            </div>
        );
    }

    return (
        <>
            <div>
                {searchClient &&
                    <div>
                        <InstantSearch searchClient={searchClient} indexName="menu_items">
                            <SearchBox className="test" placeholder="Search Menu Items" searchAsYouType={true}></SearchBox>
                            <Hits className={hitClasses} hitComponent={Hit}></Hits>
                        </InstantSearch>
                    </div>
                }
            </div>

        </>
    );

}
export default Search