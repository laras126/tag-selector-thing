$(document).ready(function() {

  $('.tag-set').each(function() {
    $(this).find('.tag').click(function() {

      $(this).parent('.tag-set')
        .find('.tag')
        .removeClass('selected');
      $(this).addClass('selected');

      var set1Selection = $('#set1').find('.selected').attr('data-link'),
          set2Selection = $('#set2').find('.selected').attr('data-link');

      var $tagForm = $('#tagForm'),
          $tag1 = $('#tag1'),
          $tag2 = $('#tag2');

      $tagForm.attr('action', set1Selection + '-' + set2Selection + '.html');

    });
  });

});
