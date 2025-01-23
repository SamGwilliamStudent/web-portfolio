import { CloudDownloadOutlined } from "@ant-design/icons";
import { Divider, Button, Input } from "antd";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="experience-container">
            <h2>I enjoy writing about technical subjects. Read some of the papers I have recently written!</h2>
            <div className="download-section">
                <div className="download-item">
                    <p>Here is a literature review that I wrote summarizing recent research on prompt engineering.</p>
                    <Divider />
                    <a href="link/to/your/download/file" download="filename">
                        <Button icon={<CloudDownloadOutlined />} iconPosition="start">
                            Download Literature Review
                        </Button>
                    </a>
                </div>
                <div className="download-item">
                    <p>This is a research paper about efforts to classify fake news articles using Machine Learning.</p>
                    <Divider />
                    <a href="link/to/your/download/file" download="filename">
                        <Button icon={<CloudDownloadOutlined />} iconPosition="start">
                            Download Research Paper
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experience;
