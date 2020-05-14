<template>
  <div class="jianlixiugai">
    <Banner :banners="['images/banner.png']" />
    <Broadcast class="broadcast" type="detail"/>
    <article>
      <img src="images/me/xiugai1.png" alt="">
      <p>前程无忧51job自2018年以来，在简历修改领域积累了丰富的专业经验。已累计服务近5000名高校学生（截止2019年底），帮助众多优秀毕业生进入了包括管理咨询、投资银行、四大会计师事务所、证券保险、互联网及IT、快速消费品和奢侈品行业等高端行业，以及阿里巴巴、宝洁、强生、通用电气、中国银行、中金、中国平安、华夏基金、微软、中国移动等国内外众多知名企业。
        <br><br>前程无忧51job简历修改团队不同于淘宝以及其他兼职模式的代写简历人员，前程无忧51job简历服务团队由至少具有3年以上人力资源经验、丰富的简历修改经验的专家组成，引进了国内外成熟的职业简历修改制度,以学生自身优势为出发点，保证了简历修改的规范化和专业化。</p>
    </article>
    <img class="team" src="images/me/xiugai2.png" alt="">
    <img class="team" src="images/me/xiugai3.png" alt="">
    <div class="upload">
      <h1>点击下方“上传个人简历”</h1>
      <p>填写相关信息及上传简历和测评报告，手机用户请扫描二维码进行填写。</p>
      <div class="upload-wrapper">
        <img class="qr" src="images/me/qrcode.png" alt="">
        <button @click="upload">上传个人简历</button>
        <div>
          <img src="images/me/checkbox.png" alt="">
          我已阅读并同意
          <a class="link" href="https://www.51job.com/bo/service.php" target="_blank">服务声明</a>
        </div>
      </div>
    </div>
    <div class="copyright">Copyright © 51job. All Rights Reserved.</div>
    <BackHome />
  </div>
</template>

<script>
import Banner from 'components/common/Banner/banner.vue'
import Broadcast from './Broadcast.vue'
// import { checkLogin } from '@/decorator.js';
import BackHome from 'components/content/BackHome.vue';
export default {
  name: 'ChangeCV',
  components: {
    Banner,
    Broadcast,
    BackHome
  },
  methods: {
    // @checkLogin()
    upload() {
      window.location.href = 'https://jinshuju.net/f/kTb7Ol'
    }
  }
}
</script>

<style lang="scss" scoped>
.jianlixiugai {
  background: #fff; height: 100%; padding: 16px; overflow-y: auto;
  .broadcast { margin-top: 16px; }
  article { margin-top: 64px;
    img { display: block; margin-left: 220px; width: 246px; }
    p { margin-top: 46px; font-size:24px; color:rgba(102,102,102,1); line-height:36px; text-align: justify; }
  }
  .team { width: 100%; margin-top: 64px; }
  .upload {
    margin-top: 64px;
    h1 { font-size:32px; font-weight:bold; color:rgba(51,51,51,1); }
    p { margin-top: 28px; font-size:28px; color:rgba(51,51,51,1); line-height:36px; }
    .upload-wrapper { margin-top: 32px; padding: 0 40px; overflow: hidden;
      button{
        margin-top: 32px; width:240px; height:64px; background:linear-gradient(90deg,rgba(242,200,50,1) 0%,rgba(247,107,28,1) 100%);
        border-radius:8px; font-size:32px; color:rgba(255,255,255,1); line-height:64px; text-align: center;
      }
      .qr { width: 160px; float: right; }
      > div { width: 400px; margin-top: 40px; font-size:24px; color:rgba(51,51,51,1);
        img {width: 20px;}
        .link {color: #1A489C; border-bottom: 1px solid #1a4b9c; display: inline-block;padding-bottom: 1px;}
      }
    }
  }
  .copyright { margin-top: 96px; font-size:20px; color:rgba(153,153,153,1); line-height:36px; text-align: center; }
}
</style>