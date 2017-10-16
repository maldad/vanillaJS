var HOF = (function(){

  var _map = function(f, ary){
    var output = [];
    for(var i = 0; i < ary.length; i++){
      output.push(f(ary[i]));
    }
    return output;
  };

  var _filter = function(f, ary){
    var output = [];
    for(var i = 0; i < ary.length; i++){
      if(f(ary[i])){
        output.push(ary[i]);
      }
    }
    return output;
  };

  var _reduce = function(init, f, ary){
    _final = init;
    for(var i = 0; i < ary.length; i++){
      _final = f(_final, ary[i]);
    }
    return _final;
  };

  return {
    "map" : _map,
    "filter" : _filter,
    "reduce" : _reduce
  }
})();
