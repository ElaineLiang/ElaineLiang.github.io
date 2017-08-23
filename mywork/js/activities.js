var myChart = echarts.init(document.getElementById('main2'));

option = {
    backgroundColor: '#eee',

    title: {
        text: '公开活动次数统计',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#2c343c'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 0,
        max: 50,
        inRange: {
            colorLightness: [1, 0.2]
        }
    },
    series: [{
        name: '类型',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [{
            value: 39,
            name: '会见'
        }, {
            value: 10,
            name: '活动'
        }, {
            value: 25,
            name: '调研'
        }, {
            value: 34,
            name: '会议'
        }, {
            value: 3,
            name: '其他'
        }].sort(function(a, b) {
            return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
            normal: {
                textStyle: {
                    color: '#2c343c'
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'gray'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            }
        },
        itemStyle: {
            normal: {
                color: '#c23531',
                shadowBlur: 100,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 200;
        }
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);