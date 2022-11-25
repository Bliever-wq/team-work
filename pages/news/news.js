Page({
  data:{
    article:[
    {
      location:"泰国大象的生存危机",
      name:"Animal topics",
      imagepath:"https://i.imgtg.com/2022/11/14/tAqSj.jpg",
      ming:"Do you prefer shopping in a mail or online？",
      level:"../static/audio_source/wise-old-owl.mp3",
      music:"../static/audio_source/wise-old-owl.mp3",
      testname:"Audio Source",
      idname:"Section A",
      skill:"▶For centuries, in the countries of south and Southeast Asia the elephant has been an intimate part of the culture, economy and religion, and nowhere more so than in Thailand. Unlike its African cousin, the Asian elephant is easily domesticated (驯化). The rare so-called white elephants have actually lent the authority of kingship to its rulers and until the 1920s the national flag was a white elephant on a red background.To the early Western visitors the country's romantic name was “Land of the White Elephant”.\n  ▶Today, however, the story is very different. Out of work and out of land, the Thai elephant struggles for survival in a nation that no longer needs it. The elephant has found itself more or less abandoned by previous owners who have moved on to a different economic world and a westernized society. And while the elephant's problems began many years ago, now it rates a very low national priority.\n▶How this reversal from national icon (圣像) to neglected animal came about is a tale of worsening environmental and the changing lives of the Thais themselves. \n",
    },
    {
      location:"电子产品的可循环",
      name:"Science and technology topics",
      imagepath:"https://i.imgtg.com/2022/11/17/tG20I.jpg",
      ming:"文章名B",
      level:"../static/audio_source/wise-old-owl.mp3",
      music:"../static/audio_source/wise-old-owl.mp3",
      testname:"Audio Source",
      idname:"Section A",
      skill:"▶Japan is getting tough about recycling—and not in the paper and plastic kind of way. Recently, the country requires that all electronic goods—TVs, VCRs, stereos, and more—be recycled. But recycling will not beleft to consumers, instead, the devices will be sent to the original manufacturer for proper disposal.\n▶The new law poses a few challenges to manufacturers who are now rushing to set up collection networks and perfecting techniques to disassemble and recycle older products.With an eye toward the future, they are also integrating easily recycled materials into new products. Plastics, a major component of most electronicproducts,pose a particular obstacle because their quality becomes worse and worse with age,losing strengthand flexibility even if reprocessed.NEC Corp. overcomes this problem by creating a plastics sandwich, in which the filling is 100 percent recycled plastic and the outer layers a mixture of 14 percent recycled material.The resulting plastic has sufficient strength and toughness for use as a case for desktop PCs. ",
    },
    {
      location:"地理和人",
      name:"Geographic topics",
      imagepath:"https://i.imgtg.com/2022/11/17/tG9BG.jpg",
      ming:"文章名C",
      level:"../static/audio_source/wise-old-owl.mp3",
      music:"../static/audio_source/wise-old-owl.mp3",
      testname:"Audio Source",
      idname:"Section A",
      skill:"▶A subject which seems to have been insufficiently studied by doctors and psychologists is the influence ofgeography and climate on the psychological and physical health of mankind.There seems no doubt that the general character of the landscape, the relative length of day and night, and the climate must all play a big part in determining what kind of people we are.\n▶It is true that a few studies have been made. Where all the inhabitants of a particular area enjoy exceptionally good or bad health, scientists have identified .contributory factors such as the presence or absence of substances like iodine, fluoride, calcium, or iron in the water supply, or perhaps types of land thatprovide breeding places for pests like mosquitoes or rats.\n▶Moreover, we can all generalize about types of people we have met. Those living in countries .with long dark winters are apt to be less talkative and less vivacious than inhabitants of countries where the climateis more equable(稳定的). And where the olive and the orange grow, there the inhabitants are cheerful, talkative, and spontaneous.",
    },
    {
      location:"学习外语",
      name:"Language topics",
      imagepath:"https://i.imgtg.com/2022/11/17/tG8MD.jpg",
      ming:"文章名D",
      level:"../static/audio_source/wise-old-owl.mp3",
      music:"../static/audio_source/wise-old-owl.mp3",
      testname:"Audio Source",
      idname:"Section A",
      skill:"▶New technology links the world as never before. Our planet has shrunk. It’s now a “global village” where countries are only seconds away by fax or phone or satellite link. And, of course, our ability to benefit from this high-tech communications equipment is greatly enhanced by foreign language skills.\n▶Deeply involved with this new technology is a breed of modern business people who have a growing respect for the economic value of doing business abroad. In modern markets, success overseas often helps support domestic business efforts.\n▶Overseas assignments are becoming increasingly important to advancement within executive ranks. The executive stationed in another country no longer need fear being “out of sight and out of mind.” He or she canbe sure that the overseas effort is central to the company’s plan for success, and that promotions often follow or accompany an assignment abroad. ",
    },
    {
      location:"房屋建筑",
      name:"Architectural topics",
      imagepath:"https://i.imgtg.com/2022/11/17/tGjZ1.jpg",
      ming:"文章名E",
      level:"../static/audio_source/wise-old-owl.mp3",
      music:"../static/audio_source/wise-old-owl.mp3",
      idname:"Section A",
      skill:"▶Some houses are designed to be smart. Others have smart designs. An example of the second type of house won an Award of Excellence from the American Institute of Architects.\n▶Located on the shore of Sullivan’s Island off the coast of South Carolina, the award-winning cube-shaped beach house was built to replace one smashed to pieces by Hurricane (飓风) Hugo 10 years ago. In September1989, Hugo struck South Carolina, killing 18 people and damaging or destroying 36,000 homes in the state.\n▶Before Hugo, many new houses built along South Carolina’s shoreline were poorly constructed, and enforcement of building codes wasn’t strict, according to architect Ray Huff, who created the cleverly-designed beach house. In Hugo’s wake, all new shoreline houses are required to meet stricter, better-enforced codes.The new beach house on Sullivan’s Island should be able to withstand a Category 3 hurricane with peak winds of 179 to 209 kilometers per hour.",
    }
    ]},
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