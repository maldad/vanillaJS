var GUI = (function (){
  
  var _getElement = function(id){
    return document.getElementById(id);
  };

  var _table = function(rows, columns){
    var table = HTML.new_element("table").element();
    var tbody = HTML.new_element("tbody").element();
    for(var i = 0; i < rows; i++){
      var tr = HTML.new_element("tr").element();
      for(var i = 0; i < columns; i++){
        tr.appendChild(HTML.new_element("td").setText(i).element());
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
  };

  var _head = function(){
    var header = HTML.new_element("div").element();
    var table = _table(1, 3);
    var table = HTML.envolver(table);
    table.setId("table1");

    var period = HTML.envolver(table.element().children[0].children[0].children[0]);
    period.setText("AGO - DIC 2017");

    var sep = HTML.envolver(table.element().children[0].children[0].children[1]);
    sep.setText("SEP logo");

    var ito = HTML.envolver(table.element().children[0].children[0].children[2]);
    ito.setText("ITO logo");

    header.appendChild(table.element());
    var panel = _getElement("mainPanel");
    panel.appendChild(header);
  };

  return{
    "getElement" : _getElement,
    "head" : _head
  };

})();
