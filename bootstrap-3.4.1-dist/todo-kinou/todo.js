var addtodo = document.getElementById("add")
var searchEl = document.getElementById("search")
var todolistEl = document.getElementById("todolist")
    // 追加　事件
addtodo.addEventListener('click', function(e) {
    tuika()
})


function deletetodo(e) {
    var tempNo = e.parentNode
    tempNo.remove()
}

function tododone(e) {
    var classname = e.className
    if (classname.indexOf('tododone') > -1) {
        return
    }
    e.classList.add('tododone')
}