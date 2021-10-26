<template>

  <div class="app">
    <div class="right">
      <ul class="ul_right">
        <li class="li_right" v-for="i in res" :key="i.id">
          <img  class="li_" :src="i.href" alt="">
          <br>
          <h4>书名：{{i.title}}</h4>
          <h5>作者: {{i.author}}</h5>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "Book03",
  data() {
    return {
      res: [
      {
        "title": "寻找经济最优解",
        "recommend": "100%推荐",
        "star": "16条评论",
        "author": "魏尚进",
        "date": "2021-06-01",
        "press": "东方出版中心",
        "price_r": "¥68.00",
        "price_n": "¥44.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29275189-1_l_9.jpg"
      },
      {
        "title": "置身事内：中国政府与经济发展（罗永浩、刘格菘、张军、周黎安、王烁联袂推荐，复旦经院“毕业课”）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "兰小欢 著",
        "date": "2021-08-01",
        "press": "上海人民出版社",
        "price_r": "¥65.00",
        "price_n": "¥53.20",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29281158-1_l_18.jpg"
      },
      {
        "title": "理想国译丛047：崩盘：全球金融危机如何重塑世界",
        "recommend": "100%推荐",
        "star": "113条评论",
        "author": "[英] 亚当・图兹 ，    理想国 出品",
        "date": "2021-06-01",
        "press": "上海三联书店",
        "price_r": "¥148.00",
        "price_n": "¥103.60",
        "price_e": "¥103.60",
        "href": "http://139.155.51.18/img/economics/29259497-1_l_5.jpg"
      },
      {
        "title": "大变局中的机遇：全球新挑战与中国的未来",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "郑永年",
        "date": "2021-07-31",
        "press": "中信出版社",
        "price_r": "¥68.00",
        "price_n": "¥44.10",
        "price_e": "¥47.60",
        "href": "http://139.155.51.18/img/economics/29269057-1_l_6.jpg"
      },
      {
        "title": "平行与竞争：双循环时代的中国治理",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "翟东升",
        "date": "2021-07-29",
        "press": "东方出版社",
        "price_r": "¥65.00",
        "price_n": "¥48.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29280804-1_l_8.jpg"
      },
      {
        "title": "读懂未来中国经济：”十四五“到2035，“中国好书”获得者蔡�P带你读懂新发展阶段的经济热点与难点",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "蔡�P",
        "date": "2021-08-11",
        "press": "中信出版社",
        "price_r": "¥69.00",
        "price_n": "¥46.20",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29276268-1_l_3.jpg"
      },
      {
        "title": "人口大逆转：老龄化、不平等与通胀 查尔斯・古德哈特 著 直击人口、经济、社会等方面问题",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "查尔斯・古德哈特 马诺吉・普拉丹",
        "date": "2021-08-05",
        "press": "中信出版社",
        "price_r": "¥79.00",
        "price_n": "¥52.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29274299-1_l_6.jpg"
      },
      {
        "title": "魔鬼经济学（新版套装全4册）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "史蒂芬・列维特 史蒂芬・都伯纳",
        "date": "2021-07-31",
        "press": "中信出版社",
        "price_r": "¥260.00",
        "price_n": "¥174.20",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29268510-1_l_12.jpg"
      },
      {
        "title": "货币价值：国民财富的保有形式与经济危机",
        "recommend": "100%推荐",
        "star": "9条评论",
        "author": "范勃",
        "date": "2021-07-01",
        "press": "上海财经大学出版社",
        "price_r": "¥128.00",
        "price_n": "¥76.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29274885-1_l_6.jpg"
      },
      {
        "title": "大侦探经济学：现代经济学中的因果推断革命 李井奎 著",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "李井奎",
        "date": "2021-07-05",
        "press": "中信出版社",
        "price_r": "¥78.00",
        "price_n": "¥58.50",
        "price_e": "¥19.99",
        "href": "http://139.155.51.18/img/economics/29269055-1_l_2.jpg"
      },
      {
        "title": "REITs：中国道路",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "韩志峰 张峥 等著 著",
        "date": "2021-07-01",
        "press": "人民出版社",
        "price_r": "¥138.00",
        "price_n": "¥128.20",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29271850-1_l_8.jpg"
      },
      {
        "title": "从1G到5G：移动通信如何改变世界",
        "recommend": "100%推荐",
        "star": "46条评论",
        "author": "王建宙",
        "date": "2021-06-01",
        "press": "中信出版社",
        "price_r": "¥69.00",
        "price_n": "¥41.40",
        "price_e": "¥48.30",
        "href": "http://139.155.51.18/img/economics/29265925-1_l_11.jpg"
      },
      {
        "title": "垄断资本――论美国的经济和社会秩序(经济学名著译丛)",
        "recommend": "100%推荐",
        "star": "3条评论",
        "author": "[美]保罗・巴兰 [美]保罗・斯威齐 著  杨敬年 译",
        "date": "2021-04-01",
        "press": "商务印书馆",
        "price_r": "¥63.00",
        "price_n": "¥47.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29267598-1_l_3.jpg"
      },
      {
        "title": "大国治理：发展与平衡的空间政治经济学（集结二十年研究重要论文，开启经济学研究新视角）",
        "recommend": "100%推荐",
        "star": "39条评论",
        "author": "陆铭、陈钊 等",
        "date": "2021-06-01",
        "press": "上海人民出版社",
        "price_r": "¥75.00",
        "price_n": "¥59.20",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29256383-1_l_8.jpg"
      },
      {
        "title": "芯片陷阱 《美国陷阱》姐妹篇",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "马克・拉叙斯（Marc Lassus），古文俊",
        "date": "2021-08-01",
        "press": "中信出版社",
        "price_r": "¥68.00",
        "price_n": "¥40.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29279019-1_l_6.jpg"
      },
      {
        "title": "贸易的真相（经济学家张五常力荐 一本书读懂国际贸易的真相） 团购电话4001066666转6",
        "recommend": "100%推荐",
        "star": "215条评论",
        "author": "李俊慧",
        "date": "2021-07-01",
        "press": "哈尔滨出版社",
        "price_r": "¥65.00",
        "price_n": "¥44.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29258794-1_l_6.jpg"
      },
      {
        "title": "变轨：数字经济及其货币演进",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "周子衡",
        "date": "2021-08-01",
        "press": "中译出版社（原中国对外翻译出版公司）",
        "price_r": "¥69.00",
        "price_n": "¥48.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29280564-1_l_3.jpg"
      },
      {
        "title": "未来算法：下一个十年赢在计算思维",
        "recommend": "100%推荐",
        "star": "51条评论",
        "author": "诸葛越",
        "date": "2021-06-01",
        "press": "中信出版社",
        "price_r": "¥69.00",
        "price_n": "¥51.70",
        "price_e": "¥39.99",
        "href": "http://139.155.51.18/img/economics/29264885-1_l_12.jpg"
      },
      {
        "title": "气候变化与经济发展-综合评估建模方法及其应用",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "米志付",
        "date": "2021-07-01",
        "press": "上海三联书店",
        "price_r": "¥48.00",
        "price_n": "¥40.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29276460-1_l_8.jpg"
      },
      {
        "title": "元宇宙＋元宇宙通证（全2册）（全面系统呈现“元宇宙”知识谱系，阐述未来世界的终极形态）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "赵国栋、易欢欢、徐远重、邢杰、余晨 等 著/编著",
        "date": "2021-08-01",
        "press": "中译出版社（原中国对外翻译出版公司）",
        "price_r": "¥113.00",
        "price_n": "¥103.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29283760-1_l_3.jpg"
      },
      {
        "title": "真实世界的经济学：北大国发院教授、经济学家周其仁作品",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "周其仁",
        "date": "2021-08-17",
        "press": "中信出版社",
        "price_r": "¥58.00",
        "price_n": "¥43.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29276267-1_l_6.jpg"
      },
      {
        "title": "经济学讲义(著名经济学家张五常教授亲自作序推荐） 团购电话4001066666转6",
        "recommend": "100%推荐",
        "star": "245条评论",
        "author": "李俊慧",
        "date": "2021-07-01",
        "press": "哈尔滨出版社",
        "price_r": "¥98.00",
        "price_n": "¥67.60",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29258789-1_l_1.jpg"
      },
      {
        "title": "经济用语图鉴",
        "recommend": "100%推荐",
        "star": "43条评论",
        "author": "［日］花冈幸子 著  ［日］浜田加纳 绘   赵百灵 译",
        "date": "2021-05-01",
        "press": "南海出版公司",
        "price_r": "¥68.00",
        "price_n": "¥34.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29255763-1_l_8.jpg"
      },
      {
        "title": "不公正的胜利：富人如何逃税 如何让富人纳税",
        "recommend": "100%推荐",
        "star": "10条评论",
        "author": "伊曼纽尔・赛斯，加布里埃尔・祖克曼",
        "date": "2021-08-05",
        "press": "中信出版社",
        "price_r": "¥68.00",
        "price_n": "¥51.00",
        "price_e": "¥47.60",
        "href": "http://139.155.51.18/img/economics/29258926-1_l_2.jpg"
      },
      {
        "title": "打开现代:国家转型的财政政治",
        "recommend": "100%推荐",
        "star": "3条评论",
        "author": "刘守刚",
        "date": "2021-07-01",
        "press": "上海远东出版社",
        "price_r": "¥128.00",
        "price_n": "¥88.40",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29276380-1_l_8.jpg"
      },
      {
        "title": "数据如何误导了我们：人人都能懂的统计学思维启蒙书（一份大数据时代的防坑指南）",
        "recommend": "100%推荐",
        "star": "26条评论",
        "author": "[荷]桑内・布劳 著，冯皓�B 译，未读 出品",
        "date": "2021-07-01",
        "press": "广东人民出版社",
        "price_r": "¥68.00",
        "price_n": "¥34.00",
        "price_e": "¥18.99",
        "href": "http://139.155.51.18/img/economics/29262030-1_l_8.jpg"
      },
      {
        "title": "利益相关者",
        "recommend": "100%推荐",
        "star": "65条评论",
        "author": "[德]克劳斯・施瓦布,[比]彼得・万哈姆",
        "date": "2021-06-01",
        "press": "中信出版社",
        "price_r": "¥79.00",
        "price_n": "¥59.20",
        "price_e": "¥46.99",
        "href": "http://139.155.51.18/img/economics/29261959-1_l_9.jpg"
      },
      {
        "title": "金融前沿的20种思考：全景解读金融市场发展趋势",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "巴曙松 任�F 本力 著 湛庐文化 出品",
        "date": "2021-07-24",
        "press": "浙江教育出版社",
        "price_r": "¥109.90",
        "price_n": "¥82.40",
        "price_e": "¥39.95",
        "href": "http://139.155.51.18/img/economics/29267292-1_l_3.jpg"
      },
      {
        "title": "美国货币史：1867―1960（精校本）",
        "recommend": "100%推荐",
        "star": "38条评论",
        "author": "米尔顿・弗里德曼（Milton Friedman）,安娜・J.施瓦茨（Anna J. Schwart",
        "date": "2021-05-01",
        "press": "北京大学出版社",
        "price_r": "¥138.00",
        "price_n": "¥111.20",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29257666-1_l_14.jpg"
      },
      {
        "title": "新收入准则税会差异实务与案例精解",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "翟纯垲",
        "date": "2021-07-01",
        "press": "中国市场出版社",
        "price_r": "¥98.00",
        "price_n": "¥78.40",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29279977-1_l_6.jpg"
      },
      {
        "title": "公司简史",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "约翰・米克尔思韦特，阿德里安・伍尔德里奇",
        "date": "2021-07-01",
        "press": "北京大学出版社",
        "price_r": "¥59.00",
        "price_n": "¥47.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29282031-1_l_9.jpg"
      },
      {
        "title": "瘟疫周期：人口、经济与传染病的博弈循环",
        "recommend": "100%推荐",
        "star": "12条评论",
        "author": "查尔斯・肯尼（Charles Kenny）",
        "date": "2021-07-01",
        "press": "中信出版社",
        "price_r": "¥78.00",
        "price_n": "¥58.50",
        "price_e": "¥54.60",
        "href": "http://139.155.51.18/img/economics/29263465-1_l_8.jpg"
      },
      {
        "title": "中国红色金融史",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "中国金融思想政治工作研究会红色金融史编写",
        "date": "2021-06-01",
        "press": "中国财政经济出版社",
        "price_r": "¥98.00",
        "price_n": "¥71.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29274904-1_l_1.jpg"
      },
      {
        "title": "全球贸易冲突：16―20世纪",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[加]卜正民 等著 [意]吕西安・科帕拉罗  [",
        "date": "2021-07-01",
        "press": "中国人民大学出版社",
        "price_r": "¥79.00",
        "price_n": "¥63.60",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29269768-1_l_5.jpg"
      },
      {
        "title": "读懂双循环新发展格局",
        "recommend": "100%推荐",
        "star": "50条评论",
        "author": "刘元春",
        "date": "2021-06-01",
        "press": "中信出版社",
        "price_r": "¥68.00",
        "price_n": "¥51.00",
        "price_e": "¥47.60",
        "href": "http://139.155.51.18/img/economics/29262308-1_l_3.jpg"
      },
      {
        "title": "财富的未来：技术变革时代的新经济体系与价值重塑",
        "recommend": "100%推荐",
        "star": "21条评论",
        "author": "佐藤航阳",
        "date": "2021-06-30",
        "press": "中信出版社",
        "price_r": "¥58.00",
        "price_n": "¥43.50",
        "price_e": "¥24.99",
        "href": "http://139.155.51.18/img/economics/29258924-1_l_3.jpg"
      },
      {
        "title": "房地产企业全流程税务问题与应对实战",
        "recommend": "100%推荐",
        "star": "5条评论",
        "author": "屠建清",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥88.00",
        "price_n": "¥43.60",
        "price_e": "¥48.50",
        "href": "http://139.155.51.18/img/economics/29263483-1_l_3.jpg"
      },
      {
        "title": "高质量发展：迈上现代化新征程的中国",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "贾康 等 著",
        "date": "2021-06-24",
        "press": "中共中央党校出版社",
        "price_r": "¥59.80",
        "price_n": "¥43.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29264522-1_l_8.jpg"
      },
      {
        "title": "探索的历程",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "许成钢",
        "date": "2021-07-15",
        "press": "中信出版社",
        "price_r": "¥89.00",
        "price_n": "¥66.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29274298-1_l_1.jpg"
      },
      {
        "title": "美元真相",
        "recommend": "100%推荐",
        "star": "7条评论",
        "author": "达尔辛妮・大卫（Dharshini David）",
        "date": "2021-06-01",
        "press": "中信出版社",
        "price_r": "¥59.00",
        "price_n": "¥44.20",
        "price_e": "¥41.30",
        "href": "http://139.155.51.18/img/economics/29266238-1_l_9.jpg"
      },
      {
        "title": "指数型商机：为你揭秘那些你看不见、看不懂的15个重要趋势",
        "recommend": "100%推荐",
        "star": "6条评论",
        "author": "[加]詹姆斯・坎顿 著 张琪 高妍 译 湛庐文化 出品",
        "date": "2021-07-17",
        "press": "天津科学技术出版社",
        "price_r": "¥129.90",
        "price_n": "¥97.40",
        "price_e": "¥87.68",
        "href": "http://139.155.51.18/img/economics/29265058-1_l_6.jpg"
      },
      {
        "title": "中国城乡融合发展研究",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "王颂吉等",
        "date": "2021-07-01",
        "press": "科学出版社",
        "price_r": "¥105.00",
        "price_n": "¥88.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29279866-1_l_3.jpg"
      },
      {
        "title": "从犀牛到独角兽：传统企业如何实现数字化转型",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[俄]维克多・奥洛夫斯基、弗拉基米尔・科罗夫金，译者：彭相珍 周雁洁",
        "date": "2021-07-01",
        "press": "中译出版社（原中国对外翻译出版公司）",
        "price_r": "¥68.00",
        "price_n": "¥48.10",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29274290-1_l_15.jpg"
      },
      {
        "title": "中国资本市场新变局",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "刘青松",
        "date": "2021-07-01",
        "press": "中译出版社（原中国对外翻译出版公司）",
        "price_r": "¥78.00",
        "price_n": "¥39.00",
        "price_e": "¥35.00",
        "href": "http://139.155.51.18/img/economics/29265116-1_l_9.jpg"
      },
      {
        "title": "财富与影响力--美国的经济不平等与政治权力(东方编译所译丛)",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[美]马丁・吉伦斯 著; 孟天广，郭凤林 译",
        "date": "2021-07-01",
        "press": "上海人民出版社",
        "price_r": "¥79.00",
        "price_n": "¥64.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29276381-1_l_3.jpg"
      },
      {
        "title": "中国与全球产业链：理论与实证",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "崔晓敏",
        "date": "2021-04-01",
        "press": "上海三联书店",
        "price_r": "¥68.00",
        "price_n": "¥53.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29268262-1_l_8.jpg"
      },
      {
        "title": "金融常识从入门到精通（成功励志系列全彩美绘插画版,一看就懂的金融常识，从零开始读懂金融学)",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "张卉妍",
        "date": "2021-06-01",
        "press": "四川人民出版社",
        "price_r": "¥49.90",
        "price_n": "¥30.80",
        "price_e": "¥29.99",
        "href": "http://139.155.51.18/img/economics/29265382-1_l_3.jpg"
      },
      {
        "title": "需求侧管理：双循环格局下中国经济新动能",
        "recommend": "100%推荐",
        "star": "6条评论",
        "author": "豆大帷",
        "date": "2021-05-01",
        "press": "中国经济出版社",
        "price_r": "¥59.80",
        "price_n": "¥47.40",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29263326-1_l_9.jpg"
      },
      {
        "title": "用得上的资本论：当代社会人生存指南 # 内含《资本论》中所有经济现象和理论，迅速认清老板意图，职场人活学活用的“生存指南”",
        "recommend": "100%推荐",
        "star": "36条评论",
        "author": "周德宇 著",
        "date": "2021-06-01",
        "press": "辽宁人民出版社",
        "price_r": "¥49.80",
        "price_n": "¥24.30",
        "price_e": "¥29.99",
        "href": "http://139.155.51.18/img/economics/29262582-1_l_8.jpg"
      },
      {
        "title": "数字经济与5G新商机",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "彭昭",
        "date": "2021-07-01",
        "press": "北京理工大学出版社",
        "price_r": "¥69.00",
        "price_n": "¥55.20",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29281763-1_l_4.jpg"
      },
      {
        "title": "机器人伦理学",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "[美]帕特里克・林，[美]凯斯・阿布尼，[美]乔治・A.贝基",
        "date": "2021-06-01",
        "press": "人民邮电出版社",
        "price_r": "¥118.00",
        "price_n": "¥58.40",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29266198-1_l_3.jpg"
      },
      {
        "title": "财富、贫穷与政治：?被称为“每个总统候选人都应该读的一本书”",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "Thomas Sowell",
        "date": "2021-09-01",
        "press": "浙江教育出版社",
        "price_r": "¥45.00",
        "price_n": "¥33.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29278374-1_l_5.jpg"
      },
      {
        "title": "元宇宙：互联网的未来就是元宇宙(经济学家朱嘉明，金融博物馆理事长王巍作序推荐）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "赵国栋、易欢欢、徐远重 著",
        "date": "2021-08-01",
        "press": "中译出版社（原中国对外翻译出版公司）",
        "price_r": "¥68.00",
        "price_n": "¥68.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29277036-1_l_22.jpg"
      },
      {
        "title": "经济学第一课",
        "recommend": "100%推荐",
        "star": "14条评论",
        "author": "林毅夫",
        "date": "2021-06-01",
        "press": "中信出版社",
        "price_r": "¥59.00",
        "price_n": "¥44.20",
        "price_e": "¥41.30",
        "href": "http://139.155.51.18/img/economics/29266237-1_l_9.jpg"
      },
      {
        "title": "黄金与美元危机――自由兑换的未来(经济学名著译丛)",
        "recommend": "100%推荐",
        "star": "4条评论",
        "author": "[美]罗伯特・特里芬 著  陈尚霖 雷达 译",
        "date": "2021-06-01",
        "press": "商务印书馆",
        "price_r": "¥39.00",
        "price_n": "¥30.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29265768-1_l_6.jpg"
      },
      {
        "title": "中国县域经济发展报告（2020）",
        "recommend": "100%推荐",
        "star": "6条评论",
        "author": "吕风勇,邹琳华",
        "date": "2021-06-02",
        "press": "中国社会科学出版社",
        "price_r": "¥68.00",
        "price_n": "¥48.30",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29259109-1_l_2.jpg"
      },
      {
        "title": "新中国70年中国工业产业政策演进研究",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "李媛",
        "date": "2019-10-01",
        "press": "中国经济出版社",
        "price_r": "¥69.00",
        "price_n": "¥54.30",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29257160-1_l_1.jpg"
      },
      {
        "title": "2021年中国私募基金研究报告",
        "recommend": "100%推荐",
        "star": "39条评论",
        "author": "曹泉伟，陈卓 等",
        "date": "2021-05-01",
        "press": "经济科学出版社",
        "price_r": "¥68.00",
        "price_n": "¥51.30",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29256345-1_l_2.jpg"
      },
      {
        "title": "国际商务迷局--来自毅伟商学院的26堂经典案例课",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "刘庆林，刘素，[加]包铭心（Paul W. Beamis",
        "date": "2021-07-01",
        "press": "经济科学出版社",
        "price_r": "¥79.00",
        "price_n": "¥63.60",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29279910-1_l_1.jpg"
      },
      {
        "title": "《民法典》颁布对保险业的影响",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "中国保险行业协会 编著",
        "date": "2021-06-01",
        "press": "中国金融出版社",
        "price_r": "¥86.00",
        "price_n": "¥70.40",
        "price_e": null,
        "href": "http://139.155.51.18/img/economics/29279286-1_l_3.jpg"
      }
    ]
    };
  }
}
</script>

<style scoped>

.ul_right{
  display:flex;
  flex-wrap: wrap;
  list-style: none;
  flex-direction: row;
}

.li_{
  width: 160px;
  height: 200px;
  margin: 20px;
  line-height: 300px;
  background: black;
}
.li_right{
  width: 225px;
  margin-left: 40px;
}
.right{
  margin-left: 10px;
}
</style>
