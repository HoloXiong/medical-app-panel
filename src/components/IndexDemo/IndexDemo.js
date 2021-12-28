import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

// 引入轮播图组件
import CarouselCom from '../CarouselCom/CarouselCom';
import BodyCard from '../BodyCard/BodyCard';

export default class IndexDemo extends Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    <CarouselCom/>
                    <BodyCard/>
                </div>
            </Content>
        )
    }
}
