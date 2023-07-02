import React from 'react';
import { HashLink } from "react-router-hash-link";
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Anchor, Button, Col, Dropdown, Layout, Menu, Row, Space, Typography } from 'antd';
import AbouteMe from './components/AboutMe';
import ProjectExperience from './components/ProjectExperience';
import AbouteWebSite from './components/AbouteWebSite';
import Interest from './components/Interest';
import MemberBenefits from './components/MemberBenefits';
import Skill from './components/Skill';
import ContactMe from './components/ContactMe';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';

const { Link } = Anchor;
const { Header, Content, Footer } = Layout;

function App() {
  const { t, i18n } = useTranslation();
  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const menu_data = [
    { link: "#aboutme", title: "about_me" },
    { link: "#projectexperience", title: "project" },
    { link: "#skill", title: "skill" },
    { link: "#memberbenefits", title: "memberbenefits" },
    { link: "#interest", title: "interest" },
    // { link: "#contactme", title: "联系我" },
  ]

  const languageChange = (language_type: string) =>{
    i18n.changeLanguage(language_type);
  }

  const language_data = () => (
    <Menu
      theme="dark"
      // style={{ backgroundColor: '#4d9abf', color: '#a3e8fb', borderBottom: 'hidden' }}
      mode="horizontal"
    // defaultSelectedKeys={['1']}
    // items={menu_data()}
    >
      <Menu.Item key="japanese" onClick={()=>languageChange("ja")}>
        <span>{t('japanese')}</span>
      </Menu.Item>
      <Menu.Item key="chinese" onClick={()=>languageChange("cn")}>
        <span>{t('chinese')}</span>
      </Menu.Item>
    </Menu>
  );

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
          justify='end'
        >
          <Col>
            <Dropdown overlay={language_data} placement="bottomLeft">
              <Typography.Link>
                <Space>
                  <Button type="text" style={{color: "white"}}>{t('translatison')}</Button>
                </Space>
              </Typography.Link>
            </Dropdown>
          </Col>
          <Col>

            <Menu
              theme="dark"
              style={{ backgroundColor: '#4d9abf', color: '#a3e8fb', borderBottom: 'hidden' }}
              mode="horizontal"
            // defaultSelectedKeys={['1']}
            // items={menu_data()}
            >
              {
                menu_data.map((item, index) => (
                  <Menu.Item key={index}>
                    <HashLink
                      smooth
                      to={item.link}
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      <span>{t(item.title)}</span>
                    </HashLink>
                  </Menu.Item>
                ))
              }
              <Menu.Item key="yang_cv">
                <a
                  href={"yang_cv.pdf"}
                  download
                >
                  <span>{t('my_cv')}</span>
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
          {/* <Col span={24}>
            <ContactMe />
          </Col> */}
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
