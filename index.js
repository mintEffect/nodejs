const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
  try {
    // 1
    const html = await axios.get(
      "https://imae-m.goesn.kr/imae-m/ad/fm/foodmenu/selectFoodMenuView.do?mi=18982&schDt=2023-12-14"
    );
    let ulList = [];
    // 2
    const $ = cheerio.load(html.data);
    // 3
    const bodyList = $("div.bbs_WriteA");
    bodyList.map((i, element) => {
      ulList[i] = {
        date: i + 1,
        // 4
        kcal: $(list).find("p.fm_tit_p.mgt15").text(),
        menu: $(list).find("p:nth-child(3)").text(),
      };
    });
    console.log(ulList);
  } catch (error) {
    console.error(error);
  }
};

getHtml();