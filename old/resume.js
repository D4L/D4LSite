//SET the commentary text constants
var resumeCommentary = {};
$.getJSON('resumeCommentary.json', function(data) {
  $.each(data, function(key, val) {
    resumeCommentary[key] = val;
  });
});

//This is most of the commentary functions
function resizeCommentary () {
    commentaryWidth = $('body').width() - $('#resumeContainer').width() - 50;
    $('#commentary').width(commentaryWidth);
};
function followScroll() {
  $('#commentary').clearQueue().animate({
    marginTop: $(window).scrollTop() + 40
  }, 200);
  //$('#commentary').css('margin-top',$(window).scrollTop());
};
function changeCommentary(picker) {
  moveLength = $('#commentary').width();
  $('#commentary').animate({
    opacity: 0,
    marginLeft: moveLength
  }, 300, function(){
    $(this).text(resumeCommentary[picker]);
    $(this).attr("tag",picker);
    $(this).animate({
      opacity: 1,
      marginLeft: 10
    }, 300);
  });
};

//This stuff will run when document is loaded
$(document).ready(function () {
  resizeCommentary();
  $(window).resize(function() {
    resizeCommentary();
  });

  $(window).scroll(function() {
    followScroll();
  });

  $('.genericSection').mouseenter(function () {
    $(this).addClass('selectedSection').animate({
      "padding-left": 20
    }, 200);
  });

  $('.genericSection').mouseleave(function() {
    $(this).removeClass('selectedSection').animate({
      "padding-left": 0
    }, 200);
  });

  $('.commentaryChanger').mouseenter(function () {
    if ($('#commentary').attr("tag") != $(this).attr('picker')) {
      changeCommentary($(this).attr('picker'));
    }
  });
});
