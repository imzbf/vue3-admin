<template>
  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-facebook"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>Facebook账号</div>
        <span>当前未绑定Facebook账号</span>
      </div>
    </div>
    <div><el-button type="text">绑定</el-button></div>
  </div>

  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-google_plus"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>Google账号</div>
        <span>当前未绑定facebook账号</span>
      </div>
    </div>
    <div><el-button type="text">绑定</el-button></div>
  </div>

  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-qq"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>QQ账号</div>
        <span>当前未绑定QQ账号</span>
      </div>
    </div>
    <div><el-button type="text">绑定</el-button></div>
  </div>

  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-wechat"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>微信账号</div>
        <span>当前未绑定微信账号</span>
      </div>
    </div>
    <div><el-button type="text">绑定</el-button></div>
  </div>

  <div class="binding-item">
    <div class="binding-item-meta">
      <svg class="icon binding-icon" aria-hidden="true">
        <use xlink:href="#icon-github"></use>
      </svg>
      <div class="binding-item-meta-main">
        <div>GitHub账号</div>
        <span>当前未绑定GitHub账号</span>
      </div>
    </div>
    <div><el-button type="text">绑定</el-button></div>
  </div>
</template>

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
