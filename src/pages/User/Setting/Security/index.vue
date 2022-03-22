<template>
  <div class="security-item">
    <div class="security-label">
      <div>账号密码</div>
      <span>当前密码强度：弱</span>
    </div>
    <div class="security-action"><el-button type="text">修改</el-button></div>
  </div>

  <div class="security-item">
    <div class="security-label">
      <div>绑定手机</div>
      <span>已绑定手机：134****5223</span>
    </div>
    <div class="security-action"><el-button type="text">修改</el-button></div>
  </div>

  <div class="security-item">
    <div class="security-label">
      <div>两步验证</div>
      <span>你的账号未开启两步验证</span>
    </div>
    <div class="security-action"><el-button type="text">开启</el-button></div>
  </div>

  <div class="security-item">
    <div class="security-label">
      <div>安全密钥</div>
      <span>必须先启用两步验证才能使用安全密钥</span>
    </div>
    <div class="security-action"><el-button type="text">修改</el-button></div>
  </div>
</template>

<style lang="scss">
.security-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .security-label {
    div {
      font-size: 15px;
      margin-bottom: 6px;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
