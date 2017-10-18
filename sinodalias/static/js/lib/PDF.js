var PDF = (function(){

  var _dataURLimg = function(img){
    var canvas = document.createElement("canvas");
    canvas.width = 700;
    canvas.height = 400;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  };

  var _open = function(register){
    var period = GUI.getElement("period");
    var img1 = GUI.getElement("img1");
    var img2 = GUI.getElement("img2");
    var documentDefinition = {
      content: [
      {
        table: {
          widths: ['*', 200, 100],
          body: [
            [ 
              { border: [false, false, false, false], 
                text: 'Periodo:  \n\n' + period.textContent, fontSize: 13, bold: true},
              { border: [false, false, false, false],
                // image: _dataURLimg(img1), fit: [350, 150]},
              image: _dataURLimg(img1), width: 150, height: 130},
              { border: [false, false, false, false],
                // image: _dataURLimg(img2), fit: [150, 150]}
              image: _dataURLimg(img2), width: 200, height: 100}
            ]
          ]
        }
      },
      {
        table: {
          widths: [60, '*', 50, '*'],
          body: [
            [{text: 'Fecha: ', bold : true, alignment: 'center'}, 
            register.fecha,
            { fillColor: '#EEFFEE',
              text: 'Folio: ', bold : true, alignment: 'center'},
            register.folio],
          ] } },
      {
        table : {
          widths: [60, '*', 60, '*'],
          body: [
            [{text: 'Nombre: ', bold : true, alignment: 'center'},
            register.nombre,
            {text: 'Matrícula: ', bold : true, alignment: 'center'},
            register.matricula],
          ] } },
      {
        table : {
          widths: [60, '*'],
          body: [
            [{text: 'Carrera: ', bold : true, alignment: 'center'},
            register.carrera],
          ] } },
      {
        table : {
          widths: [60, '*'],
          body: [
            [{text: 'Concepto: ', bold : true, alignment: 'center'},
            register.concepto],
          ] } },
      {
        table : {
          widths: [60, '*'],
          body: [
            [{text: 'Nivel: ', bold : true, alignment: 'center'},
            register.nivel],
          ] } },
      {
        table : {
          widths: [60, '*', '*'],
          body: [
            [{text: 'Importe: ', bold : true, alignment: 'center'},
            '$ ' + register.numero, '(' + register.letra + ')'],
          ] } 
      },

      {
        table: {
          body: [
            [{border: [false, false, false, false], 
              text: '\n\n\n\n\n\n\n\n'}]
          ]
        }

      },
      {
        table: {
          widths: ['*', 200, 100],
          body: [
            [ 
              { border: [false, false, false, false], 
                text: 'Periodo:  \n\n' + period.textContent, fontSize: 13, bold: true},
              { border: [false, false, false, false],
                // image: _dataURLimg(img1), fit: [350, 150]},
              image: _dataURLimg(img1), width: 150, height: 130},
              { border: [false, false, false, false],
                // image: _dataURLimg(img2), fit: [150, 150]}
              image: _dataURLimg(img2), width: 200, height: 100}
            ]
          ]
        }
      },
      {
        table: {
          widths: [60, '*', 50, '*'],
          body: [
            [{text: 'Fecha: ', bold : true, alignment: 'center'}, 
            register.fecha,
            { fillColor: '#EEFFEE',
              text: 'Folio: ', bold : true, alignment: 'center'},
            register.folio],
          ] } },
      {
        table : {
          widths: [60, '*', 60, '*'],
          body: [
            [{text: 'Nombre: ', bold : true, alignment: 'center'},
            register.nombre,
            {text: 'Matrícula: ', bold : true, alignment: 'center'},
            register.matricula],
          ] } },
      {
        table : {
          widths: [60, '*'],
          body: [
            [{text: 'Carrera: ', bold : true, alignment: 'center'},
            register.carrera],
          ] } },
      {
        table : {
          widths: [60, '*'],
          body: [
            [{text: 'Concepto: ', bold : true, alignment: 'center'},
            register.concepto],
          ] } },
      {
        table : {
          widths: [60, '*'],
          body: [
            [{text: 'Nivel: ', bold : true, alignment: 'center'},
            register.nivel],
          ] } },
      {
        table : {
          widths: [60, '*', '*'],
          body: [
            [{text: 'Importe: ', bold : true, alignment: 'center'},
            '$ ' + register.numero, '(' + register.letra + ')'],
          ] } 
      }




      ]    
    };
    return pdfMake.createPdf(documentDefinition).open();
  };

  return {
    "open" : _open
  };

})();
