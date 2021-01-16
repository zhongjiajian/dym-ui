import CustomPage from '../../utils/page';
CustomPage({
  data: {
    example1Des: `基于原生的button组件以及本库的icon、loading组件
    保留了原生button的size、type、plain、disabled属性`,
    example2Des: `wxml:
    <d-button  custom-class="my-button-class" textColor="#00A19C">按钮</d-button>
    wxss:
    .my-button-class{
      background-color: #D4F2F1 !important;
      line-height: 98rpx;
    }`,
    example3Des: `wxml:
    <d-button custom-class="my-button-class" isCustomHoverClass d-hover-class="d-button-hover-class" textColor="#00A19C">按钮</d-button>
    wxss:
    .my-button-class{
      background-color: #D4F2F1 !important;
      line-height: 98rpx;
    }
    .d-button-hover-class{
      background-color: #a5d4d2 !important;
    }`,
    example4Des:`属性：loading = true | false loadingSize = "40"
    wxml:
    <d-button custom-class="my-button-class" isCustomHoverClass d-hover-class="d-button-hover-class"  textColor="#00A19C" loading="{{loadingEg}}" loadingSize="40" catchtap="loadingOne" disabled="{{loadingEgDisabled}}">{{loadingEg?'加载中':'按钮'}}</d-button>
    wxss:见上`,
    example5Des: `wxml:
    <d-button custom-class="" icon="{{logoutIcon}}"   textColor="#00A19C" loading="{{logouting}}" catchtap="logout">退出登录</d-button>
    js:
    logout(){
      this.setData({
        logoutIcon: '',
        logouting: true
      });
      setTimeout(()=>{
        this.setData({
          logoutIcon: 'logout',
          logouting: false
        });
      },1500);
    }`,
    loading: false,
    loadingEg: false,
    loadingEgDisabled: false,
    logoutIcon: 'logout',
    logouting: false,
  },
  loading() {
    this.setData({
      loading: !this.data.loading
    })
  },
  loadingOne() {
    this.setData({
      loadingEg: true,
      loadingEgDisabled: true
    });
    setTimeout(()=>{
      this.setData({
        loadingEg: false,
        loadingEgDisabled: false
      });
    },1500);
  },
  logout(){
    this.setData({
      logoutIcon: '',
      logouting: true
    });
    setTimeout(()=>{
      this.setData({
        logoutIcon: 'logout',
        logouting: false
      });
    },1500);
  }
});
