import List from "antd/lib/list";
import Space from "antd/lib/space";
import React from "react";
import { useTranslation } from 'react-i18next';

const Interest = () => {
    const { t } = useTranslation();
    const data = [
        {
        title: "climb_mountains",
        src: 'interest_001.JPG',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: "climb_mountains_detail",
        },
        {
            title: "camping",
            src: 'interest_002.JPG',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: "camping_detail",
        },
        {
            title: "other",
            src: 'interest_003.JPG',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: "other_detail",
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
            <h1>🎮 {t('interest')}</h1>
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
                                title={t(item.title)}
                                // description={item.description}
                            />
                            {t(item.content)}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Interest;