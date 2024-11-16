import MainHeader from "./MainHeader.tsx";
import {Outlet} from "react-router-dom";
import MainFooter from "./MainFooter.tsx";

const MainLayout = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <MainHeader/>
            <main className="space-y-40 mb-40">
                <Outlet/>
            </main>

            <MainFooter/>
        </div>
    );
}

export default MainLayout;