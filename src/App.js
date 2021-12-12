import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/login" element={<Login />} />
				<Route path="/404error" element={<NotFound />} />
				<Route path="/register" element={<Register />} />
				<Route path="/forgotpassword" element={<ForgotPassword />} />
			</Routes>
		</Router>
	);
}

export default App;
