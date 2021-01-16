Component({
    relations: {
      '../tabs/index': {
        type: 'parent', // 关联的目标节点应为父节点
        linked: function (target) {
          // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
          // console.log('child linked to ', target)
        },
        linkChanged: function (target) {
          // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
        },
        unlinked: function (target) {
          // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
        }
      }
    },
    properties:{
      mark:null,
      target:{
        type:Number,
        value:-2,
        observer: 'changeTab'
      },
      active:{
        type:Number,
        value:0
      }
    },
    data:{
      from:-1,
    },
    methods:{
      changeTab(newVal, oldVal){
        this.setData({ from: oldVal }, res => {
          this.setData({ active: newVal})
        })
      }
    }
  })