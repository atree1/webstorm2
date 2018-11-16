var todosList = (function () {

    function add(obj, callback) {
        $.post("http://localhost:8080/TodoEx/todo/add", {title: obj}, function (data) {
                console.log(data);
                callback(data.pk);
            }
        );//end post
    }//end add

    function getAll(callback) {
        $.getJSON("http://localhost:8080/TodoEx/todo/getAll",function (list) {
            console.log(list);
            callback(list);
        })
    }
    function remove(pk,callback) {
        $.post("http://localhost:8080/TodoEx/todo/remove",{pk:pk},function (data) {
            console.log(data);

            callback(data.result);
        });
    }
    function modify(obj,callback) {
        $.post("http://localhost:8080/TodoEx/todo/modify",obj,function (data){
            console.log(data);
            callback(data.result);
        });
    }
    return{
        add:add,
        getAll:getAll,
        remove:remove,
        modify:modify
    }
})();

