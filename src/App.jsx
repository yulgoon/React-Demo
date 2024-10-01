import './App.css'
import {BrowserRouter, Link} from "react-router-dom";
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";
import UserPicker from "./component/users/UserPicker.jsx";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/bookings" className="btn btn-header">
                                    <FaCalendarAlt/>
                                    <span>bookings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bookables" className="btn btn-header">
                                    <FaDoorOpen/>
                                    <span>bookables</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/users" className="btn btn-header">
                                    <FaUsers/>
                                    <span>users</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <UserPicker/>
                </header>
            </div>
        </BrowserRouter>
    )
}

export default App