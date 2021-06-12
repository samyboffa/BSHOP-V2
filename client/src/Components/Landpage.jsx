import React, { useState } from "react";
import { loop } from "../svg/svg";
import { useHistory } from "react-router-dom";

import "./Landpage.css";

export const Landpage = () => {
    const history = useHistory();
    const [searchInput, setsearchInput] = useState("");
    return (
        <div className="LandpageTotal">
            <div className="LandpageTitles">
                <h3 className="LandpageSubtitle">
                    All Your Games.. In One Place
                </h3>
                <h1 className="LandpageTitle"> B-Shop</h1>
            </div>
            <form
                className="searchBarLandPage"
                onSubmit={(e) => {
                    e.preventDefault();
                    history.push(`/search/${searchInput}`);
                }}
            >
                <div className="landpageInputBox">
                    {loop}
                    <input
                        type="text"
                        className="SearchInputLandpage"
                        placeholder="What Are You Looking For ?"
                        onChange={(e) => setsearchInput(e.target.value)}
                    />
                </div>
                <button type="submit" className="submitSearchInput">
                    {" "}
                    GO
                </button>
            </form>
        </div>
    );
};
