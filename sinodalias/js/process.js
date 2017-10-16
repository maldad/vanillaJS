var Process = (function(){

  var _getInputs = function(){
    var form = GUI.getElement("form1");
    var f = function(input){
      return input.name !== "";
    };
    return HOF.filter(f, form.children);
  };

  var _buildRegister = function(){
    var form = GUI.getElement("form1");

    var f = function(obj, input){
      obj[input.name] = input.value;
      return obj;
    };

    return HOF.reduce({}, f, _getInputs());
  };

  return {
    "getInputs" : _getInputs,
    "buildRegister" : _buildRegister
  };
})();
