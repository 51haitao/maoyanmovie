<template>
    <div id="main">
       <Header title="影院" />
       <div id="content">
    			<div class="cinema_menu" @click="test">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>

            <CiList ref="one"/>

       </div>
       <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
//影院列表
import CiList from '@/components/CiList'

export default {
    name:'Cinema',
    components: {
        Header,
        TabBar,
        CiList
    },
    methods: {
        test:function(){
            console.log(this.$refs.one);
            console.log(this.$refs.one.$el);
            console.log(this.$refs.one.msg);
            console.log(this.$refs.one.show());
        }
    }
}
</script>

<style scoped>
#content .cinema_menu {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
}
</style>
