import React, { Component } from 'react';
import * as echarts from 'echarts'

export default class ChartDemo extends Component {
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
                    ['year', '2016', '2017', '2018', '2019', '2020', '2021'],
                    ['甲状腺癌', 0.23, 0.19, 0.28, 0.47, 0.33, 0.11],
                    ['肾细胞癌', 0.33, 0.19, 0.36, 0.24, 0.26, 0.16],
                    ['大肠癌', 0.11, 0.12, 0.13, 0.09, 0.16, 0.23],
                    ['肺癌', 0.45, 0.41, 0.33, 0.29, 0.24, 0.23],
                    ['乳腺癌', 0.30, 0.34, 0.28, 0.23, 0.12, 0.21],
                    ['膀胱癌', 0.12, 0.24, 0.29, 0.25, 0.36, 0.1]
                ]
            },
            xAxis: {type: 'category', name:"检查时间"},
            yAxis: {gridIndex: 0, name:"癌骨转移概率"},
            grid: {top: '55%'},
            series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2012} ({d}%)'
                    },
                    encode: {
                        itemName: 'year',
                        value: '2012',
                        tooltip: '2012'
                    }
                }
            ]
        };
    
        myChart.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });
    
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
