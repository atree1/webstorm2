// 모듈패턴
var todoList = (function () {

    function getAll(callback) {
        $.getJSON("http://10.10.10.93:8080/jsonEx/todo/all", function (list) {
            console.log(list);
            callback(list);
        });
    }

    function add(obj, callback) {
        $.post("http://10.10.10.93:8080/jsonEx/todo/add", {title: obj}, function (data) {
            console.log(data);
            callback(data.pk);
        });
    }

    function remove(pk, callback) {
        $.post("http://10.10.10.93:8080/jsonEx/todo/remove", {pk: pk}, function (data) {
            console.log(data);
            callback(data.result);
        });
    }
    function modify(obj,callback) {
        $.post("http://10.10.10.93:8080/jsonEx/todo/modify", obj, function (data) {
            console.log(data);
            callback(data.result);
        });
    }

    return {
        add: add,
        getAll: getAll,
        remove: remove,
        modify:modify
    }

})();
