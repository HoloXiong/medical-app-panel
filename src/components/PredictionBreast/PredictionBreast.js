import React, { Component } from 'react';
import "./PredictionBreast.css"
import { Layout, Breadcrumb,Steps,Radio,Form, Input, Button,Select,InputNumber,Empty,Divider,DatePicker,Row,Col } from 'antd';

const {Step}=Steps;
const { Content } = Layout;

const options=[
    {label:'手动数据输入',value:'Manually'},
    {label:'医疗资料导入',value:'Auto'},
]

const dateFormat = 'YYYY/MM/DD';

export default class PredictionBreast extends Component {

    formRef=React.createRef();

    state={
        inputway:'Manually',
    };


    onChange=e=>{
        console.log(e.target.value);
        this.setState({
            inputway:e.target.value,
        });
    };

    onGenderChange = (value) => {
        switch (value) {
          case 'male':
            this.formRef.current.setFieldsValue({ note: 'Hi, man!' });
            return;
          case 'female':
            this.formRef.current.setFieldsValue({ note: 'Hi, lady!' });
            return;
        }
      };

    onFinish=(values)=>{
        console.log(values);
    }

    onReset=()=>{
        this.formRef.current.resetFields();
    }

    customFormat = value => `custom format: ${value.format(dateFormat)}`;

    render() {
        const {firstcheckvalue}=this.state;

        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>癌骨转移预测</Breadcrumb.Item>
                    <Breadcrumb.Item>乳腺癌</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    <Steps size="small" current={1}>
                        <Step title='选择数据导入方式'/>
                        <Step title='患者信息录入'/>
                        <Step title='检测数据录入'/>
                        <Step title='完成预测'/>
                    </Steps>
                </div>
                <br/>
                <div className="site-layout-content">
                    <Radio.Group
                        options={options}
                        onChange={this.onChange}
                        value={firstcheckvalue}
                        optionType='button'
                    />
                    <br></br>
                    <br></br>
                    <Form ref={this.formRef} name='MaullyInput' onFinish={this.onFinish} labelCol={{span:6}} wrapperCol={{span:12}}>

                        <Row>
                            <Col span={12}>
                                <Form.Item name='name' label='姓名'>
                                    <Input style={{width:200}}/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name='gender' label='性别'>
                                    <Select
                                        style={{width:200}}
                                        placeholder='请选择患者性别'
                                        onChange={this.onGenderChange}
                                        allowClear
                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <Form.Item name="borndata" label="出生日期">
                                    <DatePicker format={dateFormat} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name='ALP' label='ALP'>
                                    <InputNumber
                                        style={{width:200}}
                                        defaultValue=''
                                        min='0'
                                        max='10000'
                                        step='0.00001'
                                        stringMode
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <Form.Item name='CA125' label='CA125'>
                                    <InputNumber
                                        style={{width:200}}
                                        defaultValue=''
                                        min='0'
                                        max='10000'
                                        step='0.00001'
                                        stringMode
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name='CEA' label='CEA'>
                                    <InputNumber
                                        style={{width:200}}
                                        defaultValue=''
                                        min='0'
                                        max='10000'
                                        step='0.00001'
                                        stringMode
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        
                        <Form.Item wrapperCol={{offset:10}}>
                            <Button type='primary' htmlType='submit'>Prediction</Button>
                            <Button htmlType='button' onClick={this.onReset}>Reset</Button>
                        </Form.Item>

                    </Form>
                    <Divider orientation="center">预测结果</Divider>
                    <div>
                        <Empty/>
                    </div>
                </div>
                
            </Content>
        )
    }
}
