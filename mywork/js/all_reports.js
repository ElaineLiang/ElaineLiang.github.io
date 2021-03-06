var myChart = echarts.init(document.getElementById('main'));
var xAxisData = [];
var data1 = [12, 12, 6, 5, 4];
var data2 = [4, 3, 1, 1, 1];
var data3 = [5, 5, 7, 6, 3];
var data4 = [7, 11, 3, 11, 2];
var data5 = [1, 1, 1, 0, 0];



var itemStyle = {
    normal: {},
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    backgroundColor: '#eee',
    legend: {
        data: ['会见', '活动', '调研', '会议', '其他'],
        align: 'left',
        left: 10
    },
    brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {}
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        name: '月份',
        type: 'category',
        data: ['4月', '5月', '6月', '7月', '8月'],
        silent: true,
        axisLine: {
            onZero: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    yAxis: {
        name: "次数",
        inverse: false,
        splitArea: {
            show: false
        }
    },
    grid: {
        left: 100
    },
    visualMap: {
        type: 'continuous',
        dimension: 1,
        text: ['High', 'Low'],
        inverse: true,
        itemHeight: 200,
        calculable: true,
        min: 0,
        max: 6,
        top: 60,
        left: 10,
        inRange: {
            colorLightness: [1, 0.5]
        },
        outOfRange: {
            color: '#bbb'
        },
        controller: {
            inRange: {
                color: '#2f4554'
            }
        }
    },
    series: [{
        name: '会见',
        type: 'bar',
        stack: 'one',
        itemStyle: itemStyle,
        data: data1
    }, {
        name: '活动',
        type: 'bar',
        stack: 'one',
        itemStyle: itemStyle,
        data: data2
    }, {
        name: '调研',
        type: 'bar',
        stack: 'two',
        itemStyle: itemStyle,
        data: data3
    }, {
        name: '会议',
        type: 'bar',
        stack: 'two',
        itemStyle: itemStyle,
        data: data4
    }, {
        name: '其他',
        type: 'bar',
        stack: 'two',
        itemStyle: itemStyle,
        data: data5
    }]
};

myChart.on('brushSelected', renderBrushed);

function renderBrushed(params) {
    var brushed = [];
    var brushComponent = params.batch[0];

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    }

    myChart.setOption({
        title: {
            backgroundColor: '#333',
            text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
            bottom: 0,
            right: 0,
            width: 100,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        }
    });
}
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);