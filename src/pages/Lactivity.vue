<template>
  <div>
    <Znav :title="`優惠活動`"></Znav>
    <div class="message-list">
      <div class="message">
        <div class="time">2019-08-05 20:29</div>
        <div class="content">
          <div class="title">❤ 七夕約會穿搭$199起</div>
          <img
            class="eventImage"
            src="https://s1.lativ.com.tw/m/i/PushNotification/40947_40875_2PSALE_1180X557m_190805_TW.jpg"
          />
        </div>
      </div>
      <div class="message">
        <div class="time">2019-08-01 20:32</div>
        <div class="content">
          <div class="title">🎁 父親節．為愛獻禮 $190元起</div>
          <img
            class="eventImage"
            src="https://s2.lativ.com.tw/m/i/PushNotification/FATHERSDAY_1P190_1180X557m_190730_TW.jpg"
          />
        </div>
      </div>
      <div class="endMessage">
        <span>──</span> 已查看完全部消息
        <span>──</span>
      </div>
    </div>
  </div>
</template>
<script>
import Znav from '../components/Znav'
export default {
  components:{
    Znav
  }
};
</script>
<style scoped lang="scss">
.message-list {
  min-height: calc(100vh - 4.063rem);
  padding: 3.125rem 0 0.938rem;
  background-color: #f3f3f3;
  .message {
    margin: 0 0.938rem;
    text-align: center;
    .time {
      display: inline-block;
      margin: 0.938rem auto 0.75rem;
      padding: 0.188rem;
      border-radius: 3px;
      background-color: #d2d2d2;
      line-height: 1;
      font-size: 0.75rem;
      color: #fff;
    }
    .content {
      padding: 0.625rem 0.938rem;
      border-radius: 5px;
      text-align: left;
      background-color: #fff;
      .title {
        padding: 0.25rem 0 0.625rem;
        margin-bottom: 0.938rem;
        border-bottom: 0.063rem solid #f3f3f3;
        font-size: 0.875rem;
        color: #555;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .eventImage {
        width: 100%;
      }
    }
  }
  .endMessage {
    margin-top: 0.938rem;
    font-size: 0.75rem;
    color: #999;
    text-align: center;
  }
}
</style>


