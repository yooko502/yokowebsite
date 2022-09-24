import Card from "antd/lib/card";
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
            title: "新规项目 BI,AI项目",
            description: "负责前端页面开发，前后端接口定义，后端api",
            label: ["#react", "#typescript", "#python", "#postgresql"],
            detail: 
                `此项目为敏捷开发项目，本项目前端采用react框架，后端使用python的flask框架，
                在这个项目中，我担当sublead的职责，
                主要负责前端页面开发和接口定义，api编写，并协同现场面试其他协力者，
                提供面试问题，评价面试的协力者能力等。同时，也参与了部分db
                定义和修改。`,
        },
        {
            id: "002",
            title: "新规项目 日本中小企业厅补助金项目",
            description: "负责前端所有开发任务，参与task制定",
            label: ["#vue", "#aws", "#python", "#postgresql"],
            detail: 
                `
                此项目为敏捷开发的完全新规项目，所有开发基于aws提供的服务，前端采用vue框架使用aws cloud9进行协同开发，
                后端使用python依托于aws api geteway，aws lambda构筑的service less架构。我担当sublead的职责，
                负责所有前端的统筹（分配task给组员，指定task完成时长，参与每2周的发布），设计，实装等工作。`,
        },
        {
            id: "003",
            title: "新规项目 演出的票务会员系统",
            description: "新规项目，负责编写详细设计书，batch开发",
            label: ["#laravel", "#php", "#mysql", "#docker"],
            detail: 
                `本项目为新规项目，采用laravel框架，数据库使用的是mysql。
                我在前期参与了db关系梳理，编写ddl等，后期主要负责详细设计书的编写，以及用户通知batch的实装。`,
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
                            <div key={item.id}>
                                <Col span={8}>

                                    <Card
                                        style={{
                                            width: 400,
                                        }}
                                        hoverable={true}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                        onClick={() => showModal(item.title, item.detail)}
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