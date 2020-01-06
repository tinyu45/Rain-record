import {cityCode} from './weather_city.js';

// 实时天气1：http://www.weather.com.cn/data/sk/101190408.html
// 实时天气2：http://www.weather.com.cn/data/cityinfo/101190408.html
const weatherUrl="/weather/data/cityinfo/";

//http://api.help.bj.cn/apis/weather36h/?id=西安市 API服务
/**
 * 获取天气
 */

const weatherApi=
{
	getWeather: function(url)
		{
			return uni.request({url});
		},
	
	
	getWeather01: function (url, reqOk)
		{
			uni.request({
				url:url,
				data: {},
				header: {},
				success: reqOk
			});
		},
	
	
	/**
	 * @param {Object} cityArr 获取所选城市天气
	 */
	request:  async function(city) {
		// let i=0;
		// let shis, code;
		// var citys=cityCode["城市代码"];
		// while(i<citys.length && shis===undefined)  
		// {
		// 	if(citys[i]['省']==cityArr[0])
		// 	{
		// 		shis=citys[i]['市'];
		// 	}
		// 	i++;
		// }
		
		// if(shis===undefined) return;
		
		// i=0;
		// while(i<shis.length && code===undefined)
		// {
		// 	if(shis[i]['市名']==cityArr[1])
		// 	{
		// 		code=shis[i]['编码'];
		// 	}
		// 	i++;
		// }
		
		// if(code===undefined) return;
	    var [error, res] = await uni.request({
				url: '/weather/apis/weather36h/',
				data:{
					id: city
				}
			});
		return res;
	}
}

export  default weatherApi;