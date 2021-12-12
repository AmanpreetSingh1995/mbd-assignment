import "./notfound.css";

import { Link } from "react-router-dom";

import notfound from "../../images/undraw_page_not_found_re_e9o6.svg";

export default function NotFound() {
	return (
		<div className="main">
			<div className="sub-main">
				<div>
					<h1> Page Not Found </h1>
					<img src={notfound} alt="404 Error" />
					<h3>Oops! 😖 </h3>
					<h3>The requested URL was not found on this server.</h3>
					<div className="button">
						<Link to="/">
							<button>Back to Home page</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
