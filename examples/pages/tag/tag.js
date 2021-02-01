import CustomPage from '../../utils/page';
CustomPage({
  data: {
    example1Des: `属性：
      name = "" (标签文本)
      style = "" (标签自定义样式)
      styles = {} (Object，标签自定义样式组，如果你是准备对该组件二次封装成一个多个样式的tag，也行会用到)
    `,
    example2Des: `styles = {
        "状态一": "color:#1B9E0D;background-color:#DAF1CF;",
        "状态二": "color:#008EDD;background-color:#D1EEFD;",
        "状态三": "line-height: 60rpx;padding:0 40rpx"
      }
    `,
    example2Styles: {
      "状态一": "color:#1B9E0D;background-color:#DAF1CF;",
      "状态二": "color:#008EDD;background-color:#D1EEFD;",
      "状态三": "line-height: 60rpx;padding:0 40rpx"
    }
  }
});
