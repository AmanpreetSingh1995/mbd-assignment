import "./register.css";

import { Link } from "react-router-dom";

export default function Register() {
	return (
		<div className="main">
			<div className="sub-main">
				<div>
					<h1>Register Page</h1>
					<div>
						<input type="text" placeholder="user name" className="name" />
					</div>
					<div className="second-input">
						<input type="email" placeholder="email" className="name" />
					</div>
					<div className="second-input">
						<input type="password" placeholder="password" className="name" />
					</div>
					<div className="login-button">
						<button>Register</button>
					</div>

					<p className="link">
						<Link to="/forgotPassword">Forgot password ?</Link> Or
						<Link to="/login"> Sign In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
