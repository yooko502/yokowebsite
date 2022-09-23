import Card from "antd/lib/card";
import Collapse from "antd/lib/collapse";

const AbouteWebSite = () => {
    const textArr = [
        {id: "001", title: "搭建方法", text: "本站采用server less的方法构建，优点是不需要管理服务器，发布迅速便捷"},
        {id: "002", title: "使用服务", text: "本站在Google cloud 上搭建，使用的google的xxx,xxxx,xxx"}
    ]
    return(
        <div>
            <div style={{
                paddingTop: 40,
                paddingBottom: 30
            }}>
                <h1>🌏 关于这个网站的配置</h1>
            </div>
            <Card
                bodyStyle={{
                    padding: 0,
                    boxShadow: '-0.3em 0 .4em #c0c2c5'
                }}
            >
            <Collapse
                ghost
                defaultActiveKey={['001']}
                // ghost
                // style={{
                //     width: "100%",
                //     // textAlign:"left"
                // }}
            >
                {textArr.map(item => (
                    <Collapse.Panel
                        showArrow={false}
                        header={item.title}
                        key={item.id}
                    >
                        <p>{item.text}</p>
                    </Collapse.Panel>
                ))}
            </Collapse>
            </Card>          
        </div>
    )
}

export default AbouteWebSite;