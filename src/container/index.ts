
import Login from './login/Login';
import Signup from "./signup/Signup";
import App from "./app/App";
import Navbar from "./Navbar/Navbar";
import User from "./user/user";
import Userhome from "./userhome/userhome";
import Crime from "./crime/crime";
import Complaint from "./complaint/complaint";
import Missing from "./missing/missing";
import AddReports from "./addReports/addReports";



import AdminDashboard from "./../container/adminDashboard/adminDashboard";
export const components: any[] = [
    App,
    Login,
    Signup,
    AdminDashboard,
    Navbar,
    User,
    Userhome,
    Crime,
    Complaint,
    Missing,
    AddReports
]

export {
    App,
    Login,
    Signup,
    AdminDashboard,
    Navbar,
    User,
    Userhome,
    Crime,
    Complaint,
    Missing,
    AddReports
}