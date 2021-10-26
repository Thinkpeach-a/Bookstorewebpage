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
        "title": "经纬度丛书・秦制两千年：封建帝王的权力规则（豆瓣9.1高分好书备受读者赞誉，上市五天即加印！）",
        "recommend": "99.9%推荐",
        "star": "1853条评论",
        "author": "谌旭彬",
        "date": "2021-07-01",
        "press": "浙江人民出版社",
        "press_r": "¥88.00",
        "press_n": "¥44.00",
        "press_e": "¥19.99",
        "href": "http://139.155.51.18/img/history/29257830-1_l_26.jpg"
      },
      {
        "title": "爪牙：清代县衙的书吏与差役（颠覆人们对吏役的刻板印象，从“爪牙”透视中华帝国晚期的历史。）",
        "recommend": "100%推荐",
        "star": "22条评论",
        "author": "（美）白德瑞 著 尤陈俊，赖骏楠 译",
        "date": "2021-07-01",
        "press": "广西师范大学出版社",
        "press_r": "¥98.00",
        "press_n": "¥49.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29260835-1_l_15.jpg"
      },
      {
        "title": "汗青堂丛书087・嘉靖帝的四季：皇帝与首辅",
        "recommend": "100%推荐",
        "star": "426条评论",
        "author": "窦德士John W. Dardess",
        "date": "2021-06-01",
        "press": "九州出版社",
        "press_r": "¥68.00",
        "press_n": "¥51.00",
        "press_e": null,
        "href": "http://img3m2.ddimg.cn/5/3/29255792-1_l_24.jpg"
      },
      {
        "title": "汉兴：从吕后到汉文帝",
        "recommend": "100%推荐",
        "star": "3条评论",
        "author": "李开元",
        "date": "2021-07-22",
        "press": "生活.读书.新知三联书店",
        "press_r": "¥59.00",
        "press_n": "¥44.20",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29277332-1_l_5.jpg"
      },
      {
        "title": "王安石（论衡系列）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[日]三浦国雄 著; 李若愚，张博 译",
        "date": "2021-06-01",
        "press": "上海人民出版社",
        "press_r": "¥48.00",
        "press_n": "¥24.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29269538-1_l_6.jpg"
      },
      {
        "title": "草原帝国――拓跋魏王朝之兴衰",
        "recommend": "100%推荐",
        "star": "3条评论",
        "author": "陈正祥",
        "date": "2021-07-01",
        "press": "山西人民出版社发行部",
        "press_r": "¥48.00",
        "press_n": "¥23.80",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29269519-1_l_6.jpg"
      },
      {
        "title": "回望：近代一百年",
        "recommend": "100%推荐",
        "star": "14条评论",
        "author": "马勇 著;",
        "date": "2021-07-01",
        "press": "新星出版社",
        "press_r": "¥68.00",
        "press_n": "¥34.00",
        "press_e": "¥31.99",
        "href": "http://139.155.51.18/img/history/29262963-1_l_6.jpg"
      },
      {
        "title": "跟大师悟历史：细说中国史 一看就放不下的中国史",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "吕思勉",
        "date": "2020-11-01",
        "press": "天津人民出版社",
        "press_r": "¥42.00",
        "press_n": "¥21.00",
        "press_e": "¥12.60",
        "href": "http://139.155.51.18/img/history/29268680-1_l_8.jpg"
      },
      {
        "title": "浮生:水上人的历史人类学研究",
        "recommend": "99.3%推荐",
        "star": "135条评论",
        "author": "贺喜、科大卫　主编",
        "date": "2021-06-01",
        "press": "中西书局",
        "press_r": "¥108.00",
        "press_n": "¥79.50",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29261087-1_l_12.jpg"
      },
      {
        "title": "秦制两千年：封建帝王的权力规则（限量签名本）",
        "recommend": "0%推荐",
        "star": "1条评论",
        "author": "谌旭彬",
        "date": "2021-07-01",
        "press": "浙江人民出版社",
        "press_r": "¥88.00",
        "press_n": "¥44.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29272067-1_l_14.jpg"
      },
      {
        "title": "从中州到钱塘：虞云国说宋朝",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "虞云国 著",
        "date": "2021-07-10",
        "press": "中华书局",
        "press_r": "¥58.00",
        "press_n": "¥49.00",
        "press_e": null,
        "href": "http://img3m1.ddimg.cn/12/11/29274411-1_l_11.jpg"
      },
      {
        "title": "古代人的日常生活：古代也有“996“工作制吗？（古代房价高吗？古代有“天价彩礼”吗？一本书满足你对古人日常生活的全部好奇！）",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "讲历史的王老师",
        "date": "2021-07-01",
        "press": "江苏凤凰文艺出版社",
        "press_r": "¥49.90",
        "press_n": "¥35.90",
        "press_e": "¥49.90",
        "href": "http://139.155.51.18/img/history/29267606-1_l_6.jpg"
      },
      {
        "title": "大清侃史官：这是一本让你读得开心、记得牢靠的正经清朝史",
        "recommend": "100%推荐",
        "star": "16条评论",
        "author": "李飞 著 人天兀鲁思 出品",
        "date": "2021-08-01",
        "press": "中国华侨出版社",
        "press_r": "¥49.80",
        "press_n": "¥24.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29278598-1_l_3.jpg"
      },
      {
        "title": "历史叙事三部曲（秦崩+楚亡+汉兴）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "李开元",
        "date": "2021-07-14",
        "press": "生活.读书.新知三联书店",
        "press_r": "¥149.00",
        "press_n": "¥111.70",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29277594-1_l_18.jpg"
      },
      {
        "title": "跟着唐博学历史（全三册）",
        "recommend": "100%推荐",
        "star": "15条评论",
        "author": "唐博 著",
        "date": "2021-05-01",
        "press": "广西师范大学出版社",
        "press_r": "¥150.00",
        "press_n": "¥112.50",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29255521-1_l_6.jpg"
      },
      {
        "title": "大宋侃史官：这是一本让你读得开心、记得牢靠的正经宋朝史",
        "recommend": "100%推荐",
        "star": "15条评论",
        "author": "李飞 著 人天兀鲁思 出品",
        "date": "2021-08-01",
        "press": "中国华侨出版社",
        "press_r": "¥49.80",
        "press_n": "¥24.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29278597-1_l_3.jpg"
      },
      {
        "title": "十九世纪西方演剧与晚清国人的接受（重新检视晚清国人的欧洲观剧笔记，发覆中西交流史上被遗忘甚或抹去的段落）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "孙柏",
        "date": "2021-05-01",
        "press": "上海人民出版社",
        "press_r": "¥59.00",
        "press_n": "¥52.50",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29272887-1_l_4.jpg"
      },
      {
        "title": "这个明史超有料（这个明史不一般，披露建文削藩朱棣迁都土木堡之变的历史隐秘，以史为据侦破野史传说的真相）",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "李翔斌",
        "date": "2021-07-31",
        "press": "应急管理出版社",
        "press_r": "¥45.00",
        "press_n": "¥22.50",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29275046-1_l_3.jpg"
      },
      {
        "title": "唐朝大变局之安史乱",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "云淡心远",
        "date": "2021-07-16",
        "press": "现代出版社",
        "press_r": "¥59.80",
        "press_n": "¥29.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29274226-1_l_3.jpg"
      },
      {
        "title": "启微・通往权力之路：康熙和他的继承人",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "吴秀良",
        "date": "2021-07-01",
        "press": "社会科学文献出版社",
        "press_r": "¥79.00",
        "press_n": "¥59.20",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29277260-1_l_3.jpg"
      },
      {
        "title": "吕思勉国史通论",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "吕思勉 著，张耕华  编",
        "date": "2021-07-10",
        "press": "中华书局",
        "press_r": "¥32.00",
        "press_n": "¥27.00",
        "press_e": null,
        "href": "http://img3m2.ddimg.cn/73/16/29272492-1_l_7.jpg"
      },
      {
        "title": "鸣沙丛书・晚清官场镜像：杜凤治日记研究",
        "recommend": "100%推荐",
        "star": "39条评论",
        "author": "邱捷 著",
        "date": "2021-05-01",
        "press": "社会科学文献出版社",
        "press_r": "¥99.00",
        "press_n": "¥74.20",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29259599-1_l_1.jpg"
      },
      {
        "title": "秦始皇传",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "黄中业 著;",
        "date": "2021-07-01",
        "press": "新星出版社",
        "press_r": "¥49.00",
        "press_n": "¥24.50",
        "press_e": "¥21.99",
        "href": "http://139.155.51.18/img/history/29267214-1_l_6.jpg"
      },
      {
        "title": "两宋党争",
        "recommend": "100%推荐",
        "star": "22条评论",
        "author": "赵益",
        "date": "2021-06-01",
        "press": "江苏人民出版社",
        "press_r": "¥58.00",
        "press_n": "¥29.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29252239-1_l_1.jpg"
      },
      {
        "title": "你一定爱读的中国战争史:西汉",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "小温侯",
        "date": "2021-07-30",
        "press": "台海出版社",
        "press_r": "¥99.80",
        "press_n": "¥49.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29273806-1_l_3.jpg"
      },
      {
        "title": "你一定爱读的中国战争史：三国",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "铁胆神侯夏侯杰",
        "date": "2021-07-16",
        "press": "民主与建设出版社",
        "press_r": "¥99.80",
        "press_n": "¥49.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29268670-1_l_2.jpg"
      },
      {
        "title": "崇祯的王朝",
        "recommend": "100%推荐",
        "star": "11条评论",
        "author": "夏维中",
        "date": "2021-06-01",
        "press": "江苏人民出版社",
        "press_r": "¥78.00",
        "press_n": "¥39.00",
        "press_e": "¥26.00",
        "href": "http://139.155.51.18/img/history/29261921-1_l_3.jpg"
      },
      {
        "title": "如果这是宋史（舒适阅读版全5册）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "高天流云",
        "date": "2021-06-01",
        "press": "浙江人民出版社",
        "press_r": "¥225.00",
        "press_n": "¥162.00",
        "press_e": "¥18.00",
        "href": "http://139.155.51.18/img/history/29250988-1_l_3.jpg"
      },
      {
        "title": "你一定爱读的中国战争史：秦朝",
        "recommend": "100%推荐",
        "star": "16条评论",
        "author": "始安公士或",
        "date": "2021-06-30",
        "press": "台海出版社",
        "press_r": "¥99.80",
        "press_n": "¥49.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29260447-1_l_6.jpg"
      },
      {
        "title": "中国的1948年:两种命运的决战",
        "recommend": "100%推荐",
        "star": "44条评论",
        "author": "刘统",
        "date": "2021-04-01",
        "press": "生活.读书.新知三联书店",
        "press_r": "¥68.00",
        "press_n": "¥55.60",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29257857-1_l_5.jpg"
      },
      {
        "title": "南明那些事儿――终局之地",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "士承东林",
        "date": "2021-07-01",
        "press": "中国大百科全书出版社",
        "press_r": "¥68.00",
        "press_n": "¥34.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29276720-1_l_3.jpg"
      },
      {
        "title": "秦始皇的用兵之道",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "墨香满楼",
        "date": "2021-07-10",
        "press": "现代出版社",
        "press_r": "¥45.00",
        "press_n": "¥21.20",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29274218-1_l_3.jpg"
      },
      {
        "title": "晚清之变--天崩地坼",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "吕峥 著",
        "date": "2021-07-17",
        "press": "中华书局",
        "press_r": "¥50.00",
        "press_n": "¥42.20",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29272490-1_l_3.jpg"
      },
      {
        "title": "跟着文物穿越历史：30件文物里的中国",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "张志浩 著  时代华语 出品",
        "date": "2021-08-01",
        "press": "民主与建设出版社",
        "press_r": "¥58.00",
        "press_n": "¥41.70",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29279636-1_l_6.jpg"
      },
      {
        "title": "鸣沙丛书・种瓜得豆：清末民初的阅读文化与接受政治（修订版）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "张仲民",
        "date": "2021-07-01",
        "press": "社会科学文献出版社",
        "press_r": "¥99.00",
        "press_n": "¥74.20",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29269146-1_l_3.jpg"
      },
      {
        "title": "石原莞尔与侵华战争",
        "recommend": "100%推荐",
        "star": "40条评论",
        "author": "马晓娟",
        "date": "2021-05-01",
        "press": "江苏人民出版社",
        "press_r": "¥98.00",
        "press_n": "¥49.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29257146-1_l_1.jpg"
      },
      {
        "title": "甲骨文丛书・六朝文明（中译修订版）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "丁爱博（Albert E. Dien）译：李梅田",
        "date": "2021-08-01",
        "press": "社会科学文献出版社",
        "press_r": "¥128.00",
        "press_n": "¥96.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29282661-1_l_3.jpg"
      },
      {
        "title": "启微・“俾斯麦的使团”：德国军事教官在中国（1884～1890）",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "[德] 白莎（Elisabeth Kaske） 译：孙立新,顾年茂",
        "date": "2021-07-01",
        "press": "社会科学文献出版社",
        "press_r": "¥79.00",
        "press_n": "¥59.20",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29277338-1_l_4.jpg"
      },
      {
        "title": "楚汉战争史",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "郑光霖",
        "date": "2021-06-01",
        "press": "中国书籍出版社",
        "press_r": "¥68.00",
        "press_n": "¥40.10",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29273738-1_l_3.jpg"
      },
      {
        "title": "景德元年：大宋王朝1004年的历史大变局",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "祁新龙",
        "date": "2021-08-20",
        "press": "中国友谊出版公司",
        "press_r": "¥52.00",
        "press_n": "¥37.40",
        "press_e": "¥20.80",
        "href": "http://139.155.51.18/img/history/29272965-1_l_3.jpg"
      },
      {
        "title": "隆庆皇帝全传",
        "recommend": "100%推荐",
        "star": "5条评论",
        "author": "廖心一",
        "date": "2021-07-01",
        "press": "金城出版社",
        "press_r": "¥58.00",
        "press_n": "¥43.50",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29255797-1_l_2.jpg"
      },
      {
        "title": "多是横戈马上行：野战主将粟裕",
        "recommend": "100%推荐",
        "star": "6条评论",
        "author": "张雄文 著",
        "date": "2021-05-01",
        "press": "中国文史出版社",
        "press_r": "¥58.00",
        "press_n": "¥29.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29255469-1_l_2.jpg"
      },
      {
        "title": "板门店谈判纪实",
        "recommend": "100%推荐",
        "star": "17条评论",
        "author": "赵勇田  牛�F",
        "date": "2021-05-01",
        "press": "重庆出版社",
        "press_r": "¥68.00",
        "press_n": "¥40.10",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29253478-1_l_6.jpg"
      },
      {
        "title": "印象・中国历史   隋唐卷  国家的统一与治理",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "郑学檬 著",
        "date": "2021-03-01",
        "press": "人民教育出版社",
        "press_r": "¥65.00",
        "press_n": "¥54.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29282485-1_l_4.jpg"
      },
      {
        "title": "印象・中国历史   明朝卷   政治脉动中的绅士社会",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "冯贤亮 著",
        "date": "2021-07-01",
        "press": "人民教育出版社",
        "press_r": "¥65.00",
        "press_n": "¥54.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29281755-1_l_4.jpg"
      },
      {
        "title": "烟台传：半岛的此在与彼在",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "王月鹏 著;",
        "date": "2021-07-01",
        "press": "新星出版社",
        "press_r": "¥89.00",
        "press_n": "¥44.50",
        "press_e": "¥39.99",
        "href": "http://139.155.51.18/img/history/29267215-1_l_8.jpg"
      },
      {
        "title": "你不了解的三国史(上下册）",
        "recommend": "100%推荐",
        "star": "1条评论",
        "author": "宿巍",
        "date": "2021-07-01",
        "press": "辽宁人民出版社",
        "press_r": "¥99.80",
        "press_n": "¥49.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29267129-1_l_6.jpg"
      },
      {
        "title": "宋仁宗时代的大人物",
        "recommend": "100%推荐",
        "star": "43条评论",
        "author": "唐博",
        "date": "2021-06-01",
        "press": "广东人民出版社",
        "press_r": "¥88.00",
        "press_n": "¥52.80",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29258599-1_l_4.jpg"
      },
      {
        "title": "印象・中国历史   清朝卷  近代前夜的王朝",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "仲伟民  李思楚 著",
        "date": "2021-05-01",
        "press": "人民教育出版社",
        "press_r": "¥70.00",
        "press_n": "¥59.10",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29281756-1_l_1.jpg"
      },
      {
        "title": "庐山旧事",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "马社香",
        "date": "2021-07-01",
        "press": "当代中国出版社",
        "press_r": "¥79.00",
        "press_n": "¥61.10",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29280952-1_l_1.jpg"
      },
      {
        "title": "带你去看大秦朝",
        "recommend": "100%推荐",
        "star": "4条评论",
        "author": "李世化",
        "date": "2021-06-01",
        "press": "中国商业出版社",
        "press_r": "¥48.00",
        "press_n": "¥24.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29264562-1_l_2.jpg"
      },
      {
        "title": "讲谈社05：中华的崩溃与扩大：魏晋南北朝",
        "recommend": "100%推荐",
        "star": "3条评论",
        "author": "川本芳昭 著，余晓潮 译，理想国 出品",
        "date": "2021-06-01",
        "press": "广西师范大学出版社",
        "press_r": "¥68.00",
        "press_n": "¥51.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29262676-1_l_3.jpg"
      },
      {
        "title": "爱上历史系列丛书――六合一统：中华帝国的崛起",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "杨志刚 著 葛剑雄 编 人天兀鲁思 出品",
        "date": "2021-08-01",
        "press": "广东人民出版社",
        "press_r": "¥58.00",
        "press_n": "¥29.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29275733-1_l_8.jpg"
      },
      {
        "title": "爱上历史系列丛书――泱泱汉风：两汉的兴衰",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "葛剑雄 著 人天兀鲁思 出品",
        "date": "2021-08-01",
        "press": "广东人民出版社",
        "press_r": "¥58.00",
        "press_n": "¥29.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29275729-1_l_9.jpg"
      },
      {
        "title": "爱上历史系列丛书――“天马”南牧：元朝的社会与文化",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "姚大力 著 人天兀鲁思 出品",
        "date": "2021-08-01",
        "press": "广东人民出版社",
        "press_r": "¥58.00",
        "press_n": "¥29.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29275727-1_l_9.jpg"
      },
      {
        "title": "爱上历史系列丛书――大明风云：明朝兴亡启示录",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "安震 著 葛剑雄 编 人天兀鲁思 出品",
        "date": "2021-08-01",
        "press": "广东人民出版社",
        "press_r": "¥58.00",
        "press_n": "¥29.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29275725-1_l_9.jpg"
      },
      {
        "title": "爱上历史系列丛书――残阳夕照：清代历史掠影",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "徐洪兴 著 葛剑雄 编 人天兀鲁思 出品",
        "date": "2021-08-01",
        "press": "广东人民出版社",
        "press_r": "¥58.00",
        "press_n": "¥29.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29275721-1_l_8.jpg"
      },
      {
        "title": "印象・中国历史 魏晋南北朝卷：在分分合合中前行",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "严耀中  著",
        "date": "2021-03-01",
        "press": "人民教育出版社",
        "press_r": "¥65.00",
        "press_n": "¥54.90",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29276719-1_l_6.jpg"
      },
      {
        "title": "闽西革命史珍稀史料集",
        "recommend": "0%推荐",
        "star": "条评论",
        "author": "中共福建省委党校福建行政学院中央苏区史研究中心、图书馆",
        "date": "2021-06-01",
        "press": "福建人民出版社",
        "press_r": "¥160.00",
        "press_n": "¥120.00",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29272832-1_l_3.jpg"
      },
      {
        "title": "大宋-跪着的巨人",
        "recommend": "100%推荐",
        "star": "2条评论",
        "author": "江永红",
        "date": "2021-05-01",
        "press": "中国人民解放军出版社",
        "press_r": "¥68.00",
        "press_n": "¥53.70",
        "press_e": null,
        "href": "http://139.155.51.18/img/history/29268304-1_l_3.jpg"
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
