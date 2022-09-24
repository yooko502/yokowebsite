import { Col, Row } from "antd";
import List from "antd/lib/list";

const MemberBenefits = () => {
    const data = [
        {
            title: '简历指导',
            description: '可以帮助组内小伙伴修改简历，找出简历里不合理的地方，给出一定修改意见～',
        },
        {
            title: '面试模拟',
            description: '参加过多次社内组织的模拟面试，并担当面试官，且真实的协助过现场面试协力者，希望能帮助到组内小伙伴更快面试成功～',
        },
        {
            title: '技能提升',
            description: '我很喜欢写代码，也想做好这件事，希望你也是～然后大家一起进步一起提升，我会给到我能给的所有帮助～',
        },
        {
            title: '1v1面谈',
            description: '每月一次，一起谈谈现场里遇到的问题～希望能够给到一些有用的建议',
        },
        {
            title: '组内团建',
            description: '每月一次，各种各样的活动～露营～烤肉～卡丁车～大家一起愉快的玩耍～',
        },
    ];

    return (
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
                                            textAlign: "center",
                                            padding: 10
                                        }}
                                        title={<>{`🥇${item.title}`}</>}
                                        // description={item.description}
                                    />
                                    {item.description}
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