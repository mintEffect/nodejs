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
      ulList[0] = {
        월요일: $(element).find("td:nth-child(3)").text().replaceAll('\t', "").replaceAll('\n',"").replaceAll("상세보기", "\n\n열량정보:\n").replaceAll("Kcal", "Kcal\n\n메뉴:\n").replaceAll("-", "\n"),
      };
      ulList[1] ={
        화요일: $(element).find("td:nth-child(4)").text().replaceAll('\t', "").replaceAll('\n',"").replaceAll("상세보기", "\n\n열량정보:\n").replaceAll("Kcal", "Kcal\n\n메뉴:\n").replaceAll("-", "\n"),
      };
      ulList[2] ={
        수요일: $(element).find("td:nth-child(5)").text().replaceAll('\t', "").replaceAll('\n',"").replaceAll("상세보기", "\n\n열량정보:\n").replaceAll("Kcal", "Kcal\n\n메뉴:\n").replaceAll("-", "\n"),
      };
      ulList[3] ={
        목요일: $(element).find("td:nth-child(6)").text().replaceAll('\t', "").replaceAll('\n',"").replaceAll("상세보기", "\n\n열량정보:\n").replaceAll("Kcal", "Kcal\n\n메뉴:\n").replaceAll("-", "\n"),
      };
      ulList[4] ={
        금요일: $(element).find("td:nth-child(7)").text().replaceAll('\t', "").replaceAll('\n',"").replaceAll("상세보기", "\n\n열량정보:\n").replaceAll("Kcal", "Kcal\n\n메뉴:\n").replaceAll("-", "\n"),
      };
    });
    console.log(ulList[0]);
    console.log(ulList[1]);
    console.log(ulList[2]);
    console.log(ulList[3]);
    console.log(ulList[4]);
  } catch (error) {
    console.error(error);
  }
};

getHtml();