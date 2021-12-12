import "./forgotPassword.css";

export default function ForgotPassword() {
	return (
		<div className="main">
			<div className="sub-main">
				<div>
					<h1>Forgot Password</h1>
					<div>
						<input type="email" placeholder="Email" className="name" />
					</div>
					<div className="submit-button">
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
}
