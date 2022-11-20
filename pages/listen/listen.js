

Page({
  data:{
     part1:"Grammar points in conversation for different levels.",
     part2:"Six international speakers answer the same question.",
     part3:"1500+ listening lessons of national English conversations.",
     part4:"Animated news stories to learn the academic English.",
     part5:"We are trying to provide more and more funny course.",
     icon1:"https://i.imgtg.com/2022/11/14/tKTdB.png",
     icon2:"https://i.imgtg.com/2022/11/14/tKkEa.png",
     icon3:"https://i.imgtg.com/2022/11/14/tKxuS.png",
     icon4:"https://i.imgtg.com/2022/11/14/tKFFN.png",
     icon5:"https://i.imgtg.com/2022/11/14/tKWOs.png",
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
            // 首页为 0
            selected: 0
        })
    }
},
f1:function(event){
  wx.navigateTo({
    url: "/grammar/grammar"
  })
}
  },)