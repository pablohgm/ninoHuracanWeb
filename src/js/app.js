$( document ).ready (function(){

  $('#contact').on('shown.bs.collapse', function () {
    if($('#acerca').attr('class') == 'collapse in'){
      $('#acerca').collapse('toggle');
    }
  });

  $('#acerca').on('shown.bs.collapse', function () {
    if($('#contact').attr('class') == 'collapse in'){
      $('#contact').collapse('toggle');
    }
  })
});
