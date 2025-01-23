import { Button, Divider } from "antd";
import { SolutionOutlined } from "@ant-design/icons"
import TypeIt from "typeit-react";


import "./Home.css"

const Home = () => {
    return (
        <div className="homePage">
            <div className="infoBox">
                <img src="src/assets/images/headshot.jpg" alt="Headshot" className="headshot" />
                <div className="textBox">
                    <TypeIt as="h1"
                        options={{
                            strings: "Hello! My name is Sam.",
                            speed: 60,
                            waitUntilVisible: true,
                        }}
                    />
                    <Divider className="homeDivider" />
                    <p className="infoText">
                        I am currently studying Computer Science at BYU with an emphasis in Software Engineering.
                        I would love to explore how my experience can benefit you and your company, so feel free
                        to contact me to chat!
                    </p>
                </div>

            </div>
            <div className="resumeDownload">
                <p className="constructionText" >My website is still under construction, but in the meantime please take a look at my work experience! </p>
                <a href={"src/assets/documents/SamGwilliamResume.pdf"} download="SamGwilliamResume.pdf">
                    <Button className="gradient-button-resume" icon={<SolutionOutlined />} iconPosition="start">
                        Download My Resumé
                    </Button>
                </a>
            </div>
        </div>
    )
}


export default Home;
