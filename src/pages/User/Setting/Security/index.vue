<template>
  <div class="security-item">
    <div class="security-label">
      <div>{{ $t('账号密码') }}</div>
      <span>{{ $t('当前密码强度') + $t('：') + $t('弱') }}</span>
    </div>
    <div class="security-action">
      <ElButton link>{{ $t('修改') }}</ElButton>
    </div>
  </div>

  <div class="security-item">
    <div class="security-label">
      <div>{{ $t('绑定手机') }}</div>
      <span>{{ $t('已绑定手机') + $t('：') }}134****5223</span>
    </div>
    <div class="security-action">
      <ElButton link>{{ $t('修改') }}</ElButton>
    </div>
  </div>

  <div class="security-item">
    <div class="security-label">
      <div>{{ $t('两步验证') }}</div>
      <span>{{ $t('你的账号未开启两步验证') }}</span>
    </div>
    <div class="security-action">
      <ElButton link>{{ $t('开启') }}</ElButton>
    </div>
  </div>

  <div class="security-item">
    <div class="security-label">
      <div>{{ $t('安全秘钥') }}</div>
      <span>{{ $t('必须先启用两步验证才能使用安全密钥') }}</span>
    </div>
    <div class="security-action">
      <ElButton link>{{ $t('修改') }}</ElButton>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IzUserSecuritySetting'
};
</script>

<script setup lang="ts"></script>

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
