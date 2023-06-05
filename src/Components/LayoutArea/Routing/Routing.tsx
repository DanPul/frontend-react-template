import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import About from "../../AboutArea/About/About";
import Data from "../../DataArea/Data/Data";

function Routing(): JSX.Element {
    return (
        <Routes>

            {/* Home Page: */}
            <Route path="/home" element={<Home />} />

            {/* About Page: */}
            <Route path="/about" element={<About />} />

            {/* Data Page: */}
            <Route path="/vacations" element={<Data />} />

            {/* Default Route - redirect back to "/home": */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Page not found: */}
            <Route path="*" element={<PageNotFound />} />
            
        </Routes>
    );
}

export default Routing;
