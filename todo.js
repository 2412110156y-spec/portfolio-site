let todos = [];

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value;
    const message = document.getElementById("message");


    if(text === ""){
        message.innerHTML = "入力されていません"
        return;
    }
    
    message.innerHTML = ""

    todos.push(text);

    input.value = "";

    //ここまででは書いたものを配列に入れただけで表示はできない

    showTodos();
}

//indexはけしたいToDoの番号
function deleteTodo(index) {
    /* 配列から要素を削除する命令
    * 配列.splice(開始位置, 削除する個数);
    */
    todos.splice(index, 1);

    showTodos();
}


function showTodos() {

    const list = document.getElementById("todoList");

    //入力欄の文字を消す作業
    list.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {

        list.innerHTML += "<li>" + todos[i] + 
        " <button onclick='deleteTodo(" + i + ")'> 削除 </button> </li>";
        //a += b   ===   a = a + b
    }
}

