var GUI = (function (){
  
  var _getElement = function(id){
    return document.getElementById(id);
  };

  var period = function(){
    var months = HTML.newElement("h3").setText("AGO - DIC 2017")
      .setId("period");
    var cont = HTML.newElement("div").addClass("pure-u-1-3")
      .addClass("header")
      .appendChild(months.element());
    return cont;
  };

  var sep = function(){
    var img = HTML.newElement("img").setAttribute("src", "static/img/sep.jpg").
      setAttribute("width", 300).setAttribute("height", 150);
    var cont = HTML.newElement("div")
      .addClass("header")
      .addClass("pure-u-1-3").appendChild(img.element());
    return cont;
  };

  var ito = function(){
    var img = HTML.newElement("img").setAttribute("src", "static/img/ito.png").
      setAttribute("width", 100).setAttribute("height", 100);
    var cont = HTML.newElement("div")
      .addClass("header")
      .addClass("pure-u-1-3").appendChild(img.element());
    return cont;
  };

  var _head = function(){
    var cont = HTML.newElement("div").addClass("pure-g");
    cont.appendChild(period().element());
    cont.appendChild(sep().element());
    cont.appendChild(ito().element());
    
    return cont;
  };

  var _form = function(){
    var form = HTML.newElement("form")
      .setId("form1")
      .addClass("pure-form");


    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-1-2")
        .setAttribute("name", "fecha")
        .setAttribute("placeholder", "Fecha:").element());

    form.appendChild(HTML.newElement("input")
        .setId("ifolio")
        .addClass("pure-input-1-2")
        .setAttribute("name", "folio")
        .setAttribute("readonly", "").element());

    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-3-4")
        .setAttribute("name", "nombre")
        .setAttribute("placeholder", "NOMBRE").element());

    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-1-4")
        .setAttribute("name", "matricula")
        .setAttribute("placeholder", "Matrícula").element());

    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-1")
        .setAttribute("name", "carrera")
        .setAttribute("placeholder", "CARRERA").element());

    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-1-2")
        .setAttribute("value", "Concepto:")
        .setAttribute("readonly", "").element());

    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-1-2")
        .setAttribute("name", "concepto")
        .setAttribute("value", "Examen de titulación Sinodalias")
        .setAttribute("readonly", "").element());

    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-1-2")
        .setAttribute("value", "Nivel: ")
        .setAttribute("readonly", "").element());

    form.appendChild(HTML.newElement("select")
        .addClass("pure-input-1-2")
        .setAttribute("name", "nivel")
        .appendChild(HTML.newElement("option").setText("Licenciatura").element())
        .appendChild(HTML.newElement("option").setText("Maestría").element())  
        .appendChild(HTML.newElement("option").setText("Doctorado").element())  
        .element());

    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-1-3")
        .setAttribute("value", "Importe  $: ")
        .setAttribute("readonly", "").element());

    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-1-3")
        .setAttribute("name", "numero")
        .setAttribute("placeholder", "Cantidad con número").element());

    form.appendChild(HTML.newElement("input")
        .addClass("pure-input-1-3")
        .setAttribute("name", "letra")
        .setAttribute("placeholder", "(Cantidad con letra)").element());

    return form;
  };

  var _acceptButton = function(){
    var b = HTML.newElement("button")
      .addClass("pure-button")
      .setId("button1")
      .setText("Aceptar");

    var url = "http://127.0.0.1:5000/post"
    var f = function(event){
      var args = Process.buildRegister();
      XHR.post(url, args);
    };

    b.element().addEventListener("click", f, false);
    
    var d = HTML.newElement("div")
      .appendChild(b.element())
      .setId("centerButton");
    return d;
  };

  var _createGui = function(){
    console.log("creating the GUI");
    var panel = _getElement("mainPanel");
    panel.appendChild(_head().element());
    panel.appendChild(_form().element());
    panel.appendChild(_acceptButton().element());

    XHR.get("http://127.0.0.1:5000/get");
  };

  var _fillFolio = function(folio){
    if(folio.length >= 4){
      return folio;
    }else{
      return _fillFolio("0" + folio);
    }
  };

  var _setFolio = function(folio){
    var inputFolio = _getElement("form1").children[1];
    var fol = parseInt(folio);
    inputFolio.value = _fillFolio(fol + 1);
  };

  return{
    "getElement" : _getElement,
    "createGui" : _createGui,
    "setFolio" : _setFolio
  };

})();
