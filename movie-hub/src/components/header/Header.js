import "./header.css";
import { useLocation, useHistory } from "react-router-dom";
import Search from "../searchInput/Search";

const PrimaryHeader = () => {
    const location = useLocation();
    const history = useHistory();

    let Component = () => "Movie Detail";
    if (location.pathname === "/") {
        Component = Search;
    }

    const homeClickHandler = () => {
        if (location.pathname !== "/") {
            history.push("/");
        }
    };

    return (
        <header className="header-container">
            <Component />
            <span onClick={homeClickHandler}>Home</span>
        </header>
    );
};

export default PrimaryHeader;
