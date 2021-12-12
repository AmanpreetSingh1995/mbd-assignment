import "./home.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";

export default function Home() {
	return (
		<div>
			<Topbar />
			<div className="container">
				<Sidebar />
				<div className="home">
					<FeaturedInfo />
					<Chart
						data={userData}
						title="User Analytics"
						grid
						dataKey="Active User"
					/>
				</div>
			</div>
		</div>
	);
}
