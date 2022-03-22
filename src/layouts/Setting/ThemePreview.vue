<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-tooltip placement="top" effect="dark" content="静静的等待ele更新暗黑主题~">
        <div class="theme-preview">
          <div class="theme-preview-left dark"></div>
          <div class="theme-preview-right">
            <div class="theme-preview-right-header dark"></div>
            <div class="theme-preview-right-main gay"></div>
          </div>
        </div>
      </el-tooltip>
    </el-col>
    <el-col :span="8">
      <div class="theme-preview">
        <div class="theme-preview-left dark"></div>
        <div class="theme-preview-right">
          <div class="theme-preview-right-header dark"></div>
          <div class="theme-preview-right-main"></div>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="theme-preview">
        <div class="theme-preview-left dark"></div>
        <div class="theme-preview-right">
          <div class="theme-preview-right-header light"></div>
          <div class="theme-preview-right-main"></div>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="theme-preview">
        <div class="theme-preview-left"></div>
        <div class="theme-preview-right">
          <div class="theme-preview-right-header"></div>
          <div class="theme-preview-right-main"></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss">
.theme-preview {
  height: 45px;
  border-radius: 6px;
  box-shadow: 0 2px 8px 0 #ddd;
  cursor: pointer;
  margin-bottom: 20px;

  &-left,
  &-right {
    height: 100%;
    display: inline-block;
  }

  &-left {
    width: 25%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &-right {
    width: 75%;

    &-header {
      height: 25%;
      border-top-right-radius: 6px;
    }

    &-main {
      height: 75%;
      background-color: #eee;
      border-bottom-right-radius: 6px;
    }
  }

  .light {
    background-color: #fff;
  }

  .dark {
    background-color: #545c64;
  }

  .gay {
    background-color: #6d7883;
  }
}
</style>
