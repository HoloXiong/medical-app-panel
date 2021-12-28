import React, { Component } from 'react'
import "./InfoDemo.css"
import { Layout, Breadcrumb,Descriptions,Divider } from 'antd';
import {
    IdcardOutlined,
    SolutionOutlined
} from '@ant-design/icons';

// 引入组件
import ChartDemo from '../ChartDemo/ChartDemo';

const { Content } = Layout;

export default class InfoDemo extends Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>患者病历信息</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">

                    <div>
                        <div style={{fontSize:'20px'}}>
                            <IdcardOutlined/> 患者信息
                        </div>
                        <br/>
                        <Descriptions>
                            <Descriptions.Item label="姓名"></Descriptions.Item>
                            <Descriptions.Item label="性别"></Descriptions.Item>
                            <Descriptions.Item label="出生年月"></Descriptions.Item>
                            <Descriptions.Item label="入院时间"></Descriptions.Item>
                            <Descriptions.Item label="入院号码"></Descriptions.Item>
                            <Descriptions.Item label="性质"></Descriptions.Item>
                            <Descriptions.Item label="主治医生"></Descriptions.Item>
                            <Descriptions.Item label="血型"></Descriptions.Item>
                            <Descriptions.Item label="过敏信息"></Descriptions.Item>
                        </Descriptions>
                        <Descriptions layout="vertical">
                            <Descriptions.Item label="检测信息">
                                <ChartDemo/>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>

                    <Divider/>

                    <div>
                        <div style={{fontSize:'20px'}}>
                            <SolutionOutlined/> 联系人信息
                        </div>
                        <br/>
                        <Descriptions>
                            <Descriptions.Item label="姓名"></Descriptions.Item>
                            <Descriptions.Item label="关系"></Descriptions.Item>
                            <Descriptions.Item label="联系电话"></Descriptions.Item>
                            <Descriptions.Item label="联系地址"></Descriptions.Item>
                        </Descriptions>
                    </div>

                </div>
            </Content>
        )
    }
}
