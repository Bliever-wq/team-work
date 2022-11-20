// custom-tab-bar/index.js
Component({
  data: {
    color: "#515151",
    selectedColor: "#DAA520",
    backgroundColor: "#ffffff",
    "list": [
      {
        "text": "主页",
        "pagePath":"home/home",
        "iconPath": "image/011.png", 
    
        "selectedIconPath": "image/010.png"
      },
      {
        "text": "阅读",
        "pagePath":"read/read",
        "iconPath": "image/021.png", 
        "selectedIconPath": "image/020.png"
      }
      ,
      {
        "text": "听力",
        "pagePath":"listen/listen",
        "iconPath": "image/031.png", 
        "selectedIconPath": "image/030.png"
      }
      ,
      {
        "text": "我的",
        "pagePath":"my/my",
        "iconPath": "image/041.png", 
        "selectedIconPath": "image/040.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})
