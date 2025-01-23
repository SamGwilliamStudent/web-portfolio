import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./MainTemplate.css";

const { Header, Content } = Layout;

const MainTemplate = () => {
	return (
		<Layout className="layout">
			<Header className="header">
				<Navbar />
			</Header>
			<Content className="site-layout-content">
				<Outlet />
			</Content>
			<Footer />
		</Layout>
	);
};

export default MainTemplate;
