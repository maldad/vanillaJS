var HTML = (function (){

    var _envolver = function(obj){
        var _estado = obj;
        var _envoltura = {
            'setId': function(_id){
                _estado.setAttribute('id', _id);
                return _envoltura;
            },
            'setText': function(_text){
                _estado.textContent = _text;
                return _envoltura;
            },
            'setAttribute': function(_attribute, value){
                _estado.setAttribute(_attribute, value);
                return _envoltura;
            },
            'addClass': function(_class){
                _estado.classList.add(_class);
                return _envoltura;
            },
            'appendChild': function(_child){
                _estado.appendChild(_child);
                return _envoltura;
            },
            'element': function(){
                return _estado;
            },
        };
        return _envoltura;
    };

    var _new_element = function(_etiqueta, _obj_atributos){
        var nuevo_elemento = document.createElement(_etiqueta);
        for(var atributo in  _obj_atributos)
            nuevo_elemento.setAttribute(atributo, _obj_atributos[atributo]);
        return _envolver(nuevo_elemento);
    };


    return {
        'new_element': _new_element,
        "envolver" : _envolver
    };
})();
