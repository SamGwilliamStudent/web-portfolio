import { Button, Divider } from "antd";
import { SolutionOutlined } from "@ant-design/icons"
import TypeIt from "typeit-react";


import "./Home.css"

const Home = () => {
    const handleDownload = () => {
        const pdfUrl = "https://web-portfolio-sam.s3.us-west-2.amazonaws.com/SamGwilliamResume.pdf";

        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');

        // Trigger the download (simulating click on the download link)
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = "SamGwilliamResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="homePage">
            <div className="infoBox">
                <img src="https://web-portfolio-sam.s3.us-west-2.amazonaws.com/headshot.jpg" alt="Headshot" className="headshot" loading="lazy" />
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
                <a href={"https://web-portfolio-sam.s3.us-west-2.amazonaws.com/SamGwilliamResume.pdf"} download="SamGwilliamResume.pdf" target={"_blank"}>
                    <Button className="gradient-button-resume" icon={<SolutionOutlined />} iconPosition="start">
                        View and Download My Resumé
                    </Button>
                </a>
            </div>
        </div>
    )
}


export default Home;
