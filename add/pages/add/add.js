Page({
  add(){
    wx.cloud.database().collection('article')
    .add({
      data:{
        flag:0,
        location:'地理和人',
        level:'https://i.imgtg.com/2022/11/13/tN5wF.png',
        imagepath:'https://i.imgtg.com/2022/11/17/tG9BG.jpg',
        ming:'Geography and People',
        name:'Geographic topics',
        skill:"▶A subject which seems to have been insufficiently studied by doctors and psychologists is the influence of geography and climate on the psychological and physical health of mankind.There seems no doubt that the general character of the landscape, the relative length of day and night, and the climate must all play a big part in determining what kind of people we are.\n  ▶It is true that a few studies have been made. Where all the inhabitants of a particular area enjoy exceptionally good or bad health, scientists have identified .contributory factors such as the presence or absence of substances like iodine, fluoride, calcium, or iron in the water supply, or perhaps types of land thatprovide breeding places for pests like mosquitoes or rats.\n  ▶Moreover, we can all generalize about types of people we have met. Those living in countries .with long dark winters are apt to be less talkative and less vivacious than inhabitants of countries where the climateis more equable(稳定的). And where the olive and the orange grow, there the inhabitants are cheerful, talkative, and spontaneous.\n  ▶But these commonplace generalizations are inadequate: the influence: of climate and geography should be studied in depth. Do all mountain dwellers live to a ripe old age? Does the drinking of wine, rather than beer, result in a sunny and open temperament? Is the strength and height of one of the Kenyan tribes due to their habitual drinking of the blood of cows?\n▶We are not yet sure of the answers to such .questions, but let us hope that something of benefit to mankind may eventually result from such studies.",
        question1:'The author\'s purpose of writing this passage is to______.',
        option1_1:'alert readers to the scarcity of natural resources',
        option1_2:'call for more research on the influence of geographical environment',
        option1_3:'introduce different elements in character cultivation',
        option1_4:'draw more attention to the health condition of mankind',
        answer1:'2',
        question2:'It can be inferred that proper amounts of iodine, fluoride and calcium can_____.',
        option2_1:'benefit people’s physical health',
        option2_2:'influence the quality of water supply',
        option2_3:'help provide breeding places for pests.',
        option2_4:'strengthen a person\'s character',
        answer2:'1',
        question3:'How does the author evaluate the generalizations of people\'s types in Para. 3?',
        option3_1:'Such generalizations help us judge the different characters of people we meet',
        option3_2:'Such generalizations are not inclusive enough to draw a convincing conclusion.',
        option3_3:'Such generalizations prove that nature plays an important role in determining social',
        option3_4:'Such generalizations show that there are mainly two different types of people on the planet.',
        answer3:'2',
        question4:'What do we know about the generalizations of people’s type?',
        option4_1:'People who like drinking wine tend to be optimistic.',
        option4_2:'People who live in mountain areas tend to have a long life.',
        option4_3:'People who live in areas with stable climate tend to be talkative and lively.',
        option4_4:'People who like drinking cow blood tend to be strong and tall.',
        answer4:'3',
        word1:'insufficiently: av.不充分地，不能胜任地',
        word2:'landscape: n.景观，景色',
        word3:'inhabitants: n.居民，栖息动物',
        word4:'exceptionally: av.破例，罕见',
        word5:'contributory: a.促成的，促进的',
        word6:'vivacious: a.可爱的，活泼的',
        word7:'dwellers: n.居民，居住者',
      }
    })
  },
  update(){
    wx.cloud.database().collection('article')
    .doc('f80c64da637c91e000d3872905c3e111')
    .update({
      data:{
        skill:"▶For centuries, in the countries of south and Southeast Asia the elephant has been an intimate part of the culture, economy and religion, and nowhere more so than in Thailand. Unlike its African cousin, the Asian elephant is easily domesticated (驯化). The rare so-called white elephants have actually lent the authority of kingship to its rulers and until the 1920s the national flag was a white elephant on a red background.To the early Western visitors the country's romantic name was “Land of the White Elephant”.\n  ▶Today, however, the story is very different. Out of work and out of land, the Thai elephant struggles for survival in a nation that no longer needs it. The elephant has found itself more or less abandoned by previous owners who have moved on to a different economic world and a westernized society. And while the elephant's problems began many years ago, now it rates a very low national priority.\n  ▶How this reversal from national icon (圣像) to neglected animal came about is a tale of worsening environmental and the changing lives of the Thais themselves. According to Richard Lair, Thailand’s experts on the Asian elephant and author of the report Gone Astray, at the turn of the century there may well have beenas many as 100,000 domestic elephants in the country. In the north of Thailand alone it was estimated that more than 20,000 elephants were employed in transport, 1,000 of them alone on the road between the cities of Chiang Mai and Chiang Saen. This was at a time when 90 per cent of Thailand was still forest—a habitat (栖息地) that not only supported the animals but also made them necessary to carry goods and people. Nothing ploughs through dense forest better than a massive but sure-footed elephant.\n  ▶By 1950 the elephant population had dropped to a still substantial 13,397, but today there are probably nomore than 3,800, with another 1,350 roaming free in the national parks. But now, Thailand’s forest coversonly 20 per cent of the land. This deforestation (采伐森林) is the central point of the elephant's difficult situation, for it has effectively put the animals out of work. This century, as the road network grew, so the elephant's role as a beast of burden declined."
      }
    })
  }
})