Page({

onLoad:function(options)
{
  this.setData({
    mid1:options.id_1,
    mid2:options.id_2,
    mid3:options.id_3,
    mid4:options.id_4,
    mid5:options.id_5,
  })
},


//获取当前滑块的index
bindchange:function(e){
  const that  = this;
  that.setData({
    currentData: e.detail.current
  })
},
//点击切换，滑块index赋值
checkCurrent:function(e){
  const that = this;
  if (that.data.currentData === e.target.dataset.current){
      return false;
  }else{
    that.setData({
      currentData: e.target.dataset.current
    })
  }
},


onShareAppMessage:function(){
  return{
    title:this.data.mid2+"个人信息"
  }
},
tel:function () {
  wx.makePhoneCall({
    phoneNumber: this.data.mid5,
  })
},

data: {
  currentData : 0,
  curring:-1,
  detail: [
    {
      id: '1', title: 'What is the purpose of the auther?',answer:'2',array: [
        { name: '错误答案', usname: false }, { name: '正确答案', usname: false },
        { name: '错误答案', usname: false }, { name: '错误答案', usname: false },
      ]
    },
    {
      id: '2', title: 'How about the advice the man think?', answer: '1', array: [
        { name: '正确答案', usname: false }, { name: '错误答案', usname: false },
        { name: '错误答案', usname: false }, { name: '错误答案', usname: false },
      ]
    },
    {
      id: '3', title: 'What can we shopping online?', answer: '4', array: [
        { name: '错误答案', usname: false }, { name: '错误答案', usname: false },
        { name: '错误答案', usname: false }, { name: '正确答案', usname: false },
      ]
    },
    {
      id: '4', title: 'What is the atitude of the woman have?', answer: '3',  array: [
        { name: '错误答案', usname: false }, { name: '错误答案', usname: false },
        { name: '正确答案', usname: false }, { name: '错误答案', usname: false },
      ]
    },
  ],
  number: 0,
  answer:0,
  audio:[
    {name: 'Audio Source',
    author: 'null',
    src: '../static/audio_source/wise-old-owl.mp3'},

    {name: 'Audio Source',
    author: 'null',
    src: '../static/audio_source/wise-old-owl.mp3'},

    {name: 'Audio Source',
    author: 'null',
    src: '../static/audio_source/wise-old-owl.mp3'},

    {name: 'Audio Source',
    author: 'null',
    src: '../static/audio_source/wise-old-owl.mp3'},
  ]
},
previous:function(e){
  this.setData({
    number: this.data.number-1,
    curring: this.data.curring-1,
  })
},
radioChange:function(e){
  let index = e.currentTarget.dataset.index
  let id = e.currentTarget.dataset.id
  let detail = this.data.detail
  for(let i = 0;i<detail.length;i++){
    if(detail[i].id == id){
      detail[i].array[index].usname = true
      for(let j = 0;j<detail[i].array.length;j++){
        if (j != index){
          detail[i].array[j].usname = false
        }
      }
    }
  }
  this.setData({
    detail:detail
  })
},
nextstep:function(e){
  let detail = this.data.detail
  let number = this.data.number
  let curring = this.data.curring
  let usname = 0;
  for(let i = 0;i<detail[number].array.length;i++){
    if(!detail[number].array[i].usname){
      usname++
    }
  }
  if(usname == detail[number].array.length){
    wx.showToast({
      title: '答题选项不能为空',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  curring++
  number++
  if (curring > 3){
    curring = -1
  }
  this.setData({
    curring: curring,
    number: number,
  })
},
subsic:function(e){
  let detail = this.data.detail
  let answer = 0
  let letter = ''
  for(let i = 0;i < detail.length;i++){
    for(let j = 0;j < detail[i].array.length;j++){
      if(detail[i].array[j].usname){
        letter = detail[i].answer-1
        if(letter == j){
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