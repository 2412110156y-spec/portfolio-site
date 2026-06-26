function login() {

    const idInput = document.getElementById("userId");
    const passwordInput = document.getElementById("password");
    const result = document.getElementById("loginResult");

    const id = idInput.value;
    const password = passwordInput.value;

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
        idInput.value = "";
        passwordInput.value = "";
    }
    else {
        result.innerHTML = "IDまたはパスワードが違います";
    }

}

