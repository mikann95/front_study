var addtodo = document.getElementById("add")
var searchEl = document.getElementById("search")
var todolistEl = document.getElementById("todolist")
    // 追加　事件
addtodo.addEventListener('click', function(e) {
    tuika()
})


function deletetodo(e) {
    var tempNo = e.parentNode.parentNode
    tempNo.remove()
}

function tododone(e) {
    var classname = e.className
    var todo_tag_icon = e.getElementsByTagName("span")[0]
    var classname2 = todo_tag_icon.className
    if (classname.indexOf('tododone') > -1 & classname2.indexOf('glyphicon-tag') > -1) {

        return
    }
    e.classList.add('tododone', 'success')
    todo_tag_icon.setAttribute("class", "glyphicon glyphicon-check")
}

//追加　メソッド
function tuika() {
    var inputEL = document.getElementById("search")
    var inputContent = inputEL.value
    if (inputContent) {
        var newtodo = document.createElement('tr')
        newtodo.setAttribute('onclick', 'tododone(this)')
        newtodo.innerHTML = "<th scope='row '><span class='glyphicon glyphicon-tag '></span></th>" +
            "<td class='todoContent'>" + inputContent + "</td>" +
            "<td><span  class='btn btn-info btn-xs delete'  onclick=deletetodo(this)>削除</span></td>";
        todolistEl.append(newtodo)
    }
    inputEL.value = '';
}

//Enter key
function tuika_input(e) {
    var evt = window.event || e;
    if (evt.keyCode == 13) {
        tuika()
    }
}