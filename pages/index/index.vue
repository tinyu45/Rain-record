<template>
	<view>
		<view class="home-box">
			<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			
			<view class="cu-list grid col-3 no-border">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index"  @click="jumpTo(item.link)">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		
		
		
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
				
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: '日历',
					link: '/pages/calendar/calendar'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '天气',
					link: '/pages/weather/weather'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '动态',
					link: '/'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知',
					link: '/'
				}, {
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜',
					link: '/'
				}, {
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤',
					link: '/'
				}],
			}
		},
		methods: {
			/**
			 * @param {Object} e 切换底部菜单
			 */
			NavChange: function(e) {
				this.curNavId=parseInt(e.currentTarget.dataset.navid);
				if(this.curNavId==0)
				{
					uni.navigateTo({
						url: '/pages/demo/index'
					})
				}
			},
			
			/**
			 * 跳转模块
			 */
			jumpTo(url)
			{
				uni.navigateTo({url});
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
