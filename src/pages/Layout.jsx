import {Outlet} from "react-router-dom";
import Navigation from "../Organisms/Navigation";
import '../App.css';

const Layout = () => {
    return (<div className="h-full overflow-hidden">
        <Navigation/>
        <div className="h-full overflow-scroll">
            <Outlet/>
        </div>
    </div>)
}

export default Layout;