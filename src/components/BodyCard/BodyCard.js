import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import "./BodyCard.css"

// 卡片框
export default class BodyCard extends Component {
    render() {
        return (
            <div className="site-card-wrapper">
                {/* gutter是卡片间的间距 */}
                <Row gutter={16} className="card-padding">
                    <Col span={8}>
                        <Card title="甲状腺癌" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="肾细胞癌" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="大肠癌" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} className="card-padding">
                    <Col span={8}>
                        <Card title="肺癌" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="乳腺癌" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="膀胱癌" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                </Row>
            </div>          
        )
    }
}
