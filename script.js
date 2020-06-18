let progressBarWidth = 0;

$('.j-btn-1').click(() => {
  let step = 1;
  progressBarWidth += step;
  $("#my-progress-bar").width(progressBarWidth + '%');
  $("#my-progress-bar").text(progressBarWidth + '%')
});

$('.j-btn-3').click(() => {
  let step = 3;
  progressBarWidth += step;
  $("#my-progress-bar").width(progressBarWidth + '%');
  $("#my-progress-bar").text(progressBarWidth + '%')
});

$('.j-btn-7').click(() => {
  let step = 7;
  progressBarWidth += step;
  $("#my-progress-bar").width(progressBarWidth + '%');
  $("#my-progress-bar").text(progressBarWidth + '%')
});