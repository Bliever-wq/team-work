Page({
  data:{
    article:[]
  },
    f1:function(event){
      var id_1=event.currentTarget.dataset.id_1
      var id_2=event.currentTarget.dataset.id_2
      var id_3=event.currentTarget.dataset.id_3
      var id_4=event.currentTarget.dataset.id_4
      var id_5=event.currentTarget.dataset.id_5
      var id_6=event.currentTarget.dataset.id_6
      var id_7=event.currentTarget.dataset.id_7
      wx.navigateTo({
        url: "/listen_part/listen_part?id_1="+id_1+"&id_2=" + id_2+"&id_3=" + id_3+"&id_4=" + id_4+"&id_5=" + id_5+"&id_6=" + id_6+"&id_7=" + id_7,
      })
    }
})