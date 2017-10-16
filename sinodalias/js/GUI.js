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
    var img = HTML.newElement("img").setAttribute("src", "img/sep.jpg").
      setAttribute("width", 300).setAttribute("height", 150);
    var cont = HTML.newElement("div")
      .addClass("header")
      .addClass("pure-u-1-3").appendChild(img.element());
    return cont;
  };

  var ito = function(){
    var img = HTML.newElement("img").setAttribute("src", "img/ito.png").
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
        .addClass("pure-input-1-2")
        .setAttribute("name", "folio")
        .setAttribute("placeholder", "Folio:").element());

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

    var f = function(event){
      console.log(Process.buildRegister());
    };

    b.element().addEventListener("click", f, false);
    
    var d = HTML.newElement("div")
      .appendChild(b.element())
      .setId("centerButton");
    return d;
  };

  var _createGui = function(){
    var panel = _getElement("mainPanel");
    panel.appendChild(_head().element());
    panel.appendChild(_form().element());
    panel.appendChild(_acceptButton().element());
  };

  return{
    "getElement" : _getElement,
    "createGui" : _createGui
  };

})();
