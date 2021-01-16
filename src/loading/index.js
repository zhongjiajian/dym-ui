Component({
  properties:{
    type:{
      type: String,
      value: 'circle', // circle圈圈 flower菊花 
    },
    size:{
      type: String,
      optionalTypes:[Number],
      value: '72'
    },
    color: {
      type: String,
      value: '#00A19C'
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    title: String,
    titleStyle:{
      type: String,
      value:''
    }
  }
});