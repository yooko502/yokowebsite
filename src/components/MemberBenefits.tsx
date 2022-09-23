import { Col, Row } from "antd";
import Avatar from "antd/lib/avatar";
import List from "antd/lib/list";

const MemberBenefits = () =>{
    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ];
      
    return(
        <div
            id="memberbenefits"
            style={{
                paddingTop: 40,
                paddingBottom: 30
            }}
        >
            <Row justify="center">
                <Col span={24}>
                    <h1>🎁 组员福利</h1>
                </Col>
                <Col span={24}>
                <div>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    split={false}
                    renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            style={{
                                textAlign: "center"
                            }}
                            // avatar={<Avatar
                            //     src="https://joeschmoe.io/api/v1/random" />}
                                title={<><Avatar
                                    src="https://joeschmoe.io/api/v1/random" />{`🥇${item.title}`}</>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                    )}
                />
            </div>
                </Col>
            </Row>
        </div>
    )
}

export default MemberBenefits;