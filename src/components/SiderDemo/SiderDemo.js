import React from 'react';
import 'antd/dist/antd.css';
import './SiderDemo.css';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  MedicineBoxFilled,
} from '@ant-design/icons';
// 引入内容组件
import IndexDemo from '../IndexDemo/IndexDemo';
import PredictionThyroid from '../PredictionThyroid/PredictionThyroid';
import PredictionRenal from '../PredictionRenal/PredictionRenal';
import PredictionColorectal from '../PredictionColorectal/PredictionColorectal';
import PredictionLung from '../PredictionLung/PredictionLung';
import PredictionBreast from '../PredictionBreast/PredictionBreast';
import PredictionBladder from '../PredictionBladder/PredictionBladder';
import NoticeDemo from '../NoticeDemo/NoticeDemo';
import InfoDemo from '../InfoDemo/InfoDemo';
import AboutDemo from '../AboutDemo/AboutDemo';
//引入echarts
import ChartDemo from '../ChartDemo/ChartDemo'

const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    showdemo:<IndexDemo/>
  };
  

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  changeShow=(i)=>{
    switch(i)
    {
      case '1':
        this.setState({showdemo:<IndexDemo/>});
        break;
      case '2':
        this.setState({showdemo:<InfoDemo/>});
        break;
      case '3':
        this.setState({showdemo:<PredictionThyroid/>});
        break;
      case '4':
        this.setState({showdemo:<PredictionRenal/>});
        break;
      case '5':
        this.setState({showdemo:<PredictionColorectal/>});
        break;
      case '6':
        this.setState({showdemo:<PredictionLung/>});
        break;
      case '7':
        this.setState({showdemo:<PredictionBreast/>});
        break;
      case '8':
        this.setState({showdemo:<PredictionBladder/>});
        break;
      case '9':
        this.setState({showdemo:<NoticeDemo/>});
        break;
      case '10':
        this.setState({showdemo:<AboutDemo/>});
        break;
    }
  }

  render() {
    const { collapsed } = this.state;
    
    return (
      <Layout style={{ minHeight: '100vh' }}>
          {/* 侧边菜单 */}
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} className="menu-dark">
          {/* 左上角灰色部分的logo */}
          <div className="logo"> 
            <MedicineBoxFilled style={{fontSize:"220%"}}/>
          </div>
          <Menu defaultSelectedKeys={['1']} mode="inline" className="menu-dark">
            <Menu.Item className="menu-dark" key="1" icon={<PieChartOutlined />} onClick={this.changeShow.bind(this,'1')}>
              首页
            </Menu.Item>
            <Menu.Item className="menu-dark" key="2" icon={<FileOutlined />} onClick={this.changeShow.bind(this,'2')}>
              患者病历信息
            </Menu.Item>
            <SubMenu key="sub3" icon={<TeamOutlined />} title="癌骨转移预测" className="menu-dark">
              <Menu.Item key="3" className="menu-dark" style={{margin:"0px"}} onClick={this.changeShow.bind(this,'3')}>甲状腺癌</Menu.Item>
              <Menu.Item key="4" className="menu-dark" style={{margin:"0px"}} onClick={this.changeShow.bind(this,'4')}>肾细胞癌</Menu.Item>
              <Menu.Item key="5" className="menu-dark" style={{margin:"0px"}} onClick={this.changeShow.bind(this,'5')}>大肠癌</Menu.Item>
              <Menu.Item key="6" className="menu-dark" style={{margin:"0px"}} onClick={this.changeShow.bind(this,'6')}>肺癌</Menu.Item>
              <Menu.Item key="7" className="menu-dark" style={{margin:"0px"}} onClick={this.changeShow.bind(this,'7')}>乳腺癌</Menu.Item>
              <Menu.Item key="8" className="menu-dark" style={{margin:"0px"}} onClick={this.changeShow.bind(this,'8')}>膀胱癌</Menu.Item>
            </SubMenu>
            <Menu.Item className="menu-dark" key="9" icon={<FileOutlined />} onClick={this.changeShow.bind(this,'9')}>
              患者健康信息推送
            </Menu.Item>
            <Menu.Item className="menu-dark" key="10" icon={<FileOutlined />} onClick={this.changeShow.bind(this,'10')}>
              关于
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header-style" style={{ padding: 0 }}>
            <div className="header-title">
              癌骨转移预测医疗系统
            </div>
          </Header>  
          {this.state.showdemo}
          <Footer style={{ textAlign: 'center' }}>AI+Medical Project ©2021 Created by NCU</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
