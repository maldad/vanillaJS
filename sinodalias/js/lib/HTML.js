var HTML = (function (){

    var _wrap = function(obj){
        var _status = obj;
        var _wrapper = {
            "setId": function(_id){
                _status.setAttribute('id', _id);
                return _wrapper;
            },
            "setText": function(_text){
                _status.textContent = _text;
                return _wrapper;
            },
            "setAttribute": function(_attribute, value){
                _status.setAttribute(_attribute, value);
                return _wrapper;
            },
            "addClass": function(_class){
                _status.classList.add(_class);
                return _wrapper;
            },
            "appendChild": function(_child){
                _status.appendChild(_child);
                return _wrapper;
            },
            "element": function(){
                return _status;
            },
        };
        return _wrapper;
    };

    var _newElement = function(_tag){
        var newElement = document.createElement(_tag);
        return _wrap(newElement);
    };

    return {
        "newElement": _newElement,
        "wrap" : _wrap
    };
})();
