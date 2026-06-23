let count = 0;

function updateDisplay() {
    document.getElementById("count").innerHTML = count;

    const message = document.getElementById("message");

    if (count === 0) {
        message.innerHTML = "スタート地点です";
        document.body.style.background =
        "linear-gradient(135deg, lightgreen, white)";
    }

    else if (count < 0) {
        message.innerHTML = "ひくなってんぞ"
        document.body.style.background =
        "red";
    }
    else if (count < 5) {
        message.innerHTML = "少し増えてきました";
        document.body.style.background =
        "linear-gradient(135deg, lightgreen, white)";

    }
    else if (count < 10) {
        message.innerHTML = "いい感じ！";
        document.body.style.background =
        "linear-gradient(135deg, lightgreen, white)";
    }
    else {
        message.innerHTML = "10回達成！すごい！";
        document.body.style.background =
        "lightgreen";
    }
}

function plus() {
    count++;
    updateDisplay();
}

function minus() {
    
        count--;
 
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}