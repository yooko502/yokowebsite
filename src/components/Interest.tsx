import List from "antd/lib/list";
import Space from "antd/lib/space";
import React from "react";

const Interest = () => {
    const data = [
        {
        title: `🧗‍♀️ 爬山`,
        src: 'interest_001.JPG',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content:
            '我很喜欢爬山，来东京的这三年里陆陆续续把东京周边的山都爬遍了，计划2023年爬富士山～',
        },
        {
            title: `⛺️ 露营`,
            src: 'interest_002.JPG',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content:
                '是今年新增加的兴趣，感觉很有意思，和大自然特别近，特别轻松',
        },
        {
            title: `🧙‍♀️ 其他`,
            src: 'interest_003.JPG',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content:
                `我个人非常喜欢户外运动，周末偶尔会去室内攀岩，
                郊外徒步等，也很喜欢旅游和吃吃喝喝和玩switch，最近沉迷splatoon3。
                另外我还是一个哈利波特爱好者。
                `,
        },
    ];

    const IconText = ({ icon, text }: any) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <div
            id="interest"
            style={{
                paddingTop: 40,
                paddingBottom: 30
            }}
        >
            <h1>🎮 我的爱好</h1>
            <div>
                <List
                    itemLayout="vertical"
                    size="small"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item
                            key={index}
                            extra={
                                <img
                                    width={200}
                                    alt="logo"
                                    src={item.src}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={item.title}
                                // description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Interest;