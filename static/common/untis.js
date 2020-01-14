import {cityCode} from './weather_city.js';
import {calendar} from "./calendar.js"

//获取今天农历	 
export const GetLunarDay=function(date)
{
	let yy=date.getFullYear();
	let mm=date.getMonth()+1;
	let dd=date.getDate();
	return calendar.solar2lunar(yy, mm, dd);
}
 
 
// //获取  初X
// export function GetLunarDayByDate(yy, mm, dd){
// 	let jsonData=calendar.solar2lunar(yy, mm, dd);
// 	return `${jsonData.isTerm ? jsonData.Term : jsonData.IDayCn}`;	
// 	//return `${jsonData.festival ? jsonData.festival : jsonData.isTerm ? jsonData.Term : jsonData.IDayCn}`	
// }
	
	
// //获取  X月初X
// export function GetLunarMonthByDate(yy, mm, dd){
// 	let jsonData=calendar.solar2lunar(yy, mm, dd);
// 	return `${jsonData.IMonthCn}${jsonData.IDayCn}`		
// };


// 实时天气1：http://www.weather.com.cn/data/sk/101190408.html
// 实时天气2：http://www.weather.com.cn/data/cityinfo/101190408.html

//http://api.help.bj.cn/apis/weather36h/?id=西安市 API服务
const weatherUrl="/weather/data/cityinfo/";
/**
 * 获取天气
 */
export const weatherApi=
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
	    var [error, res] = await uni.request({
				url: '/weather/apis/weather36h/',
				data:{
					id: city
				}
			});
		return res;
	}
}
