//ページを開いた瞬間に動く機能（ページを開いた時に一回だけ実行したい処理）
window.onload = function() {

    const summary =
        document.getElementById("summary");

    summary.innerHTML =
        "<p>大吉：0回</p>" +
        "<p>中吉：0回</p>" +
        "<p>小吉：0回</p>" +
        "<p>凶：0回</p>";

}
//おみくじを引いた回数を保存する箱
let drawCount = 0;

let histories = [];

function drawOmikuji() {
    const result = document.getElementById("result");
    const message = document.getElementById("message");
    const item = document.getElementById("item");
    const count = document.getElementById("count");
    const history = document.getElementById("history");
    const summary = document.getElementById("summary");

    const omikujiList = ["大吉", "中吉", "小吉", "凶"];
    const messages = [
        "今日は攻めてOK！",
        "落ち着いて進めば良い日",
        "小さな努力が大事",
        "無理せず慎重にいこう"
    ];
    const items = [
        "コーヒー",
        "青いペン",
        "チョコ",
        "ハンカチ"
    ];

    //omikujiList.lengthはここでは4と同じ意味
    const random = Math.floor(Math.random() * omikujiList.length);

    result.innerHTML = omikujiList[random];
    message.innerHTML = messages[random];
    item.innerHTML = "ラッキーアイテム：" + items[random];

    //このコードはclassを空っぽにするという意味
    result.className = "";
    result.classList.add("result-" + random);

    drawCount++;
    count.innerHTML = "引いた回数：" + drawCount + "回";

    //回数を数える箱
    let daikichiCount = 0;
    let chukichiCount = 0;
    let shokichiCount = 0;
    let kyoCount = 0;

    histories.push(omikujiList[random]);

    for (let i = 0; i < histories.length; i++) {
        if (histories[i] === "大吉") {
            daikichiCount++;
        }
        else if (histories[i] === "中吉") {
            chukichiCount++;
        }
        else if (histories[i] === "小吉") {
            shokichiCount++;
        }
        else {
            kyoCount++;
        }
    }

    summary.innerHTML =
    //<div class="graph-row"> が一行　　　<span>　が一列　という認識
    "<div class='graph-row'>" +
        "<span class='graph-label'>大吉</span>" +
        "<div class='graph-area'>" +
            "<div class='graph-bar daikichi-bar' style='width:" + (daikichiCount * 20) + "px;'></div>" +
        "</div>" +
        "<span class='graph-count'>" + daikichiCount + "回</span>" +
    "</div>" +

    "<div class='graph-row'>" +
        "<span class='graph-label'>中吉</span>" +
        "<div class='graph-area'>" +
            "<div class='graph-bar chukichi-bar' style='width:" + (chukichiCount * 20) + "px;'></div>" +
        "</div>" +
        "<span class='graph-count'>" + chukichiCount + "回</span>" +
    "</div>" +

    "<div class='graph-row'>" +
        "<span class='graph-label'>小吉</span>" +
        "<div class='graph-area'>" +
            "<div class='graph-bar shokichi-bar' style='width:" + (shokichiCount * 20) + "px;'></div>" +
        "</div>" +
        "<span class='graph-count'>" + shokichiCount + "回</span>" +
    "</div>" +

    "<div class='graph-row'>" +
        "<span class='graph-label'>凶</span>" +
        "<div class='graph-area'>" +
            "<div class='graph-bar kyo-bar' style='width:" + (kyoCount * 20) + "px;'></div>" +
        "</div>" +
        "<span class='graph-count'>" + kyoCount + "回</span>" +
    "</div>";

    /*summary.innerHTML =
    //"■".repeat()は■■■を作る機能
    // <span>は文章の一部分だけを囲む箱
        "<div class='summary-row'><span>大吉</span><span>" + "■".repeat(daikichiCount) + "</span><span>" + daikichiCount + "回</span></div>" +
        "<div class='summary-row'><span>中吉</span><span>" + "■".repeat(chukichiCount) + "</span><span>" + chukichiCount + "回</span></div>" +
        "<div class='summary-row'><span>小吉</span><span>" + "■".repeat(shokichiCount) + "</span><span>" + shokichiCount + "回</span></div>" +
        "<div class='summary-row'><span>凶</span><span>" + "■".repeat(kyoCount) + "</span><span>" + kyoCount + "回</span></div>";
    */
}
   /* 基礎的なやり方
     Math.random() は０以上１未満のランダムな数字を作る  0~0.9999•••
      4は　✖︎4という意味　故に0以上4未満
     Math.floor()は小数点を切り捨てる
     Math.floor(Math.random() * 4)これは故に0,1,2,3のどれかになる
    
     const random = Math.floor(Math.random() * 4);

    if (random === 0) {

        result.innerHTML = "大吉";
        //result.className　はHTMLのclassを変更するという意味
        //result.className = "daikichi"; とするとHTML
        // では<p id="result" class="daikichi">になる
        result.className = "daikichi";

    }

    else if (random === 1) {

        result.innerHTML = "中吉";
        result.className = "chukichi";

    }

    else if (random === 2) {

        result.innerHTML = "小吉";
        result.className = "shokichi";

    }

    else {

        result.innerHTML = "凶";
        result.className = "kyo";

    }
    */



