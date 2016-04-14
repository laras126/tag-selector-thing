$(document).ready(function() {

  $('.tag-set').each(function() {
    $(this).find('.tag').click(function() {

      $(this).parent('.tag-set')
        .find('.tag')
        .removeClass('selected');
      $(this).addClass('selected');

      var set1Selection = $('#set1').find('.selected').attr('data-link'),
          set2Selection = $('#set2').find('.selected').attr('data-link');

      var $submitBtn = $('#submit'),
          $tag1 = $('#tag1'),
          $tag2 = $('#tag2');

      $submitBtn.attr('href', set1Selection + '-' + set2Selection + '.html')

    });
  });

});
