var myChart = echarts.init(document.getElementById('main3'));

var data = [{

    name: '拉萨',
    value: 24
}, {
    name: '汕尾',
    value: 26
}, {
    name: '南昌',
    value: 54
}, {

}];

var geoCoordMap = {
    '拉萨': [91.11, 29.97],
    '河源': [114.68, 23.73],
    '广州': [113.23, 23.16],
    '太原': [112.53, 37.87],
    '深圳': [114.07, 22.62],
    '珠海': [113.52, 22.3],
    '沈阳': [123.38, 41.8],
    '南昌': [115.89, 28.68],
    '中央': [116.46, 39.92],
    '乌鲁木齐': [87.68, 43.77],
    '喀什': [75.30, 39.50],
    "塔县": [75.29, 37.79],
    "澳门": [113.53, 22.19],
    '鹰潭': [117.02, 28.25],
    '肇庆': [112.44, 23.06],
    '惠州': [114.40, 23.13],
    '河源': [114.68, 23.75],
    '汕尾': [115.35, 22.80],
    '甘孜': [100.01, 32.49],
    '成都': [104.06, 30.68],
    '宁波': [121.55, 29.86],
    '哈尔滨': [126.60, 45.79],
    '河池': [108.06, 24.68],
    '百色': [106.65, 23.89]
};

function convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

function randomValue() {
    return Math.round(Math.random() * 1000);
}



option = {
    tooltip: {},
    visualMap: {
        min: 0,
        max: 8,
        left: 'left',
        top: 'bottom',
        text: ['High', 'Low'],
        seriesIndex: [1],
        inRange: {
            color: ['#e0ffff', '#006edd']
        },
        calculable: true
    },
    geo: {
        map: 'china',
        roam: true,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: 'rgba(0,0,0,0.8)'
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(0, 0, 0, 0.4)'
            },
            emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series: [{
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: 20,
        symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
        symbolRotate: 35,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#F06C00'
            }
        }
    }, {
        name: 'categoryA',
        type: 'map',
        geoIndex: 0,
        // tooltip: {show: false},
        data: [{
            name: '北京',
            value: 9,
        }, {
            name: '辽宁',
            value: 2,
        }, {
            name: '黑龙江',
            value: 1,
        }, {
            name: '新疆',
            value: 1,
        }, {
            name: '浙江',
            value: 1,
        }, {
            name: '江西',
            value: 2,
        }, {
            name: '广西',
            value: 1,
        }, {
            name: '山西',
            value: 1,
        }, {
            name: '广东',
            value: 5,
        }, {
            name: '西藏',
            value: 1,
        }, {
            name: '四川',
            value: 2,
        }, {
            name: '台湾',
            value: 1,
        }, {
            name: '香港',
            value: 0,
        }, {
            name: '澳门',
            value: 1,
        }]
    }]
};

myChart.setOption(option);