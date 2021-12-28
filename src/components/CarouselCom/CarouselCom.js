import { Carousel } from 'antd';
import React, { Component } from 'react'
import Image from './image/1.jpg';

const contentStyle = {
  height: '240px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

// 轮播图组件
export default class CarouselCom extends Component {
    render() {
        return (
            <Carousel autoplay>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        );
    }
}
