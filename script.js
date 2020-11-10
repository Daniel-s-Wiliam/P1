(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  // Place date below this line
  let dateToCount = "Nov 12, 2021 138:44:56",
    countDown = new Date(dateToCount).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");
        // -----------------------------CHANGE GOOGLE TO WHATEVER U WANT (DONT REMOVE THE QUOTATIONS)------------
        headline.outerHTML =
          "<h1 " +
          "id=" +
          '"headline"' +
          ">" +
          "<a " +
          "href=" +
          '"www.google.com"' +
          ">" +
          "www.google.com" +
          "</a>" +
          "</h1>";
        // headline.innerText = "www.google.com";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0);
})();
