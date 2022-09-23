import React from 'react';
import { HashLink } from "react-router-hash-link";

import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Anchor, Col, Layout, Menu, Row } from 'antd';
import AbouteMe from './components/AboutMe';
import ProjectExperience from './components/ProjectExperience';
import AbouteWebSite from './components/AbouteWebSite';
import Interest from './components/Interest';
import MemberBenefits from './components/MemberBenefits';
import Skill from './components/Skill';
import ContactMe from './components/ContactMe';
const { Link } = Anchor;
const { Header, Content, Footer } = Layout;

function App() {
  const scrollWithOffset = (el:any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Layout style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',

    }}>
      <Header
        style={{
          backgroundColor: '#4d9abf',
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          boxShadow: '2px 3px 2px rgb(177, 175, 175)'
        }}
      >
        <Row
          justify='space-between'
        >
          <Col>
          </Col>
          <Col>
            <Menu
              theme="dark"
              style={{ backgroundColor: '#4d9abf', color: '#a3e8fb', borderBottom: 'hidden' }}
              mode="horizontal"
            // defaultSelectedKeys={['1']}
            // items={menu_data()}
            >
              <Menu.Item>
              <HashLink
                smooth
                to="#aboutme"
                scroll={(el) => scrollWithOffset(el)}
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
              >
                <span>关于我</span>
              </HashLink>
              </Menu.Item>
              <Menu.Item>
              <HashLink
                smooth
                to="#projectexperience"
                scroll={(el) => scrollWithOffset(el)}
              >
                <span>最近项目</span>
              </HashLink>
              </Menu.Item>
              <Menu.Item>
              <HashLink
                smooth
                to="#skill"
                scroll={(el) => scrollWithOffset(el)}
              >
                <span>我的技能</span>
              </HashLink>
              </Menu.Item>
              <Menu.Item>
              <HashLink
                smooth
                to="#memberbenefits"
                scroll={(el) => scrollWithOffset(el)}
              >
                <span>组员福利</span>
              </HashLink>
              </Menu.Item>
              <Menu.Item>
              <HashLink
                smooth
                to="#interest"
                scroll={(el) => scrollWithOffset(el)}
              >
                <span>我的兴趣</span>
              </HashLink>
              </Menu.Item>
              <Menu.Item>
              <HashLink
                smooth
                to="#contactme"
                scroll={(el) => scrollWithOffset(el)}
              >
                <span>联系我</span>
              </HashLink>
              </Menu.Item>
              <Menu.Item>
                <a 
                  href={"yang_cv.pdf"}
                  download
                >
                  <span>我的简历</span>
                </a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          backgroundColor: '#fff',
          overflow: 'initial',
          height: '100%',
          alignItems: 'center',
          width: "65%",
          textAlign: 'center',
        }}
      >
        <Row justify='center'>
          <Col span={24}>
            <AbouteMe />
          </Col>
          <ProjectExperience />
          <Col span={24}>
            <Skill />
          </Col>
          <Col span={24}>
            <AbouteWebSite />
          </Col>
          <Col span={24}>
            <MemberBenefits />
          </Col>
          <Col span={24}>
            <Interest />
          </Col>
          <Col span={24}>
            <ContactMe />
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          width: '100%',
          backgroundColor: '#4d9abf',
        }}
      >
        © 2022 YANG
      </Footer>
    </Layout>
  );
}

export default App;
