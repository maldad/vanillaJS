var PDF = (function(){

  var _open = function(register){
    var documentDefinition = {
      content: [{
        table: {
          widths: [60, '*', 50, '*'],
          body: [
            [{text: 'Fecha: ', bold : true, alignment: 'center'}, 
            register.fecha,
            {text: 'Folio: ', bold : true, alignment: 'center'},
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
          ] } }
      ]
    };
    return pdfMake.createPdf(documentDefinition).download();
  };

  return {
    "open" : _open
  };

})();
