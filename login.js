function login() {

    const id = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("loginResult");

    if (id === "" && password ===""){
        result.innerHTML = "IDとパスワードを入力してください";
    }

    else if (id === "" ) {
        result.innerHTML = "IDを入力してください";
    }
    else if (password === "") {
        result.innerHTML = "パスワードを入力してください";
    }

    
    else if (id === "haruto2005327" && 
        password === "Haruto327"){
        result.innerHTML = "ログイン成功";
    }
    else {
        result.innerHTML = "IDまたはパスワードが違います";
    }

}

