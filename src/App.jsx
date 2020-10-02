import React from 'react';
import { Layout, Typography, Button, Space, Col, Row } from 'antd';
import "../node_modules/antd/dist/antd.less"
import Menubar from './Script/MainMenu/Menubar';
import "Script/css/App.css";
import MainContent from 'Script/MainMenu/MainContent';
import {
  GithubOutlined
} from '@ant-design/icons';

const App = () => {
  const { Header, Content, Footer } = Layout;
  const { Text, Title } = Typography;

  const footerstyle = {
    backgroundColor: "white",
    textAlign: "center"
  }

  return (

    <>
      <div id="page">
        <Header id="header">
          <Row>
            <Col span={8}>
              <Button style={{
                position:"absolute",
                marginTop:10
              }}>
                <a href="https://github.com/geun9716/KoreanNewsChronicle" target="_blank"><GithubOutlined/> GitHub</a>
              </Button>
            </Col>
            <Col span={8} style={{
              textAlign: "center"
            }}>
              <Title>KNC</Title>
            </Col>
            <Col span={8}>

            </Col>
          </Row>
        </Header>
        <Menubar></Menubar>
        <div id="banner_image">
          <div>
            <Title style={
              {
                color: "white"
              }
            }>What is KNC</Title>
            <Text>Welcom to KNC</Text>
          </div>

        </div>
        <Content>
          <MainContent></MainContent>
        </Content>
        <Footer style={footerstyle}>
          Copyright © KNC Rude_zoo 2020.
        </Footer>

      </div>


    </>


  );
}

export default App;
