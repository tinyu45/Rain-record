<template>
	<view>
		<view class="box">
			<view class="cu-bar tabbar bg-white shadow foot">
				<view class="action" :class="{'text-gray' : curNavId!=0,  'text-green' : curNavId==0}" @click="NavChange" data-navId="0" >
					<view :class="{'cuIcon-camera' : curNavId!=0,  'cuIcon-camerafill' : curNavId==0}"></view> 示例
				</view>
				<view class="action" :class="{'text-gray' : curNavId!=1,  'text-green' : curNavId==1}" @click="NavChange" data-navId="1" >
					<view :class="{'cuIcon-comment' : curNavId!=1,  'cuIcon-commentfill' : curNavId==1}"></view> 信息
				</view>
				<view class="action text-gray add-action" @click="NavChange" data-navId="2" >
					<button class="cu-btn cuIcon-add bg-green shadow" ></button>
					发布
				</view>
				<view class="action" :class="{'text-gray' : curNavId!=3,  'text-green' : curNavId==3}" @click="NavChange" data-navId="3" >
					<view :class="{'cuIcon-cart' : curNavId!=3,  'cuIcon-cartfill' : curNavId==3}">
						<view class="cu-tag badge">99</view>
					</view>
					购物车
				</view>
				<view class="action" :class="{'text-gray' : curNavId!=4,  'text-green' : curNavId==4}" @click="NavChange" data-navId="4" >
					<view :class="{'cuIcon-my' : curNavId!=4,  'cuIcon-myfill' : curNavId==4}">
						<view class="cu-tag badge"></view>
					</view>
					我的
				</view>
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				curNavId: -1,
			}
		},
		methods: {
			/**
			 * @param {Object} e 切换底部菜单
			 */
			NavChange: function(e) {
				this.curNavId=parseInt(e.currentTarget.dataset.navid);
			}
		}
	}
</script>

<style>
	.box {
		margin: 20upx 0;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>
