<template>
  <div class="job-item" v-if="job.jobname" @click="openDetail">
    <h1><p :class="{'nosalary': !job.providesalarname}">{{job.jobname.startsWith('00') ? job.jobname.slice(3) : job.jobname}}</p><span class="salary">{{job.providesalarname}}</span></h1>
    <p class="more" @click.stop="enterCo(job)" v-if="this.more">更多职位</p><p class="coname">{{job.coname}}</p>
    <p class="info">
      <span class="city"><Icon class="icon" type="city" />{{job.jobareaname}}</span>
      <span class="degree"><Icon class="icon" type="degree" />{{job.degreefrom}}</span>
      <span class="num"><Icon class="icon" type="renqun" />{{job.jobnum}}人</span>
    </p>
  </div>
</template>

<script>
import Icon from 'components/common/Icon/Icon.vue';

export default {
  props: {
    more: {
      type: Boolean,
      default: true
    },
    job: Object
  },
  methods: {
    openDetail() {
      this.$router.push('/detail/' + (this.job.sync_jobid || this.job.jobid || '120500417')).catch(err => {
          console.log('报错：',err)
      })
    },
    enterCo(job) {
      if(job.coid) {
        this.$router.push('/company/' + job.coname)
      }
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.job-item {
  padding: 18px 0; min-height: 196px; max-width: 718px;
  > h1 {
    font-size: 30px; font-weight: 600; color: rgba(0, 0, 0, 1); line-height: 42px; display: flex; justify-content: space-between; 
    p {
      max-width: 530px; white-space: pre-wrap;
      &.nosalary {max-width: 100%;}
    }
    .salary { color: rgba(255, 137, 28, 1); }
  }
  .coname { 
    margin-top: 16px; display: inline-block; padding: 0 16px; height: 52px; max-width: 432px; line-height: 52px; background: rgba(243, 243, 243, 1); 
    border-radius: 8px; font-size: 24px; color: rgba(102, 102, 102, 1); overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
  }
  .more {
    margin: 16px 16px 0 0; display: inline-block; padding: 0 16px; height: 52px; max-width: 432px; line-height: 52px; background:rgba(255,137,28, .1);
    border-radius: 8px; font-size: 24px; color:rgba(255,137,28,1); vertical-align: top;
  }
  .info {
    margin-top: 16px;
    .icon { margin-right: 8px;  width: 1em; height: 1em; }
    .city, .degree, .num { font-size: 24px; font-weight: 400; color: rgba(153, 153, 153, 1); line-height: 34px; }
    .degree, .num { margin-left: 32px; }
  }
}
</style>