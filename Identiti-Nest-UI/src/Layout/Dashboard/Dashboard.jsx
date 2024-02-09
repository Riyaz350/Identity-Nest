import { Outlet } from "react-router-dom";
import { Sidebar } from "../../Components/Shared/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar/>
            <Outlet/>
        </div>
    );
};

export default Dashboard;