/* 
    @description api列表
    @date 2022-04-25
*/
export const apiList = [
    {
        name: 'getLo',
        description: '根据ip获取定位',
        url: 'https://apis.map.qq.com/ws/location/v1/ip?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77',
        method: 'GET'
    },
    {
        name: 'getWeather',
        description: '获取天气',
        url: 'https://devapi.qweather.com/v7/weather/now?key=&location=112.57,39.92',
        method: 'GET'
    }
]