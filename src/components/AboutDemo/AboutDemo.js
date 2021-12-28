import React, { Component } from 'react'
import './AboutDemo.css'
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

export default class AboutDemo extends Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>关于</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    
                </div>
            </Content>
        )
    }
}
