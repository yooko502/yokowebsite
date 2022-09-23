import Card from "antd/lib/card";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from "antd/lib/card/Meta";
import Avatar from "antd/lib/avatar";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { useState } from "react";
import Modal from "antd/lib/modal";

const ProjectExperience = () => {
    const project_data = [
        {
            id: "001",
            title: "自社开发 以iot为基础的BI,AI项目",
            description: "主要负责前端页面开发，前后端端口定义，后端api",
            label: ["#react", "#typescript", "#python"],
            detail:"qqqqq",
        },
        {
            id: "002",
            title: "面向政府 中小企业厅补助金项目",
            description: "负责前端所有开发任务，参与task制定，接口定义",
            label: ["#vue", "#aws", "#python"],
            detail:"wwww",
        },
        {
            id: "003",
            title: "出售各类演出的票务会员系统",
            description: "新规项目，主要负责编写详细设计书，batch开发",
            label: ["#laravel", "#php"],
            detail:"eeeee",
        },
    ]

    const card_laber = (description: string, label: string[]) => (
        <>
            <div><p style={{ color: "black", textAlign: "left" }}>{description}</p></div>
            <div style={{ textAlign: "left" }}>
                {
                    label.map(item => (`${item} `))
                }
            </div>
        </>
    )

    const card_title = (title: string) => (
        <>
            <div style={{ textAlign: "left" }}>{title}</div>
        </>
    )

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDetail, setModalDetail] = useState("");

    const showModal = (title: string, detail: string) => {
        setIsModalOpen(true);
        setModalTitle(title);
        setModalDetail(detail)
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div
            id="projectexperience"
            style={{ textAlign: 'center', padding: 40 }}
        >
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <h1>👩🏻‍💻最近项目经历</h1>
            </div>
            <div style={{ width: "100%" }}>
                <Row gutter={[32, 32]} justify='center'>
                    {
                        project_data.map(item => (
                            <div>
                                <Col span={8}>

                                    <Card
                                        key={item.id}
                                        style={{
                                            width: 450,
                                        }}
                                        hoverable={true}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                        onClick={()=>showModal(item.title, item.detail)}
                                    >
                                        <Meta
                                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                            title={card_title(item.title)}
                                            description={card_laber(item.description, item.label)}
                                        />
                                    </Card>
                                </Col>
                            </div>
                        ))
                    }
                </Row>
            </div>
            <Modal 
                title={modalTitle}
                open={isModalOpen}
                onCancel={handleCancel}
                // centered={true}
                footer={null}
            >
                <div>{modalDetail}</div>
            </Modal>
        </div>
    )
}

export default ProjectExperience;