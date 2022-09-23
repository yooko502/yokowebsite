import SkillSection from "./SkillSection";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "antd/lib/col";
import { Card, Row } from "antd";
import { faFlask, faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { faEclipse, faGif } from "@fortawesome/sharp-solid-svg-icons";

export default function Skill() {
  return (
    <div
      id="skill"
      style={{
        paddingTop: 30
      }}
    >
      <h2 className="font-black uppercase pb-4 text-3xl text-yellow-500">
        🔧 我的技能
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        <SkillSection
          title="⌨️ 语言"
          skills={[
            // 在此处新增或删除技能项，每个技能项用逗号进行分隔
            // 图标来源：https://fontawesome.com/icons
            { name: "JavaScript/TypeScript", icon: faJs },
            { name: "Python", icon: faPython },
            { name: "NodeJs", icon: faNodeJs },
            { name: "PHP", icon: faPhp},
            { name: "Java", icon: faJava },
            { name: "HTML", icon: faHtml5 },
            { name: "CSS", icon: faCss3 },
          ]}
        />

        <SkillSection
          title="📚 库/框架"
          skills={[
            // 在此处新增或删除技能项，每个技能项用逗号进行分隔
            { name: "React", icon: faReact },
            { name: "Vue", icon: faVuejs },
            { name: "Flask", icon: faPepperHot },
            { name: "Laravel", icon: faLaravel },
            { name: "Antd", icon: faCodepen },
            { name: "Vuetify", icon: faCodepen },
            { name: "Axios", icon: faCodepen },
            { name: "Fetch", icon: faCodepen },
          ]}
        />

        <SkillSection
          title="🔨 工具"
          skills={[
            // 在此处新增或删除技能项，每个技能项用逗号进行分隔
            { name: "Git", icon: faGit },
            { name: "VSCode", icon: faCodepen },
            { name: "Docker", icon: faDocker },
            { name: "AWS", icon: faAws },
            { name: "Teams", icon: faTeamspeak },
          ]}
        />
        <p>
          更多技能可以下载简历查看哦❤️
        </p>
      </div>
    </div>
  );
}
