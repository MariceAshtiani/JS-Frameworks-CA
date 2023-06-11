import StyledSearch from "./styled";
import { useContext } from "react";
import { QueryContext } from "../../Context";

export default function Search ({ data }) {
    const { setQuery } = useContext(QueryContext);

    
    function handleChange(event) {
        const userInput = event.target.value.toLocaleLowerCase();
        const keys = ["title", "description"];

        // 3 characters needed for search filter to work
        if (userInput.length === 0 || userInput.length > 2) {
            const searchResults = data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(userInput))
            );
            setQuery(searchResults);
        }
    }

    return (
        <StyledSearch>
            <input 
            type="text"
            onChange={handleChange}
            onClick={(e) => e.target.scrollIntoView({ behavior: "smooth" })}
            placeholder="Search Products"
            className="search-input"
            />
        </StyledSearch>
    );
};

