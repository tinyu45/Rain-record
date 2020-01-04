<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">日历</block>
		</cu-custom>
		
		<view class="bg-white padding">
			<view class="grid margin-bottom text-center col-5">
				<view class="padding" :class="indexs%2==0?'bg-cyan':'bg-blue'" v-for="(item,indexs) in 40" :key="indexs">{{indexs+1}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
