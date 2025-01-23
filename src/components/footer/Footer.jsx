import {
	GithubOutlined,
	LinkedinOutlined,
	MailOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";

import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">

			<p className="footerText"> Contact me or check out my GitHub Repository here!</p>

			<Divider className="footerDivider" type="vertical" />

			<a href="https://www.linkedin.com/in/sam-gwilliam" target={"_blank"} rel="noopener noreferrer" >
				<LinkedinOutlined className="footerIcon" />
			</a>

			<a href="mailto: sam.gwilliam2000@gmail.com">
				<MailOutlined className="footerIcon" />
			</a>

			<a href="https://github.com/SamGwilliamStudent/web-portfolio" target={"_blank"} rel="noopener noreferrer">
				<GithubOutlined className="footerIcon" />
			</a>
		</footer>
	);
};

export default Footer;
