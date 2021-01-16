Component({
  properties: {
   name:{
     type: String,
     value: "info"
   },
   style:{
    type: String,
    value: ""
   },
   styles:{
     type: Object,
     value: {}
   }
  },
  data: {
  },
  methods: {
    setStyle(){
       for(let key in this.properties.styles){
        if(key === this.properties.name){
          this.setData({
            style: this.properties.styles[key]
          })
          break;
        }
      }
    }
  },
  observers:{
    name:function(){
      this.setStyle();
    }
  }
});