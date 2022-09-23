import { Card, Row, Col } from 'antd';
import{ dom } from "@fortawesome/fontawesome-svg-core"
import { faVuejs,faPython } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type skills = {
    name: string,
    icon: any,
}

interface Props {
    title: string;
    skills: skills[];
}
const SkillSection = (props: Props) => {
    const skills=[
        // 在此处新增或删除技能项，每个技能项用逗号进行分隔
        // 图标来源：https://fontawesome.com/icons
        { name: "Python", icon: faVuejs },
      ]
    return(
        <div style={{
            padding: 20
        }}>
        <h3 style={{paddingBottom: 15}}>
          {props.title}
        </h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center mt-4">
        <Row gutter={[32, 24]} justify='center'>
          {props.skills &&
            props.skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="m-2 w-full py-2 sm:mx-0 sm:my-4 sm:w-auto md:mx-2 bg-background-light rounded-lg shadow-md hover:bg-gray-50"
                >
                    <Col span={8}>
                        <Card bordered={true} style={{width: 240, boxShadow: '3px 3px 3px #c0c2c5'}}>
                            <FontAwesomeIcon icon={skill.icon} size='4x' color='#666672'/>
                            <h4 className="text-gray-600 pt-2">{skill.name}</h4>
                        </Card>
                    </Col>
                </div>
              );
            })}
        </Row>
        </div>
      </div>
    )
}

export default SkillSection;