var XHR = (function(){
  
  var _post = function(url, args){
    var xhr = new XMLHttpRequest();
    var data = JSON.stringify(args);

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        console.log(args);
        console.log(data);
        var form = GUI.getElement("form1").reset();
      }
    };

    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(data);
  };

  var _get = function(url){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        var response = xhr.responseText;
        console.log("queried folio: " + response);
        GUI.setFolio(response);
      };
    };
    xhr.open('GET', url);
    xhr.send();
  };

  return {
    "post" : _post,
    "get" : _get
  };

})();
