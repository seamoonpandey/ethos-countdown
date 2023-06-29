window.onload = function() {
  // Set the target end date and time (June 30, 2023, 8:00 AM Nepal time)
  var endDate = new Date("June 30, 2023 08:00:00");
  
  // Convert the end date to Nepal Standard Time (NST)
  endDate.toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });

  // Update the countdown every second
  var countdown = setInterval(function() {
    // Get the current date and time in Nepal Standard Time (NST)
    var now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });

    // Find the distance between now and the end date
    var distance = endDate - now;

    // Check if the countdown has ended
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "EXPIRED";
      return;
    }

    // Calculate time units
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
  }, 1000);
};
