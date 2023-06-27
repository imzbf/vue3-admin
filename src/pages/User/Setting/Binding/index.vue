<template>
  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-facebook"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>{{ $t('Facebook账号') }}</div>
        <span>{{ $t('未绑定') }}</span>
      </div>
    </div>
    <div>
      <ElButton link>{{ $t('绑定') }}</ElButton>
    </div>
  </div>

  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-google_plus"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>{{ $t('Google账号') }}</div>
        <span>{{ $t('未绑定') }}</span>
      </div>
    </div>
    <div>
      <ElButton link>{{ $t('绑定') }}</ElButton>
    </div>
  </div>

  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-qq"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>{{ $t('QQ账号') }}</div>
        <span>{{ $t('未绑定') }}</span>
      </div>
    </div>
    <div>
      <ElButton link>{{ $t('绑定') }}</ElButton>
    </div>
  </div>

  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-wechat"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>{{ $t('微信账号') }}</div>
        <span>{{ $t('未绑定') }}</span>
      </div>
    </div>
    <div>
      <ElButton link>{{ $t('绑定') }}</ElButton>
    </div>
  </div>

  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-github"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>{{ $t('GitHub账号') }}</div>
        <span>{{ $t('未绑定') }}</span>
      </div>
    </div>
    <div>
      <ElButton link>{{ $t('绑定') }}</ElButton>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IzUserBindingSetting'
};
</script>

<script setup lang="ts"></script>

<style lang="scss">
.binding-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  &-meta {
    display: flex;

    .binding-icon {
      font-size: 45px;
      padding: 5px;
    }

    &-main {
      margin-left: 10px;

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
}
</style>
