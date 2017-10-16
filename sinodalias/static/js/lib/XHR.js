var XHR = (function(){
  
  var _post = function(url, args){
    var xhr = new XMLHttpRequest();
    var data = JSON.stringify(args);

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        console.log(args);
        console.log(data);
      }
    };

    xhr.open('POST', url + "/post");
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(data);
  };

  return {
    "post" : _post
  };

})();
