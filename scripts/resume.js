//SET the commentary text constants
var resumeCommentary = {};
$.getJSON('../data/resumeCommentary.json', function(data) {
  $.each(data, function(key, val) {
    resumeCommentary[key] = val;
    alert(val);
  });
});

//This is most of the commentary functions
function resizeCommentary () {
    commentaryWidth = $('body').width() - $('#bodyContainer').width() - 50;
    $('#commentary').width(commentaryWidth);
};
function followScroll() {
  $('#commentary').stop().animate({
    marginTop: $(window).scrollTop() + 40
  }, 200);
  //$('#commentary').css('margin-top',$(window).scrollTop());
};
function changeCommentary(picker) {
  $('#commentary').animate({
    opacity: 0
  }, 200, function(){
    $(this).text(resumeCommentary[picker]);
    $(this).attr("tag",picker);
  }).animate({
    opacity: 0.7
  }, 200);
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
