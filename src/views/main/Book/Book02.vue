<!--计算机-->
<template>

  <div class="app">
    <div class="right">
      <ul class="ul_right">
        <li class="li_right" v-for="i in res" :key="i.id">
          <img  class="li_" :src="i.href" alt="">
          <br>
          <router-link :to="{name:'Details'}">
          <h4>书名：{{i.title}}</h4>
          <h5>作者: {{i.author}}</h5>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      currentDate: new Date(),
      res: [
      {
        "id": 1,
        "title": "Python编程 从入门到实践 第2版（百万册纪念版）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[美]埃里克・马瑟斯（Eric Matthes）",
        "date": "2021-05-01",
        "press": "人民邮电出版社",
        "price_r": "¥109.80",
        "price_n": "¥82.30",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29280602-1_l_3.jpg"
      },
      {
        "id": 2,
        "title": "学Python 不加班 轻松实现办公自动化",
        "recommend": "100%推荐",
        "star": "90条评论",
        "author": "何华平",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥99.00",
        "price_n": "¥49.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29261388-1_l_6.jpg"
      },
      {
        "id": 3,
        "title": "深入浅出Pandas：利用Python进行数据处理与分析",
        "recommend": "100%推荐",
        "star": "8条评论",
        "author": "李庆辉",
        "date": "2021-07-10",
        "press": "机械工业出版社",
        "price_r": "¥99.00",
        "price_n": "¥49.50",
        "price_e": "¥59.40",
        "href": "http://139.155.51.18/img/computer/29265806-1_l_3.jpg"
      },
      {
        "id": 4,
        "title": "敏捷测试 以持续测试促进持续交付",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "朱少民 李洁",
        "date": "2021-08-01",
        "press": "人民邮电出版社",
        "price_r": "¥129.90",
        "price_n": "¥64.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29265341-1_l_15.jpg"
      },
      {
        "id": 5,
        "title": "C语言程序设计 现代方法 第2版・修订版",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "[美]K.N.金（K.N.King）",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥129.80",
        "price_n": "¥92.10",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29283933-1_l_4.jpg"
      },
      {
        "id": 6,
        "title": "JavaScript悟道",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "[美]道格拉斯・克罗克福德（Douglas Crockford）",
        "date": "2021-06-01",
        "press": "人民邮电出版社",
        "price_r": "¥99.80",
        "price_n": "¥74.80",
        "price_e": "¥45.00",
        "href": "http://139.155.51.18/img/computer/29271027-1_l_9.jpg"
      },
      {
        "id": 7,
        "title": "算法训练营：海量图解+竞赛刷题（入门篇）",
        "recommend": "100%推荐",
        "star": "6条评论",
        "author": "陈小玉",
        "date": "2021-07-01",
        "press": "电子工业出版社",
        "price_r": "¥129.80",
        "price_n": "¥64.90",
        "price_e": "¥90.86",
        "href": "http://139.155.51.18/img/computer/29271487-1_l_12.jpg"
      },
      {
        "id": 8,
        "title": "架构真意：企业级应用架构设计方法论与实践",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "范钢,孙玄",
        "date": "2021-07-31",
        "press": "机械工业出版社",
        "price_r": "¥99.00",
        "price_n": "¥49.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29282425-1_l_3.jpg"
      },
      {
        "id": 9,
        "title": "自然语言处理：基于预训练模型的方法",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "车万翔",
        "date": "2021-07-01",
        "press": "电子工业出版社",
        "price_r": "¥118.00",
        "price_n": "¥59.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29280950-1_l_19.jpg"
      },
      {
        "id": 10,
        "title": "数据科学工程实践：用户行为分析与建模、A/B实验、SQLFlow",
        "recommend": "100%推荐",
        "star": "122条评论",
        "author": "谢梁,缪莹莹,高梓尧,王子玲",
        "date": "2021-06-10",
        "press": "机械工业出版社",
        "price_r": "¥89.00",
        "price_n": "¥44.50",
        "price_e": "¥53.40",
        "href": "http://139.155.51.18/img/computer/29273587-1_l_6.jpg"
      },
      {
        "id": 11,
        "title": "现代统计图形",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "赵鹏 谢益辉 黄湘云",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥99.80",
        "price_n": "¥74.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29271461-1_l_9.jpg"
      },
      {
        "id": 12,
        "title": "剑指Offer（专项突破版）：数据结构与算法名企面试题精讲",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "何海涛",
        "date": "2021-08-06",
        "press": "电子工业出版社",
        "price_r": "¥89.00",
        "price_n": "¥44.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29267036-1_l_9.jpg"
      },
      {
        "id": 13,
        "title": "领域驱动设计 软件核心复杂性应对之道 修订版",
        "recommend": "100%推荐",
        "star": "7301条评论",
        "author": "[美] 埃里克 埃文斯（Eric Evans）",
        "date": "2021-05-01",
        "press": "人民邮电出版社",
        "price_r": "¥99.80",
        "price_n": "¥49.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29282044-1_l_18.jpg"
      },
      {
        "id": 14,
        "title": "你真的会写代码吗",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[意]马尔科・法埃拉（Marco Faella）",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥89.80",
        "price_n": "¥67.30",
        "price_e": "¥45.00",
        "href": "http://139.155.51.18/img/computer/29273992-1_l_5.jpg"
      },
      {
        "id": 15,
        "title": "机器学习数学基础（Python语言实现）",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "周洋 张小霞  著",
        "date": "2021-08-01",
        "press": "北京大学出版社",
        "price_r": "¥69.00",
        "price_n": "¥51.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29284712-1_l_5.jpg"
      },
      {
        "id": 16,
        "title": "Kubernetes编程",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "迈克尔?豪森布拉斯,斯特凡?西曼斯基,李凡希,任震宇",
        "date": "2021-07-02",
        "press": "中国电力出版社",
        "price_r": "¥88.00",
        "price_n": "¥66.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29274796-1_l_9.jpg"
      },
      {
        "id": 17,
        "title": "C#入门经典：更新至C# 9和.NET 5",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[英]马克・J.普赖斯(Mark J.Price) 著；叶伟民 译",
        "date": "2021-07-01",
        "press": "清华大学出版社",
        "price_r": "¥139.00",
        "price_n": "¥126.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29263399-1_l_6.jpg"
      },
      {
        "id": 18,
        "title": "Python商业数据分析：零售和电子商务案例详解（双色）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "零一",
        "date": "2021-07-01",
        "press": "电子工业出版社",
        "price_r": "¥79.00",
        "price_n": "¥39.50",
        "price_e": "¥55.30",
        "href": "http://139.155.51.18/img/computer/29258463-1_l_2.jpg"
      },
      {
        "id": 19,
        "title": "C++服务器开发精髓",
        "recommend": "100%推荐",
        "star": "181条评论",
        "author": "张远龙",
        "date": "2021-06-01",
        "press": "电子工业出版社",
        "price_r": "¥168.00",
        "price_n": "¥84.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29262463-1_l_3.jpg"
      },
      {
        "id": 20,
        "title": "Python自动化办公：3分钟完成一天工作",
        "recommend": "100%推荐",
        "star": "9条评论",
        "author": "廖茂文",
        "date": "2021-06-01",
        "press": "电子工业出版社",
        "price_r": "¥89.00",
        "price_n": "¥44.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29258634-1_l_17.jpg"
      },
      {
        "id": 21,
        "title": "Python编程实战 妙趣横生的项目之旅",
        "recommend": "100%推荐",
        "star": "50条评论",
        "author": "[美]李・沃恩（Lee Vaughan）",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥99.90",
        "price_n": "¥49.90",
        "price_e": "¥63.94",
        "href": "http://139.155.51.18/img/computer/29259346-1_l_2.jpg"
      },
      {
        "id": 22,
        "title": "WebRTC音视频实时互动技术：原理、实战与源码分析",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "李超",
        "date": "2021-07-25",
        "press": "机械工业出版社",
        "price_r": "¥89.00",
        "price_n": "¥78.30",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29271447-1_l_16.jpg"
      },
      {
        "id": 23,
        "title": "Java代码审计 入门篇",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "徐焱 陈俊杰 李柯俊 章宇 蔡国宝",
        "date": "2021-08-01",
        "press": "人民邮电出版社",
        "price_r": "¥129.90",
        "price_n": "¥97.40",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29264677-1_l_11.jpg"
      },
      {
        "id": 24,
        "title": "量子计算机编程 从入门到实践（全彩印刷）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[美] 埃里克・R. 约翰斯顿 [英] 尼古拉斯・哈里根 [西] 梅塞德丝・希梅",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥129.80",
        "price_n": "¥102.30",
        "price_e": "¥65.00",
        "href": "http://139.155.51.18/img/computer/29257667-1_l_7.jpg"
      },
      {
        "id": 25,
        "title": "实战低代码",
        "recommend": "100%推荐",
        "star": "40条评论",
        "author": "韦青,赵健,王芷,崔宏禹",
        "date": "2021-06-30",
        "press": "机械工业出版社",
        "price_r": "¥99.00",
        "price_n": "¥49.50",
        "price_e": "¥59.40",
        "href": "http://139.155.51.18/img/computer/29270421-1_l_6.jpg"
      },
      {
        "id": 26,
        "title": "VXLAN BGP EVPN数据中心构建指南",
        "recommend": "100%推荐",
        "star": "15条评论",
        "author": "[美]卢卡斯・克拉特格（Lukas Krattiger）[美]希亚姆・卡帕迪亚（",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥99.90",
        "price_n": "¥49.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29273747-1_l_6.jpg"
      },
      {
        "id": 27,
        "title": "混沌工程：复杂系统韧性实现之道",
        "recommend": "100%推荐",
        "star": "30条评论",
        "author": "[美]凯西・罗森塔尔(Casey Rosenthal),[美]",
        "date": "2021-06-10",
        "press": "机械工业出版社",
        "price_r": "¥119.00",
        "price_n": "¥59.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29266322-1_l_9.jpg"
      },
      {
        "id": 28,
        "title": "用Python编程和实践！数学教科书",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "[日] 我妻 幸长 著",
        "date": "2021-06-01",
        "press": "水利水电出版社",
        "price_r": "¥89.80",
        "price_n": "¥61.10",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29260052-1_l_7.jpg"
      },
      {
        "id": 29,
        "title": "企业级云原生架构 技术、服务与实践",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "刘景应（四牛）",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥109.70",
        "price_n": "¥54.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29268578-1_l_6.jpg"
      },
      {
        "id": 30,
        "title": "Flutter企业级应用开发实战――闲鱼技术发展与创新",
        "recommend": "100%推荐",
        "star": "39条评论",
        "author": "闲鱼技术团队",
        "date": "2021-06-01",
        "press": "电子工业出版社",
        "price_r": "¥89.00",
        "price_n": "¥44.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29266303-1_l_6.jpg"
      },
      {
        "id": 31,
        "title": "超简单：用Python让Excel飞起来（实战150例）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "李杰臣",
        "date": "2021-07-28",
        "press": "机械工业出版社",
        "price_r": "¥79.80",
        "price_n": "¥65.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29265339-1_l_14.jpg"
      },
      {
        "id": 32,
        "title": "构建企业级推荐系统：算法、工程实现与案例分析",
        "recommend": "100%推荐",
        "star": "13条评论",
        "author": "刘强",
        "date": "2021-08-01",
        "press": "机械工业出版社",
        "price_r": "¥129.00",
        "price_n": "¥95.50",
        "price_e": "¥77.40",
        "href": "http://139.155.51.18/img/computer/29261803-1_l_5.jpg"
      },
      {
        "id": 33,
        "title": "编程猫：零基础趣味学Python",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "编程猫内容中心 编著",
        "date": "2021-07-01",
        "press": "中国青年出版社",
        "price_r": "¥79.90",
        "price_n": "¥39.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29261031-1_l_9.jpg"
      },
      {
        "id": 34,
        "title": "深入浅出Embedding：原理解析与应用实践",
        "recommend": "100%推荐",
        "star": "26条评论",
        "author": "吴茂贵,王红星",
        "date": "2021-06-10",
        "press": "机械工业出版社",
        "price_r": "¥99.00",
        "price_n": "¥49.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29274277-1_l_3.jpg"
      },
      {
        "id": 35,
        "title": "ASP.NET Core 3高级编程(第8版)",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[英] 亚当・弗里曼（Adam Freeman）著   杜静芬 程凤娟译",
        "date": "2021-07-01",
        "press": "清华大学出版社",
        "price_r": "¥268.00",
        "price_n": "¥227.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29263485-1_l_3.jpg"
      },
      {
        "id": 36,
        "title": "Oracle 19c从入门到精通（视频教学超值版）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "王英英",
        "date": "2021-08-01",
        "press": "清华大学出版社",
        "price_r": "¥89.00",
        "price_n": "¥66.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29258913-1_l_3.jpg"
      },
      {
        "id": 37,
        "title": "中台落地手记――业务服务化与数据资产化",
        "recommend": "100%推荐",
        "star": "4条评论",
        "author": "张亮 编著",
        "date": "2021-06-25",
        "press": "机械工业出版社",
        "price_r": "¥89.00",
        "price_n": "¥66.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29273332-1_l_4.jpg"
      },
      {
        "id": 38,
        "title": "编程原则：来自代码大师Max Kanat-Alexander的建议",
        "recommend": "100%推荐",
        "star": "3条评论",
        "author": "[美]马克斯・卡纳特-亚历山大(Max Kanat-Al",
        "date": "2021-06-25",
        "press": "机械工业出版社",
        "price_r": "¥79.00",
        "price_n": "¥39.50",
        "price_e": "¥47.40",
        "href": "http://139.155.51.18/img/computer/29269334-1_l_4.jpg"
      },
      {
        "id": 39,
        "title": "Shader开发实战",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[英]凯尔・哈拉迪（Kyle Halladay）著   郭华丰 韦静 译",
        "date": "2021-07-01",
        "press": "清华大学出版社",
        "price_r": "¥98.00",
        "price_n": "¥73.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29266635-1_l_12.jpg"
      },
      {
        "id": 40,
        "title": "React学习手册（第二版）",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "[美]亚历克斯?班克斯,[美]伊夫?波尔切洛,安道",
        "date": "2021-06-18",
        "press": "中国电力出版社",
        "price_r": "¥98.00",
        "price_n": "¥67.60",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29264184-1_l_7.jpg"
      },
      {
        "id": 41,
        "title": "秒懂设计模式",
        "recommend": "100%推荐",
        "star": "4条评论",
        "author": "刘韬",
        "date": "2021-07-01",
        "press": "人民邮电出版社",
        "price_r": "¥79.90",
        "price_n": "¥39.60",
        "price_e": "¥51.14",
        "href": "http://139.155.51.18/img/computer/29260655-1_l_3.jpg"
      },
      {
        "id": 42,
        "title": "数据分析从Excel到Power BI：Power BI商业数据分析思维、技术与实践",
        "recommend": "100%推荐",
        "star": "9条评论",
        "author": "张煜",
        "date": "2021-07-01",
        "press": "北京大学出版社",
        "price_r": "¥99.00",
        "price_n": "¥74.20",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29258622-1_l_9.jpg"
      },
      {
        "id": 43,
        "title": "区块链架构之美――从比特币、以太坊、超级账本看区块链架构设计",
        "recommend": "100%推荐",
        "star": "17条评论",
        "author": "何昊",
        "date": "2021-06-01",
        "press": "电子工业出版社",
        "price_r": "¥89.00",
        "price_n": "¥44.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29274267-1_l_8.jpg"
      },
      {
        "id": 44,
        "title": "鲲鹏架构入门与实战",
        "recommend": "100%推荐",
        "star": "8条评论",
        "author": "张磊",
        "date": "2021-05-01",
        "press": "清华大学出版社",
        "price_r": "¥129.00",
        "price_n": "¥96.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29270215-1_l_5.jpg"
      },
      {
        "id": 45,
        "title": "用Python编程和实践！区块链教科书",
        "recommend": "100%推荐",
        "star": "6条评论",
        "author": "[日] FLOC  著",
        "date": "2021-06-01",
        "press": "水利水电出版社",
        "price_r": "¥89.80",
        "price_n": "¥61.10",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29269999-1_l_9.jpg"
      },
      {
        "id": 46,
        "title": "图解HTTP + 图解TCP/IP + 图解网络硬件（套装共3册，当当）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": null,
        "date": null,
        "press": "人民邮电出版社",
        "price_r": "¥197.80",
        "price_n": "¥148.30",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29265826-1_l_7.jpg"
      },
      {
        "id": 47,
        "title": "Django 3项目实例精解",
        "recommend": "100%推荐",
        "star": "8条评论",
        "author": "[美]安东尼奥・米勒 著  李伟 译",
        "date": "2021-06-01",
        "press": "清华大学出版社",
        "price_r": "¥149.00",
        "price_n": "¥111.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29264678-1_l_3.jpg"
      },
      {
        "id": 48,
        "title": "疯狂Spring Boot终极讲义",
        "recommend": "95.8%推荐",
        "star": "24条评论",
        "author": "李刚",
        "date": "2021-06-01",
        "press": "电子工业出版社",
        "price_r": "¥168.00",
        "price_n": "¥84.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29264631-1_l_8.jpg"
      },
      {
        "id": 49,
        "title": "深入理解边缘计算：云 边 端工作原理与源码分析",
        "recommend": "100%推荐",
        "star": "4条评论",
        "author": "崔广章",
        "date": "2021-06-25",
        "press": "机械工业出版社",
        "price_r": "¥89.00",
        "price_n": "¥44.50",
        "price_e": "¥53.40",
        "href": "http://139.155.51.18/img/computer/29260508-1_l_11.jpg"
      },
      {
        "id": 50,
        "title": "轻松学编程:中小学C++零基础入门",
        "recommend": "100%推荐",
        "star": "7条评论",
        "author": "杨博洋、王建元、张登奎",
        "date": "2021-05-01",
        "press": "清华大学出版社",
        "price_r": "¥59.00",
        "price_n": "¥40.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29258607-1_l_8.jpg"
      },
      {
        "id": 51,
        "title": "信息学奥林匹克竞赛初赛精讲精练",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "陈文博,常强,陈跃坚",
        "date": "2021-07-25",
        "press": "机械工业出版社",
        "price_r": "¥69.00",
        "price_n": "¥51.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29279837-1_l_12.jpg"
      },
      {
        "id": 52,
        "title": "Python+Excel职场办公数据分析",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "王红明  张鸿斌",
        "date": "2021-07-25",
        "press": "机械工业出版社",
        "price_r": "¥89.00",
        "price_n": "¥65.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29279811-1_l_18.jpg"
      },
      {
        "id": 53,
        "title": "Spring Cloud Alibaba微服务实战",
        "recommend": "100%推荐",
        "star": "170条评论",
        "author": "周仲清",
        "date": "2021-07-01",
        "press": "北京大学出版社",
        "price_r": "¥79.00",
        "price_n": "¥59.20",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29278554-1_l_6.jpg"
      },
      {
        "id": 54,
        "title": "Web应用程序安全",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "[美]安德鲁・霍夫曼,卢浩,陈新",
        "date": "2021-06-23",
        "press": "中国电力出版社",
        "price_r": "¥88.00",
        "price_n": "¥60.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29277902-1_l_5.jpg"
      },
      {
        "id": 55,
        "title": "零基础学Python网络爬虫案例实战全流程详解（高级进阶篇）",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "王宇韬,吴子湛,史靖涵",
        "date": "2021-06-25",
        "press": "机械工业出版社",
        "price_r": "¥89.80",
        "price_n": "¥66.50",
        "price_e": "¥53.88",
        "href": "http://139.155.51.18/img/computer/29271763-1_l_21.jpg"
      },
      {
        "id": 56,
        "title": "工业控制系统网络安全实战",
        "recommend": "100%推荐",
        "star": "5条评论",
        "author": "安成飞 周玉刚  编著",
        "date": "2021-06-23",
        "press": "机械工业出版社",
        "price_r": "¥129.00",
        "price_n": "¥96.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29271467-1_l_3.jpg"
      },
      {
        "id": 57,
        "title": "Node与Express开发（第2版）",
        "recommend": "100%推荐",
        "star": "5条评论",
        "author": "[美]伊桑・布朗（Ethan Brown）",
        "date": "2021-06-01",
        "press": "人民邮电出版社",
        "price_r": "¥109.80",
        "price_n": "¥82.30",
        "price_e": "¥54.90",
        "href": "http://139.155.51.18/img/computer/29268509-1_l_2.jpg"
      },
      {
        "id": 58,
        "title": "金融级IT架构：数字银行的云原生架构解密",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "网商银行技术编委会",
        "date": "2021-07-01",
        "press": "电子工业出版社",
        "price_r": "¥109.00",
        "price_n": "¥73.10",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29268030-1_l_3.jpg"
      },
      {
        "id": 59,
        "title": "Django 3 Web应用开发从零开始学（视频教学版）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "刘亮亮 王金柱",
        "date": "2021-07-01",
        "press": "清华大学出版社",
        "price_r": "¥69.80",
        "price_n": "¥48.10",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29267033-1_l_16.jpg"
      },
      {
        "id": 60,
        "title": "Kubernetes即学即用（第二版）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "布兰登・柏恩思,乔・贝达,凯尔西・海托华,马晶慧",
        "date": "2021-07-02",
        "press": "中国电力出版社",
        "price_r": "¥78.00",
        "price_n": "¥53.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/computer/29264392-1_l_9.jpg"
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
a{
  color: #99a9bf;
  text-decoration: #42b983;
}
</style>
