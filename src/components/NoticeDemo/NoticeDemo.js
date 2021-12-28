import React, { Component } from 'react';
import { List,Divider,Layout, Breadcrumb,Row,Col,Collapse,Pagination, Descriptions,Timeline,Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;

const data=[
    '111',
    '222',
    '333',
]

const {Panel}=Collapse;

export default class NoticeDemo extends Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>患者健康信息推送</Breadcrumb.Item>
                </Breadcrumb>
                <Row className="site-layout-content">
                    <Col span={10} offset={1}>
                        <Divider orientation='center'>重点病患</Divider>
                        <Collapse accordion>
                            <Panel header='病患1号' key="1">
                                <p>
                                    <Descriptions>
                                        <Descriptions.Item label="姓名">xxx</Descriptions.Item>
                                        <Descriptions.Item label="性别">男</Descriptions.Item>
                                        <Descriptions.Item label="年龄">18</Descriptions.Item>
                                        <Descriptions.Item label="诊断方向">xx癌</Descriptions.Item>
                                    </Descriptions>
                                    <Descriptions layout="vertical">
                                        <Descriptions.Item label="历史预测结果">
                                            <Timeline>
                                                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                                                    Technical testing 2015-09-01
                                                </Timeline.Item>
                                                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                            </Timeline>
                                        </Descriptions.Item>
                                    </Descriptions>
                                </p>
                            </Panel>
                            <Panel header='病患2号' key="2">
                                <p>
                                <Descriptions>
                                        <Descriptions.Item label="姓名">xxx</Descriptions.Item>
                                        <Descriptions.Item label="性别">男</Descriptions.Item>
                                        <Descriptions.Item label="年龄">18</Descriptions.Item>
                                        <Descriptions.Item label="诊断方向">xx癌</Descriptions.Item>
                                    </Descriptions>
                                    <Descriptions layout="vertical">
                                        <Descriptions.Item label="历史预测结果">
                                            <Timeline>
                                                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                                                    Technical testing 2015-09-01
                                                </Timeline.Item>
                                                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                            </Timeline>
                                        </Descriptions.Item>
                                    </Descriptions>
                                </p>
                            </Panel>
                            <Panel header='病患3号' key="3">
                                <p>
                                <Descriptions>
                                        <Descriptions.Item label="姓名">xxx</Descriptions.Item>
                                        <Descriptions.Item label="性别">男</Descriptions.Item>
                                        <Descriptions.Item label="年龄">18</Descriptions.Item>
                                        <Descriptions.Item label="诊断方向">xx癌</Descriptions.Item>
                                    </Descriptions>
                                    <Descriptions layout="vertical">
                                        <Descriptions.Item label="历史预测结果">
                                            <Timeline>
                                                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                                                    Technical testing 2015-09-01
                                                </Timeline.Item>
                                                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                            </Timeline>
                                        </Descriptions.Item>
                                    </Descriptions>
                                </p>
                            </Panel>
                        </Collapse>

                        
                        <Pagination
                            showSizeChanger
                            onShowSizeChange={this.onShowSizeChange}
                            defaultCurrent={1}
                            total={10}
                        />

                    </Col>

                    <Col span={10} offset={2}>
                        <Divider orientation='center'>标准数据</Divider>
                        <List
                            size='default'
                            bordered
                            dataSource={data}
                            renderItem={item=>(
                                <List.Item>{item}</List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Content>
        )
    }
}
