Component({

  relations: {
    '../tabs-panel/index': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        // console.log('[custom-ul] a child is linked: ', target)
      },
      linkChanged: function (target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function (target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },

  properties: {
    tabs: {
      type: Array,
      value: ['微信', '通讯录', '发现', '我', '附近的人和直播', '朋友圈', '小程序', '视频号']
    },
    tabsScrollable: {
      type: Boolean,
      value: true
    },

    tabsBackgroundColor: {
      type: String,
      value: '#00A19C'
    },
    tabsHeight: {
      type: Number,
      optionalTypes: [String],
      value: 40
    },
    tabsStyle: {
      type: String,
      value: ''
    },
    tabsPanelStyle: {
      type: String,
      value: ''
    },

    activeTextColor: {
      type: String,
      value: '#fff'
    },
    defaultTextColor: {
      type: String,
      value: '#666'
    },
    indicatorColor: {
      type: String,
      value: '#fff'
    },
    active: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },

  },

  data: {
    lineWidth: 0,
    widthTranslateX: 0,
    windowWidth: null,// 屏幕宽度
    scrollLeft: 0,// 滚动条横向位置
    indicatorMove: false, //初始的时候indicator移动会卡顿，为了体验：去掉动画
    firstFlag: true,
    innerActive: 0
  },
  tabPanelNodes: null, //存储tab节点
  multipleNodesStyle: null, //存储tab节点信息
  methods: {
    changeTab(e, codeTrigger) { // 非点击触发拿不到offsetLeft
      if (this.data.firstFlag) {
        this.data.firstFlag = false;
      }else{
        this.setData({
          indicatorMove: true
        })
      }
      let index = Number(e.currentTarget.dataset.flag)
      if (this.data.innerActive === index) return;
      this.setData({
        innerActive: index
      })
      this.queryMultipleNodes(index)
        .then(res => {
          if (codeTrigger) {
            this.setLineStyleByNodeInfo(res, {
              offsetLeft: res.left - 16
            });
            this.properties.tabsScrollable && this.setScrollLeft(res, {
              offsetLeft: res.left - 16
            });
          } else {
            this.setLineStyleByNodeInfo(res, e.currentTarget);
            this.properties.tabsScrollable && this.setScrollLeft(res, e.currentTarget);
          }

        })
      if (!this.tabPanelNodes) this.tabPanelNodes = this.getRelationNodes('../tabs-panel/index');
      this.triggerEvent('changeTab', index);

      this.tabPanelNodes.map((item) => {
        item.setData({
          target: index
        })
      });
      
    },
    //获取tab节点信息
    queryMultipleNodes(index) {
      if (this.multipleNodesStyle) {
        return new Promise(resolve => {
          resolve(this.multipleNodesStyle[index])
        })
      } else {
        var query = wx.createSelectorQuery().in(this);
        var that = this;
        return new Promise((resolve, reject) => {
          query.selectAll('.tab-text').boundingClientRect(function (res) {
            that.multipleNodesStyle = res;
            resolve(res[index])
          }).exec()
        })
      }
    },
    //根据tab节点信息设置line样式
    setLineStyleByNodeInfo(obj, target) {
      this.setData({
        lineWidth: obj.width,
        widthTranslateX: target.offsetLeft + 16
      })
    },
    // 初始化line样式
    initLineStyle(initActive) {
      this.queryMultipleNodes(initActive)
        .then(res => {
          this.setLineStyleByNodeInfo(res, {
            offsetLeft: res.left - 16
          })
        })
    },
    // 设置滚动条位置
    setScrollLeft(nodes, target) {
      let {
        width
      } = nodes
      let {
        offsetLeft
      } = target
      if (!this.data.windowWidth) this.data.windowWidth = 375
      this.setData({
        scrollLeft: offsetLeft + 16 + width / 2 - this.data.windowWidth / 2
      })
    },
    // 获取屏幕宽度
    getWindowWidth() {
      wx.getSystemInfo({
        success: res => {
          this.data.windowWidth = res.windowWidth
        }
      })
    }
  },

  ready() {
    this.tabPanelNodes = this.getRelationNodes('../tabs-panel/index');
    this.getWindowWidth();
    if (this.properties.active == 0) {
      this.initLineStyle(this.properties.active);
      this.data.firstFlag = false;
    }
    this.triggerEvent('changeTab', this.properties.active);
  },
  observers: {
    active(newVal) {
      if (this.data.innerActive == newVal) return;
      if (newVal > this.properties.tabs.length - 1 || newVal < 0) {
        console.error('tabs组件的active属性值不合法');
        return;
      }
      this.changeTab({
        currentTarget: {
          dataset:{
            flag: newVal,
          }
        }
      }, true);
    }
  }
})
