window.onload = function() {
  // Set the target start and end dates and times
  var startDate = new Date("June 30, 2023 09:00:00");
  var endDate = new Date("July 1, 2023 09:00:00");

  // Calculate the starting countdown duration
  var startingCountdownDuration = startDate - new Date();

  // Update the countdown every second
  var countdown = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Check if the event has started
    if (now >= startDate.getTime() && now <= endDate.getTime()) {
      // Find the distance between now and the end date
      var distance = endDate - now;
      var countdownMessage = "Ends in";
    } else {
      // Find the distance between now and the start date
      var distance = startDate - now;
      var countdownMessage = "Starts in";
    }

    // Check if the countdown has ended
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Event has ended!";
      return;
    }

    // Calculate time units
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown message and time remaining
    document.getElementById("timer-message").innerHTML = countdownMessage;
    if(hours===8 && minutes>=59 && minutes<=58 ){
    document.getElementById("timer").innerHTML = "Happy birthday Anish Koirala";
  }else{
    document.getElementById("timer").innerHTML =  hours + "h " + minutes + "m " + seconds + "s" ;}
  }, 1000);
}; 
