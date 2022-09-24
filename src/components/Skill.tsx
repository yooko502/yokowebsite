import {
  faVuejs,
  faPython,
  faJava,
  faJs,
  faNodeJs,
  faPhp,
  faHtml5,
  faCss3,
  faReact,
  faCodepen,
  faLaravel,
  faGit,
  faDocker,
  faAws,
  faTeamspeak
} from "@fortawesome/free-brands-svg-icons"
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "antd/lib/card";

export default function Skill() {
  const skill_data = [
    {
      title: "⌨️ 语言",
      skills: [
        // 图标来源：https://fontawesome.com/icons
        { name: "JavaScript/TypeScript", icon: faJs },
        { name: "Python", icon: faPython },
        { name: "NodeJs", icon: faNodeJs },
        { name: "PHP", icon: faPhp },
        { name: "Java", icon: faJava },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
      ]
    },
    {
      title: "📚 库/框架",
      skills: [
        { name: "React", icon: faReact },
        { name: "Vue", icon: faVuejs },
        { name: "Flask", icon: faPepperHot },
        { name: "Laravel", icon: faLaravel },
        { name: "Antd", icon: faCodepen },
        { name: "Vuetify", icon: faCodepen },
        { name: "Axios", icon: faCodepen },
        { name: "Fetch", icon: faCodepen },
      ]
    },
    {
      title: "🔨 工具",
      skills: [
        { name: "Git", icon: faGit },
        { name: "VSCode", icon: faCodepen },
        { name: "Docker", icon: faDocker },
        { name: "AWS", icon: faAws },
        { name: "Teams", icon: faTeamspeak },
      ]
    }
  ]
  return (
    <div
      id="skill"
      style={{
        paddingTop: 30
      }}
    >
      <h2>
        🔧 我的技能
      </h2>
      {
        skill_data.map((item, index) => (
          <div
            key={index}
            style={{
              padding: 20
            }}
          >
            <h3 style={{ paddingBottom: 15 }}>
              {item.title}
            </h3>
            <div>
              <Row gutter={[32, 24]} justify='center'>
                {item.skills &&
                  item.skills.map((skill, index) => {
                    return (
                      <div
                        key={index}
                      >
                        <Col span={8}>
                          <Card bordered={true} style={{ width: 240, boxShadow: '3px 3px 3px #c0c2c5' }}>
                            <FontAwesomeIcon icon={skill.icon} size='4x' color='#666672' />
                            <h4>{skill.name}</h4>
                          </Card>
                        </Col>
                      </div>
                    );
                  })}
              </Row>
            </div>
          </div>
        ))
      }
      <p>更多技能请下载我的简历查看哦～</p>
    </div>
  );
}
