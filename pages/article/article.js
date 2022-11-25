Page({
  data: {
    addBookrackSucceed: true,
    iconAddBookrack: "https://i.imgtg.com/2022/11/23/4heQ6.png",         //添加书架图标
    iconAddBookrackSucceed: "https://i.imgtg.com/2022/11/23/4hNAF.png",         //添加书籍成功图标    
},
// 加入书架
chooseAddBookrack: function() {
    let value = this.data.addBookrackSucceed;
    wx.showToast({
      title: '已收藏',      //标题
      icon: "success",        //图标类型, 默认success
      duration: 1500                //提示框停留时间, 默认1500ms
    })
    this.setData({
      addBookrackSucceed: !value
    })
    console.log(value)
},
cancelAddBookrack: function() {
  let value = this.data.addBookrackSucceed;
  wx.showToast({
    title: '已取消',      //标题
    icon: "success",        //图标类型, 默认success
    duration: 1500                //提示框停留时间, 默认1500ms
  })
  this.setData({
    addBookrackSucceed: !value
  })
  console.log(value)
},


  onLoad: function (options) {
    this.setData({
      mid1: options.id_1,
      mid2: options.id_2,
      mid3: options.id_3,
      mid4: options.id_4,
      mid: options.id,
    })
    wx.cloud.database().collection('article')
      .doc(this.data.mid) 
      .get()
      .then(res => {
        console.log("添加成功",res)
        this.setData({
          ['detail[0].title']:res.data.question1,
          ['detail[1].title']:res.data.question2,
          ['detail[2].title']:res.data.question3,
          ['detail[3].title']:res.data.question4,
          ['detail[0].answer']:res.data.answer1,
          ['detail[1].answer']:res.data.answer2,
          ['detail[2].answer']:res.data.answer3,
          ['detail[3].answer']:res.data.answer4,
          ['detail[0].array[0].name']:res.data.option1_1,
          ['detail[0].array[1].name']:res.data.option1_2,
          ['detail[0].array[2].name']:res.data.option1_3,
          ['detail[0].array[3].name']:res.data.option1_4,
          ['detail[1].array[0].name']:res.data.option2_1,
          ['detail[1].array[1].name']:res.data.option2_2,
          ['detail[1].array[2].name']:res.data.option2_3,
          ['detail[1].array[3].name']:res.data.option2_4,
          ['detail[2].array[0].name']:res.data.option3_1,
          ['detail[2].array[1].name']:res.data.option3_2,
          ['detail[2].array[2].name']:res.data.option3_3,
          ['detail[2].array[3].name']:res.data.option3_4,
          ['detail[3].array[0].name']:res.data.option4_1,
          ['detail[3].array[1].name']:res.data.option4_2,
          ['detail[3].array[2].name']:res.data.option4_3,
          ['detail[3].array[3].name']:res.data.option4_4,
          ['wordlist[0].word']:res.data.word1,
          ['wordlist[1].word']:res.data.word2,
          ['wordlist[2].word']:res.data.word3,
          ['wordlist[3].word']:res.data.word4,
          ['wordlist[4].word']:res.data.word5,
          ['wordlist[5].word']:res.data.word6,
          ['wordlist[6].word']:res.data.word7,
        })
      })
      .catch(err => {
        console.log("请求失败", err)
      })
      console.log(this.data)
  },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  onShareAppMessage: function () {
    return {
      title: this.data.mid2 + "个人信息"
    }
  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.mid5,
    })
  },
  data: {
    currentData: 0,
    curring: -1,
    wordlist:[
    {word:'',},
    {word:'',},
    {word:'',},
    {word:'',},
    {word:'',},
    {word:'',},
    {word:'',},
    ],
    detail: [{
        id: '1',
        title:'',
        answer: '',
        array: [{
            name: '',
            usname: false
          }, {
            name: '',
            usname: false
          },
          {
            name: '',
            usname: false
          }, {
            name: '',
            usname: false
          },
        ]
      },
      {
        id: '2',
        title: '',
        answer: '',
        array: [{
            name: '',
            usname: false
          }, {
            name: '',
            usname: false
          },
          {
            name: '',
            usname: false
          }, {
            name: '',
            usname: false
          },
        ]
      },
      {
        id: '3',
        title: '',
        answer: '',
        array: [{
            name: '',
            usname: false
          }, {
            name: '',
            usname: false
          },
          {
            name: '',
            usname: false
          }, {
            name: '',
            usname: false
          },
        ]
      },
      {
        id: '4',
        title: '',
        answer: '',
        array: [{
            name: '',
            usname: false
          }, {
            name: '',
            usname: false
          },
          {
            name: '',
            usname: false
          }, {
            name: '',
            usname: false
          },
        ]
      },
    ],
    number: 0,
    answer: 0,
  },
  previous: function (e) {
    this.setData({
      number: this.data.number - 1,
      curring: this.data.curring - 1,
    })
  },
  radioChange: function (e) {
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    let detail = this.data.detail
    for (let i = 0; i < detail.length; i++) {
      if (detail[i].id == id) {
        detail[i].array[index].usname = true
        for (let j = 0; j < detail[i].array.length; j++) {
          if (j != index) {
            detail[i].array[j].usname = false
          }
        }
      }
    }
    this.setData({
      detail: detail
    })
  },
  nextstep: function (e) {
    let detail = this.data.detail
    let number = this.data.number
    let curring = this.data.curring
    let usname = 0;
    for (let i = 0; i < detail[number].array.length; i++) {
      if (!detail[number].array[i].usname) {
        usname++
      }
    }
    if (usname == detail[number].array.length) {
      wx.showToast({
        title: '答题选项不能为空',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    curring++
    number++
    if (curring > 3) {
      curring = -1
    }
    this.setData({
      curring: curring,
      number: number,
    })
  },
  subsic: function (e) {
    let detail = this.data.detail
    let answer = 0
    let letter = ''
    for (let i = 0; i < detail.length; i++) {
      for (let j = 0; j < detail[i].array.length; j++) {
        if (detail[i].array[j].usname) {
          letter = detail[i].answer - 1
          if (letter == j) {
            answer++
          }
        }
      }
    }
    wx.showToast({
      title: '答对了:' + answer + '题',
      icon: 'none',
      duration: 2000
    })
  },
})