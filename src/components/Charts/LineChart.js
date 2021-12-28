import React, { Component } from 'react'
import * as echarts from 'echarts'

export default class LineChart extends Component {
    componentDidMount(){
        // 利用准备好的dom初始化echarts
        let myChart = echarts.init(document.getElementById("lineChart"))
        const option = {
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['癌骨转移概率', '2016', '2017', '2018', '2019', '2020', '2021'],
                    ['患者张三', 0.102, 0.190, 0.190, 0.138, 0.395, 0.230],
                    // ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                    // ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    // ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category', name: '检查时间'},
            yAxis: {gridIndex: 0, name: '癌骨转移概率'},
            grid: {top: '20%'},
            series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                // {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                // {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                // {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            ]
        };
    
        myChart.setOption(option);
    }
    render() {
        return (
            // 准备一个容器
            <div id="lineChart" style={{width:"1200px",height:"700px"}}>
                
            </div>
        )
    }
}
