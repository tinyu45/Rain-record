<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">天气</block>
		</cu-custom>
		
		<view @click="$refs.region.show()" style="height: 100upx; background: #1CBBB4;">
			<text style="color: #333333;">城市</text>
			<text>请选择</text>
		</view>
		
		<view>
			{{JSON.stringify(W_36hData)}}
		</view>
		
		<w-picker 
		    mode="region"
		    :defaultVal="['浙江省','杭州市','滨江区']"
		    :areaCode="['33','3301','330108']"
		    :hideArea="true"
		    @confirm="onConfirmCity" 
		    ref="region" 
		    themeColor="#f00">
		</w-picker>
	</view>
</template>

<script>
	import weatherApi from '../../static/common/untis.js'
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{
			wPicker
		},
		
		data() {
			return {
				W_36hData:null,
			}
		},
		
		mounted() {
			//方法1 permise  
			// weatherApi.getWeather('/weather/data/sk/101190408.html').then(res =>{
			// 	console.log(res);
			// });
			
			//方法2 callback
			//weatherApi.getWeather01('/weather/data/sk/101190408.html', this.callBack);
			
			//发发3 异步方法 		 				   
			// weatherApi.request(['陕西','西安']).then(res =>{
			// 	console.log(res);
			// });
			
			this.get_36h_Weather('西安');
		},
		
		methods: {
			/**
			 * @param {Object} cityName 获取36H天气
			 */
			get_36h_Weather(cityName){
				weatherApi.request(cityName).then(res =>{
					this.W_36hData=res.data;
				});
			},
			
			/**
			 * @param {Object} res请求回调
			 */
			callBack(res){
				console.log(res);
			},
			
			
			/**
			 * @param {Object} res 选择城市
			 */
			onConfirmCity(res)
			{
				this.get_36h_Weather(res.checkArr[1]);
			}
		}
	}
</script>

<style>

</style>
