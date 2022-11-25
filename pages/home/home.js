Page({

  data:{
    article:[]
    },
    onLoad(){
      wx.cloud.database().collection('kjp')
      .get()
      .then(res => {
          console.log("添加成功")
          this.setData({
              article:res.data
          })
      })
      .catch(err => {
          console.log("请求失败",err)
      })
    },
    f1:function(event){
      var id_1=event.currentTarget.dataset.id_1
      var id_2=event.currentTarget.dataset.id_2
      var id_3=event.currentTarget.dataset.id_3
      var id_4=event.currentTarget.dataset.id_4
      var id_5=event.currentTarget.dataset.id_5
      wx.navigateTo({
        url: "/article/article?id_1=" +id_1+"&id_2=" + id_2+"&id_3=" + id_3+"&id_4=" + id_4+"&id_5=" + id_5,
      })
    }
})