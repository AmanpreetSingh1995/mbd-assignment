import "./login.css";

import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className="main">
			<div className="sub-main">
				<div>
					<h1>Login Page</h1>
					<div>
						<input type="text" placeholder="user name" className="name" />
					</div>
					<div className="second-input">
						<input type="password" placeholder="password" className="name" />
					</div>
					<div className="login-button">
						<button>Login</button>
					</div>

					<p className="link">
						<Link to="/forgotPassword">Forgot password ?</Link> Or
						<Link to="/register"> Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
