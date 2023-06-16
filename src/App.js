import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
    return (
        <div className="App">
            <BrowserRouter className>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Login />} />
                        {/* Sign out button will take user to the Login page */}
                        <Route path="Login" element={<Login />} /> 
                        <Route path="Home" element={<Home />} /> 
                        <Route path="UserProfile" element={<UserProfile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
