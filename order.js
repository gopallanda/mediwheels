document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".circle-rating").forEach(function (circleRating) {
    var percent = parseInt(circleRating.getAttribute("data-percent"));
    var progressCircle = circleRating.querySelector(".circle-rating-progress");
    var circumference =
      2 * Math.PI * parseFloat(progressCircle.getAttribute("r"));

    var progress = (percent / 100) * circumference;
    progressCircle.style.strokeDasharray = progress + ", " + circumference;
  });
});
