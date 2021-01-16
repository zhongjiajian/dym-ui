Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    backgroundColor: {
      type: String,
      value: '#00A19C',
    },
    backgroundColorTop: {
      type: String,
      value: 'transparent',
    },
    title: {
      type: String,
      value: ''
    },
    back: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    },
    homePagePath: String,
    navToHomeType: {
      type: String,
      options: ['switchTab', 'reLaunch', 'redirectTo', 'navigateTo'],
      value: 'switchTab'
    },
    iconTheme: {
      type: String,
      options: ['white', 'black'],
      value: 'white'
    },
    delta: {
      type: Number,
      optionalTypes: [String],
      value: 1
    },
  },
  lifetimes: {
    created() {
      this.getSystemInfo();
    },
    attached() {
      this.setStyle();
    },
  },
  pageLifetimes: {
    show() {
      if (getApp().globalSystemInfo.ios) {
        this.getSystemInfo();
        this.setStyle();
      }
    },
    resize() {
      this.getSystemInfo();
      this.setStyle();
    }
  },
  methods: {
    setStyle() {
      let {
        statusBarHeight,
        navBarHeight,
        capsulePosition,
        navBarExtendHeight,
        ios,
        windowWidth
      } = getApp().globalSystemInfo;
      const { back, home, title } = this.data;
      let rightDistance = windowWidth - capsulePosition.right; //胶囊按钮右侧到屏幕右侧的边距
      let leftWidth = windowWidth - capsulePosition.left; //胶囊按钮左侧到屏幕右侧的边距

      let navigationbarinnerStyle = [
        `height:${navBarHeight + navBarExtendHeight}px`,
        `padding-top:${statusBarHeight}px`,
        `padding-right:${leftWidth}px`,
        `padding-bottom:${navBarExtendHeight}px`
      ].join(';');
      let navBarLeft = [];
      if ((back && !home) || (!back && home)) {
        navBarLeft = [
          `width:${capsulePosition.width}px`,
          `height:${capsulePosition.height}px`,
          `margin-left:${rightDistance}px`
        ].join(';');
      } else if ((back && home) || title) {
        navBarLeft = [
          `width:${capsulePosition.width}px`,
          `height:${capsulePosition.height}px`,
          `margin-left:${rightDistance}px`
        ].join(';');
      } else {
        navBarLeft = [`width:auto`, `margin-left:0px`].join(';');
      }
      this.setData({
        navigationbarinnerStyle,
        navBarLeft,
        navBarHeight,
        capsulePosition,
        navBarExtendHeight,
        ios,
      });
    },
    getSystemInfo() {
      var app = getApp();
      if (app.globalSystemInfo && !app.globalSystemInfo.ios) {
        return app.globalSystemInfo;
      } else {
        let systemInfo = wx.getSystemInfoSync();
        let ios = !!(systemInfo.system.toLowerCase().search('ios') + 1);
        let rect;
        try {
          rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
          if (rect === null) {
            throw 'getMenuButtonBoundingClientRect error';
          }
          if (!rect.width || !rect.top || !rect.left || !rect.height) {
            throw 'getMenuButtonBoundingClientRect error';
          }
        } catch (error) {
          let gap = ''; //胶囊按钮上下间距 使导航内容居中
          let width = 96; //胶囊的宽度
          if (systemInfo.platform === 'android') {
            gap = 8;
            width = 96;
          } else if (systemInfo.platform === 'devtools') {
            if (ios) {
              gap = 5.5; //开发工具中ios手机
            } else {
              gap = 7.5; //开发工具中android和其他手机
            }
          } else {
            gap = 4;
            width = 88;
          }
          if (!systemInfo.statusBarHeight) {
            //开启wifi的情况下修复statusBarHeight值获取不到
            systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
          }
          rect = {
            //获取不到胶囊信息就自定义重置一个
            bottom: systemInfo.statusBarHeight + gap + 32,
            height: 32,
            left: systemInfo.windowWidth - width - 10,
            right: systemInfo.windowWidth - 10,
            top: systemInfo.statusBarHeight + gap,
            width: width
          };
        }

        let navBarHeight = '';
        if (!systemInfo.statusBarHeight) {
          systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
          navBarHeight = (function () {
            let gap = '';
            if (systemInfo.statusBarHeight > rect.top) gap = rect.top;
            else gap = rect.top - systemInfo.statusBarHeight;
            return systemInfo.statusBarHeight + 2 * gap + rect.height;
          })();
          systemInfo.navBarExtendHeight = 0; //下方扩展4像素高度 防止下方边距太小
        } else {
          navBarHeight = (function () {
            let gap = rect.top - systemInfo.statusBarHeight;
            return systemInfo.statusBarHeight + 2 * gap + rect.height;
          })();
          if (ios) {
            systemInfo.navBarExtendHeight = 4; //下方扩展4像素高度 防止下方边距太小
          } else {
            systemInfo.navBarExtendHeight = 0;
          }
        }
        systemInfo.navBarHeight = navBarHeight;
        systemInfo.capsulePosition = rect; //右上角胶囊按钮信息bottom: 58 height: 32 left: 317 right: 404 top: 26 width: 87 目前发现在大多机型都是固定值 为防止不一样所以会使用动态值来计算nav元素大小
        systemInfo.ios = ios; //是否ios

        app.globalSystemInfo = systemInfo; //将信息保存到全局变量中,后边再用就不用重新异步获取了

        return systemInfo;
      }
    },
    back() {
      this.triggerEvent('back');

        wx.navigateBack({
          delta: this.data.delta
        })
        .catch(err=>console.log(err));
    },
    home() {
      this.triggerEvent('home');
      if (this.properties.homePagePath) {
        switch (this.properties.navToHomeType) {
          case "switchTab":
            wx.switchTab({
              url: this.properties.homePagePath
            })
            .catch(err=>console.log(err));
            break;
          case "reLaunch":
            wx.reLaunch({
              url: this.properties.homePagePath
            })
            .catch(err=>console.log(err));
            break;
          case "redirectTo":
            wx.redirectTo({
              url: this.properties.homePagePath
            })
            .catch(err=>console.log(err));
            break;
          case "navigateTo":
            wx.navigateTo({
              url: this.properties.homePagePath
            })
            .catch(err=>console.log(err));
            break;
        }
      }

    }
  }
});
