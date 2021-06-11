import React from "react";
import { Landpage } from "./Landpage";
import { Games } from "./Games";
import "./Home.css";
import { TopUpHome } from "./TopUpHome";
export const Home = () => {
    return (
        <div className="home">
            <Landpage />
            <Games />
            <TopUpHome />
        </div>
    );
};
