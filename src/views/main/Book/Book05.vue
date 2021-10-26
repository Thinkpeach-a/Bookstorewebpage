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
        "title": "陶渊明也烦恼：给家长的传统文化启蒙课",
        "recommend": "100%推荐",
        "star": "451条评论",
        "author": "黄晓丹 |乐府文化",
        "date": "2021-04-30",
        "press": "北京联合出版有限公司",
        "price_r": "¥48.00",
        "price_n": "¥24.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29261316-1_l_14.jpg"
      },
      {
        "title": "中国人的礼仪文化",
        "recommend": "100%推荐",
        "star": "742条评论",
        "author": "单铭磊  编著",
        "date": "2021-06-01",
        "press": "化学工业出版社",
        "price_r": "¥59.80",
        "price_n": "¥29.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29260406-1_l_6.jpg"
      },
      {
        "title": "四书通讲（国学入门的阶梯，精装典藏版！百家讲坛刘强深入浅出梳理传统文化经典！）",
        "recommend": "100%推荐",
        "star": "159条评论",
        "author": "刘强 著",
        "date": "2021-06-01",
        "press": "广西师范大学出版社",
        "price_r": "¥88.00",
        "price_n": "¥44.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29261348-1_l_17.jpg"
      },
      {
        "title": "三经解读-老子解读",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "兰喜并",
        "date": "2021-06-29",
        "press": "三晋出版社",
        "price_r": "¥38.00",
        "price_n": "¥28.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29266514-1_l_3.jpg"
      },
      {
        "title": "中国符号系列绘本（第2辑）:中国火锅、中国风筝、中国糖画(原创中国传统文化绘本，文化学者黄永松先生作序推荐)",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "冯旭  张越、武美汐、田子千",
        "date": "2021-07-01",
        "press": "中国友谊出版公司",
        "price_r": "¥149.40",
        "price_n": "¥74.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29260646-1_l_6.jpg"
      },
      {
        "title": "失落的天书（增订本）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "刘宗迪",
        "date": "2016-05-01",
        "press": "商务印书馆",
        "price_r": "¥92.00",
        "price_n": "¥77.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29282102-1_l_3.jpg"
      },
      {
        "title": "中国符号・同心结：中国爱情(原创中国传统文化绘本，激发孩子从生活中发现祖先的智慧，文化学者黄永松作序推荐)",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "冯旭  戚翔宇",
        "date": "2021-08-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29277278-1_l_6.jpg"
      },
      {
        "title": "金瓶梅的艺术：妙解其中欲望与罪恶、 悲悯与救赎",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "孙述宇",
        "date": "2021-08-01",
        "press": "民主与建设出版社",
        "price_r": "¥68.00",
        "price_n": "¥54.40",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29282086-1_l_12.jpg"
      },
      {
        "title": "中国符号系列绘本（第3辑）:中国元宵、同心结、中国红包(原创中国传统文化绘本，文化学者黄永松先生作序推荐)",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "冯旭  郑诗颖、戚翔宇、詹欣媛",
        "date": "2021-08-01",
        "press": "中国友谊出版公司",
        "price_r": "¥149.40",
        "price_n": "¥74.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29277285-1_l_5.jpg"
      },
      {
        "title": "三经解读-论语解读",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "兰喜并",
        "date": "2021-06-29",
        "press": "三晋出版社",
        "price_r": "¥46.00",
        "price_n": "¥39.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29266515-1_l_3.jpg"
      },
      {
        "title": "三经解读-周易解读",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "兰喜并",
        "date": "2021-06-29",
        "press": "三晋出版社",
        "price_r": "¥46.00",
        "price_n": "¥34.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29266513-1_l_3.jpg"
      },
      {
        "title": "中国符号・中国火锅：天下第一锅(天下之大，百味其中。原创中国传统文化绘本，著名文化学者黄永松先生作序推荐)",
        "recommend": "100%推荐",
        "star": "11条评论",
        "author": "冯旭 张越",
        "date": "2021-07-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29259960-1_l_7.jpg"
      },
      {
        "title": "中国符号・中国糖画：观之若画，食之有味(原创中国传统文化绘本，著名文化学者黄永松先生作序推荐)",
        "recommend": "100%推荐",
        "star": "10条评论",
        "author": "冯旭 武美汐",
        "date": "2021-07-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29259962-1_l_4.jpg"
      },
      {
        "title": "世界遗产：发现中国",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "林德汤",
        "date": "2020-10-30",
        "press": "北京出版社",
        "price_r": "¥78.00",
        "price_n": "¥53.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29279956-1_l_3.jpg"
      },
      {
        "title": "中国酒文化(典藏版)",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "胡小伟  著",
        "date": "2021-06-30",
        "press": "中国国际广播出版社",
        "price_r": "¥36.00",
        "price_n": "¥27.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29264112-1_l_3.jpg"
      },
      {
        "title": "中国符号・中国风筝：春天万象更新(原创中国传统文化绘本，著名文化学者黄永松先生作序推荐)",
        "recommend": "100%推荐",
        "star": "94条评论",
        "author": "冯旭  田子千",
        "date": "2021-07-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29259965-1_l_5.jpg"
      },
      {
        "title": "京作硬木家具制作技艺（中国传统手工技艺丛书）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "邸保忠",
        "date": "2020-12-01",
        "press": "北京美术摄影出版社",
        "price_r": "¥68.00",
        "price_n": "¥51.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29272537-1_l_3.jpg"
      },
      {
        "title": "风入松：中国的词(沐斋作品集)",
        "recommend": "100%推荐",
        "star": "28条评论",
        "author": "沐斋 著/绘",
        "date": "2021-04-01",
        "press": "上海古籍出版社",
        "price_r": "¥78.00",
        "price_n": "¥60.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29258240-1_l_5.jpg"
      },
      {
        "title": "中国茶文化研究：神农武当道茶经",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "袁正洪",
        "date": "2021-06-15",
        "press": "华中科技大学出版社",
        "price_r": "¥68.00",
        "price_n": "¥32.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29256243-1_l_2.jpg"
      },
      {
        "title": "中国符号・中国红包：运气祝福(原创中国传统文化绘本，文化学者黄永松作序推荐)",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "冯旭 詹欣媛",
        "date": "2021-08-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29277279-1_l_6.jpg"
      },
      {
        "title": "图象几表",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "(明)方以智��；彭战果、郭旭校注",
        "date": "2021-06-01",
        "press": "华夏出版社",
        "price_r": "¥98.00",
        "price_n": "¥78.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29275108-1_l_3.jpg"
      },
      {
        "title": "钱文忠品三字经",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "钱文忠",
        "date": "2021-05-01",
        "press": "中国民主法制出版社",
        "price_r": "¥88.00",
        "price_n": "¥44.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29258624-1_l_3.jpg"
      },
      {
        "title": "山海经（四色彩印裸背锁线软精装版）",
        "recommend": "100%推荐",
        "star": "8条评论",
        "author": "杨维清 注译",
        "date": "2020-02-01",
        "press": "北京燕山出版社",
        "price_r": "¥69.80",
        "price_n": "¥34.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/28513792-1_l_3.jpg"
      },
      {
        "title": "民俗胜地：发现中国",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "林德汤",
        "date": "2020-10-30",
        "press": "北京出版社",
        "price_r": "¥78.00",
        "price_n": "¥53.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29279933-1_l_3.jpg"
      },
      {
        "title": "墨经趣谈(中华优秀传统文化系列读物)",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "孙中原",
        "date": "2021-07-01",
        "press": "商务印书馆",
        "price_r": "¥58.00",
        "price_n": "¥49.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29283017-1_l_3.jpg"
      },
      {
        "title": "中华书局月读杂志精编：中华经典名篇（全3册 精装本）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "中华书局《月读》编辑部 著",
        "date": "2021-07-29",
        "press": "大有书局",
        "price_r": "¥125.00",
        "price_n": "¥81.25",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29280911-1_l_6.jpg"
      },
      {
        "title": "身边的本草",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "阿南",
        "date": "2021-07-01",
        "press": "重庆出版社",
        "price_r": "¥78.00",
        "price_n": "¥61.60",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29279070-1_l_3.jpg"
      },
      {
        "title": "陈荣捷【近思录、传习录】详注集评（套装全两册）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "陈荣捷",
        "date": "2021-05-01",
        "press": "重庆出版社",
        "price_r": "¥127.80",
        "price_n": "¥100.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29279066-1_l_36233.jpg"
      },
      {
        "title": "诗品 二十四诗品全鉴",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "迟双明",
        "date": "2021-07-01",
        "press": "中国纺织出版社",
        "price_r": "¥48.00",
        "price_n": "¥24.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29278999-1_l_2.jpg"
      },
      {
        "title": "中国符号・中国元宵：团团圆圆(原创中国传统文化绘本，文化学者黄永松作序)",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "冯旭 郑诗颖",
        "date": "2021-08-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29277284-1_l_6.jpg"
      },
      {
        "title": "预见中国：中国功夫洞见中国与世界相处的方式",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "［美］ 龙安志（Laurence Brahm）",
        "date": "2021-08-01",
        "press": "中华工商联合出版社",
        "price_r": "¥49.90",
        "price_n": "¥22.50",
        "price_e": "¥12.00",
        "href": "http://139.155.51.18/img/culture/29271852-1_l_2.jpg"
      },
      {
        "title": "国学文粹",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "吴昱昊",
        "date": "2021-06-01",
        "press": "广西师范大学出版社",
        "price_r": "¥76.00",
        "price_n": "¥60.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29263914-1_l_3.jpg"
      },
      {
        "title": "琴事:琴馀笔记",
        "recommend": "100%推荐",
        "star": "14条评论",
        "author": "薛国安",
        "date": "2021-05-01",
        "press": "江苏凤凰文艺出版社",
        "price_r": "¥45.00",
        "price_n": "¥22.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29259961-1_l_6.jpg"
      },
      {
        "title": "中华优秀传统文化视野中的艺术、设计与非遗",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": null,
        "date": null,
        "press": "云南大学出版社",
        "price_r": "¥88.00",
        "price_n": "¥66.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29259499-1_l.jpg"
      },
      {
        "title": "中国的修养（中国礼乐文化丛书）",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "曹胜高",
        "date": "2021-06-01",
        "press": "上海文艺出版社",
        "price_r": "¥58.00",
        "price_n": "¥43.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29259359-1_l_2.jpg"
      },
      {
        "title": "茶经",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "陆羽",
        "date": "2021-05-01",
        "press": "浙江教育出版社",
        "price_r": "¥48.00",
        "price_n": "¥34.50",
        "price_e": "¥19.20",
        "href": "http://139.155.51.18/img/culture/29250691-1_l_6.jpg"
      },
      {
        "title": "史记：领导干部简读版",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "张大可 编著",
        "date": "2021-08-01",
        "press": "北京联合出版有限公司",
        "price_r": "¥78.00",
        "price_n": "¥56.10",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29281334-1_l_6.jpg"
      },
      {
        "title": "陶渊明也烦恼：给家长的传统文化启蒙课",
        "recommend": "100%推荐",
        "star": "451条评论",
        "author": "黄晓丹 |乐府文化",
        "date": "2021-04-30",
        "press": "北京联合出版有限公司",
        "price_r": "¥48.00",
        "price_n": "¥24.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29261316-1_l_14.jpg"
      },
      {
        "title": "中国人的礼仪文化",
        "recommend": "100%推荐",
        "star": "742条评论",
        "author": "单铭磊  编著",
        "date": "2021-06-01",
        "press": "化学工业出版社",
        "price_r": "¥59.80",
        "price_n": "¥29.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29260406-1_l_6.jpg"
      },
      {
        "title": "四书通讲（国学入门的阶梯，精装典藏版！百家讲坛刘强深入浅出梳理传统文化经典！）",
        "recommend": "100%推荐",
        "star": "159条评论",
        "author": "刘强 著",
        "date": "2021-06-01",
        "press": "广西师范大学出版社",
        "price_r": "¥88.00",
        "price_n": "¥44.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29261348-1_l_17.jpg"
      },
      {
        "title": "三经解读-老子解读",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "兰喜并",
        "date": "2021-06-29",
        "press": "三晋出版社",
        "price_r": "¥38.00",
        "price_n": "¥28.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29266514-1_l_3.jpg"
      },
      {
        "title": "中国符号系列绘本（第2辑）:中国火锅、中国风筝、中国糖画(原创中国传统文化绘本，文化学者黄永松先生作序推荐)",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "冯旭  张越、武美汐、田子千",
        "date": "2021-07-01",
        "press": "中国友谊出版公司",
        "price_r": "¥149.40",
        "price_n": "¥74.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29260646-1_l_6.jpg"
      },
      {
        "title": "中国符号・中国风筝：春天万象更新(原创中国传统文化绘本，著名文化学者黄永松先生作序推荐)",
        "recommend": "100%推荐",
        "star": "94条评论",
        "author": "冯旭  田子千",
        "date": "2021-07-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29259965-1_l_5.jpg"
      },
      {
        "title": "中国符号・中国糖画：观之若画，食之有味(原创中国传统文化绘本，著名文化学者黄永松先生作序推荐)",
        "recommend": "100%推荐",
        "star": "10条评论",
        "author": "冯旭 武美汐",
        "date": "2021-07-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29259962-1_l_4.jpg"
      },
      {
        "title": "三经解读-论语解读",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "兰喜并",
        "date": "2021-06-29",
        "press": "三晋出版社",
        "price_r": "¥46.00",
        "price_n": "¥39.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29266515-1_l_3.jpg"
      },
      {
        "title": "三经解读-周易解读",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "兰喜并",
        "date": "2021-06-29",
        "press": "三晋出版社",
        "price_r": "¥46.00",
        "price_n": "¥34.50",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29266513-1_l_3.jpg"
      },
      {
        "title": "国学文粹",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "吴昱昊",
        "date": "2021-06-01",
        "press": "广西师范大学出版社",
        "price_r": "¥76.00",
        "price_n": "¥60.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29263914-1_l_3.jpg"
      },
      {
        "title": "中国符号・同心结：中国爱情(原创中国传统文化绘本，激发孩子从生活中发现祖先的智慧，文化学者黄永松作序推荐)",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "冯旭  戚翔宇",
        "date": "2021-08-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29277278-1_l_6.jpg"
      },
      {
        "title": "中国符号・中国火锅：天下第一锅(天下之大，百味其中。原创中国传统文化绘本，著名文化学者黄永松先生作序推荐)",
        "recommend": "100%推荐",
        "star": "11条评论",
        "author": "冯旭 张越",
        "date": "2021-07-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29259960-1_l_7.jpg"
      },
      {
        "title": "中国酒文化(典藏版)",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "胡小伟  著",
        "date": "2021-06-30",
        "press": "中国国际广播出版社",
        "price_r": "¥36.00",
        "price_n": "¥27.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29264112-1_l_3.jpg"
      },
      {
        "title": "风入松：中国的词(沐斋作品集)",
        "recommend": "100%推荐",
        "star": "28条评论",
        "author": "沐斋 著/绘",
        "date": "2021-04-01",
        "press": "上海古籍出版社",
        "price_r": "¥78.00",
        "price_n": "¥60.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29258240-1_l_5.jpg"
      },
      {
        "title": "中国符号・中国元宵：团团圆圆(原创中国传统文化绘本，文化学者黄永松作序)",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "冯旭 郑诗颖",
        "date": "2021-08-01",
        "press": "中国友谊出版公司",
        "price_r": "¥49.80",
        "price_n": "¥24.90",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29277284-1_l_6.jpg"
      },
      {
        "title": "中华优秀传统文化经典导读",
        "recommend": "100%推荐",
        "star": "4条评论",
        "author": "杨美俊，温海明",
        "date": "2021-06-01",
        "press": "华东师范大学出版社",
        "price_r": "¥49.00",
        "price_n": "¥39.80",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29263904-1_l_3.jpg"
      },
      {
        "title": "失落的天书（增订本）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "刘宗迪",
        "date": "2016-05-01",
        "press": "商务印书馆",
        "price_r": "¥92.00",
        "price_n": "¥77.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29282102-1_l_3.jpg"
      },
      {
        "title": "中国符号系列绘本（第3辑）:中国元宵、同心结、中国红包(原创中国传统文化绘本，文化学者黄永松先生作序推荐)",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "冯旭  郑诗颖、戚翔宇、詹欣媛",
        "date": "2021-08-01",
        "press": "中国友谊出版公司",
        "price_r": "¥149.40",
        "price_n": "¥74.70",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29277285-1_l_5.jpg"
      },
      {
        "title": "钱文忠品三字经",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "钱文忠",
        "date": "2021-05-01",
        "press": "中国民主法制出版社",
        "price_r": "¥88.00",
        "price_n": "¥44.00",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29258624-1_l_3.jpg"
      },
      {
        "title": "金瓶梅的艺术：妙解其中欲望与罪恶、 悲悯与救赎",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "孙述宇",
        "date": "2021-08-01",
        "press": "民主与建设出版社",
        "price_r": "¥68.00",
        "price_n": "¥54.40",
        "price_e": null,
        "href": "http://139.155.51.18/img/culture/29282086-1_l_12.jpg"
      }
    ]
    }
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
