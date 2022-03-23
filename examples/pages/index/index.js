import CustomPage from '../../utils/page';
import changeLog from '../../dist/utils/changeLog';
CustomPage({
  data:{
    currrentVersion: changeLog[0].version,
    components:[
      {
        name: 'loading',
        chinese: '加载中',
        navigateUrl: '/pages/loading/loading'
      },
      {
        name: 'button',
        chinese: '按钮',
        navigateUrl: '/pages/button/button'
      },
      {
        name: 'tag',
        chinese: '标签',
        navigateUrl: '/pages/tag/tag'
      },
      {
        name: 'icon',
        chinese: '图标',
        navigateUrl: '/pages/icon/icon'
      },
      {
        name: 'list',
        chinese: '列表',
        navigateUrl: '/pages/list/list'
      },
      {
        name: 'radio',
        chinese: '单选',
        navigateUrl: '/pages/radio/radio'
      },
      {
        name: 'keyboard',
        chinese: '键盘',
        navigateUrl: '/pages/keyboard/keyboard'
      },
      {
        name: 'phoneNumberInput',
        chinese: '手机号输入框',
        navigateUrl: '/pages/phoneNumberInput/phoneNumberInput'
      },
      {
        name: 'smsCodeInput',
        chinese: '短信验证码输入框',
        navigateUrl: '/pages/smsCodeInput/smsCodeInput'
      },

      {
        name: 'drawer',
        chinese: '抽屉',
        navigateUrl: '/pages/drawer/drawer'
      },
      {
        name: 'navigationBar',
        chinese: '自定义导航栏',
        navigateUrl: '/pages/navigationBar/navigationBar'
      },
      {
        name: 'tabs',
        chinese: '标签页/选项卡',
        navigateUrl: '/pages/tabs/tabs'
      },
      {
        name: 'toast',
        chinese: '提示',
        navigateUrl: '/pages/toast/toast'
      },
      {
        name: 'popover',
        chinese: '气泡框',
        navigateUrl: '/pages/popover/popover'
      },
      {
        name: 'timePicker',
        chinese: '时间选择器',
        navigateUrl: '/pages/timePicker/timePicker'
      },
      {
        name: 'popup',
        chinese: '弹窗',
        navigateUrl: '/pages/popup/popup'
      },
      {
        name: 'flyToCart',
        chinese: '加入购物车动画',
        navigateUrl: '/pages/flyToCart/flyToCart'
      },
      {
        name: 'rate',
        chinese: '评分',
        navigateUrl: '/pages/rate/rate'
      },
      {
        name: 'leftSlider',
        chinese: '左滑容器',
        navigateUrl: '/pages/leftSlider/leftSlider'
      },
    ]
  },
  nav(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.navUrl
    })
  }
})


