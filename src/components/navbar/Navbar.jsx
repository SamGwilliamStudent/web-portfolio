import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  IdcardOutlined
} from "@ant-design/icons";

import "./Navbar.css"

const Navbar = () => {
  return (
    <div >
      <nav className="navbar">
        <Link className="link" to={"/"}>
          <Button className="gradient-button" icon={<HomeOutlined />} iconPosition={'start'}>
            Home
          </Button>
        </Link>
        <Link className="link" to={"/experience"}>
          <Button disabled className="gradient-button" icon={<ProfileOutlined />} iconPosition={'start'}>
            Experience
          </Button>
        </Link>
        <Link className="link" to={"/about"}>
          <Button disabled className="gradient-button" icon={<IdcardOutlined />} iconPosition={'start'}>
            About
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;