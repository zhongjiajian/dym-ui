import CustomPage from '../../utils/page';
import changeLog from '../../dist/utils/changeLog';
CustomPage({

  data:{
    currrentVersion: changeLog.slice(-1)[0].version,
    changeLog: changeLog,
    guides:[
      {
        title: '引入',
        content:'npm install dym-ui',
      },
      {
        title: 'npm地址',
        content:'https://www.npmjs.com/package/dym-ui',
      },
      {
        title: 'web文档',
        content:'devloping...',
      }
    ]
  },
  showChangeLogDes(e){
    const index = +e.currentTarget.dataset.index;
    const key = 'changeLog['+index+'].showDes'
    this.setData({
      [key]: true
    })
  },
  hideChangeLogDes(e){
    const index = +e.currentTarget.dataset.index;
    const key = 'changeLog['+index+'].showDes'
    this.setData({
      [key]: false
    })
  }
});