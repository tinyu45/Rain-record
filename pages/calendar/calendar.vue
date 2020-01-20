<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">日历</block>
		</cu-custom>
		
		<view class="padding bg-white">
			<view class="flex bg-grey light radius  margin-bottom-xs padding-bottom-xs padding-top-xs">
				<view class="flex-sub  margin-xs text-center text-gray">周一</view>
				<view class="flex-sub  margin-xs text-center text-gray">周二</view>
				<view class="flex-sub  margin-xs text-center text-gray">周三</view>
				<view class="flex-sub  margin-xs text-center text-gray">周四</view>
				<view class="flex-sub  margin-xs text-center text-gray">周五</view>
				<view class="flex-sub  margin-xs text-center text-gray">周六</view>
				<view class="flex-sub  margin-xs text-center text-gray">周日</view>
			</view>
			<view class="bg-white">
				<view class="flex" v-for="row in 42/7" :key="row" v-if="days.length!=0">
					<view 
						v-for="item in 7" :key="item"
						:class="[days[item+(row-1)*7-1].disabled ? 'text-white bg-gray' : 'text-black',  days[item+(row-1)*7-1].day==new Date() ? 'bg-blue' : 'bg-white']"
						class="text-center flex-sub  padding-top-sm padding-bottom-sm solid">
						<view class="text-bold">{{days[item+(row-1)*7-1].day.getDate()}}</view>
						<view class="text-xs">{{days[item+(row-1)*7-1].lunner | lunnerFormat}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {GetLunarDay} from '../../static/common/untis.js'
	export default {
		data() {
			return {
				//日历相关
				currentDate:null,
				currentDay:'',
				currentMonth:'',
				currentYear:'',
				currentWeek:'',
				
				nowDay:'',
				nowMonth:'',
				nowFullYear:'',
				
				days:[],
			}
		},
		
		mounted()
		{	
			this.initCalendar();
		},
		
		filters:{
			lunnerFormat(info)
			{
				if(info.isTerm) return info.Term;
				if(info.festival) return info.festival;
				if(info.lunarFestival) return info.lunarFestival;
				return info.IDayCn;
			}
		},
		
		
		methods: {
			//初始化日历
			initCalendar(cur) {
				let date;
				if (cur) 
				{
					date = new Date(cur);
				} 
				else 
				{
					const now = new Date();
					let oneDayStr=this.formatDate(now.getFullYear(), now.getMonth() + 1, 1)
					date=new Date(oneDayStr);
				}
				// 初始化年月日
				this.currentDay = date.getDate();
				this.currentYear = date.getFullYear();
				this.currentMonth = date.getMonth() + 1;
				 
				
				//this.nowDay = new Date().getDate();
				//this.nowFullYear = date.getFullYear();
				//this.nowMonth = date.getMonth() + 1;
				 
				this.currentWeek = date.getDay(); //获取当前星期X(0-6,0代表星期天)
				if (this.currentWeek == 0) 
				{
					this.currentWeek = 7;
				}
				const str = this.formatDate(
					this.currentYear,
					this.currentMonth,
					this.currentDay,
				);
				this.days.length = 0;
				// 例今天是周五，放在第一行第5个位置，前面4个上个月的
				//初始化本周
				for (let i = this.currentWeek - 1; i >= 0; i--) {
					const d = new Date(str);
					d.setDate(d.getDate() - i);
					//用一个对象包装Date对象 以便为以后预定功能添加属性
					const dayobject = {
						day:d,
						disabled: i!=0,
						lunner:GetLunarDay(d)
					}; 
					this.days.push(dayobject);//将日期放入data 中的days数组 供页面渲染使用
				}
			 
			
				//this.nowDay-1（今天几号索引）this.currentWeek-1（当月第一天周几索引）
				//得到今天的索引值 初始化active样式
				//this.number=this.nowDay+this.currentWeek-2;
			 
			
				//列表显示的天数6*7减去前星期X
				for (let i = 1; i <= 42 - this.currentWeek; i++) {
					const d = new Date(str);
					d.setDate(d.getDate() + i);
					const dayobject = {
						day:d,
						disabled: d.getMonth()==this.currentMonth,
						lunner:GetLunarDay(d)
					}; 
					this.days.push(dayobject);
				}
				
				console.log(this.days);
			},
			
			
			/**
			 * @param {Object} year
			 * @param {Object} month
			 * @param {Object} day 时间格式化
			 */
			formatDate(year, month, day) {
				let y = year;
				let m = month;
				if (m < 10) m = "0" + m;
				let d = day;
				if (d < 10) d = "0" + d;
				return y + "-" + m + "-" + d;
			},
		}
	}
</script>

<style>

</style>
