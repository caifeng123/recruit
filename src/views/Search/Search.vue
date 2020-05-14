<template>
  <div class="search">
    
    <div class="search-bar">
      <div class="input-wrapper"><Icon type="search" /><input type="search" placeholder="输入你要搜索的职位" v-model="keyword" @search="search"></div>
      <span @click="$router.back()">取消</span>
    </div>
    <div class="list-wrapper">
      <ul>
        <li v-for="(item, index) in jobList.list" :key="index" >
          <JobItem :job="item" />
        </li>
      </ul>
      <loading noMoreMsg="未搜索到相关职位"/>
    </div>
  </div>
</template>

<script>
import Icon from 'components/common/Icon/Icon.vue'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import JobItem from 'components/content/JobItem.vue'
// import Loading from '../components/Loading.vue'

export default {
  name: 'Search',
  data() {
    return {
      keyword: '',
      jobList: this.$store.state.jobList.keyword, // 还是用vuex保管数据，便于以后重写代码
    }
  },
  methods: {
    search() {
      // 关键字搜索
      this.$store.commit('jobListGetByKeyword', {keyword: this.keyword})
    }
  },
  created() {
  },
  components: {
    Icon,JobItem,
		// Loading
  }
}
</script>

<style lang="scss" scoped>
.search {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .search-bar { padding: 0 38px 0 32px; height: 80px; background:rgba(242,242,242,1); display: flex; justify-content: space-between; align-items: center;
   font-size:28px; color:rgba(153,153,153,1);
    .input-wrapper { width:584px; height:60px; background:rgba(255,255,255,1); border-radius:8px; display: flex; align-items: center; padding-left: 42px;
      input { margin-left: 18px; width: 450px; border: none; outline: none; padding: 0;height: 60px;line-height: 60px;
        &::placeholder { color: #999999; font-size: 28px; }
      }
    }
    > span { font-size:28px; color:rgba(26,72,156,1); }
  }
  .list-wrapper { padding: 16px; flex: 1; overflow-x: hidden; overflow-y: auto;
    &::-webkit-scrollbar { width: 0; height: 0; }
    li { border-bottom: 1px solid #e5e5e5;
      &:last-child { border-bottom: none; }
    }
  }
}
</style>