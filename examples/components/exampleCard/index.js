// components/exampleCard/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String, //标题
    des: String, //描述
  },

  /**
   * 组件的初始数据
   */
  data: {
    paneShrink: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    togglePane(){
      this.setData({
        paneShrink: !this.data.paneShrink
      })
    }
  }
})
