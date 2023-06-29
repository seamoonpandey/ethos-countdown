window.onload = function() {
    // Set the date and time for the countdown
    var countDownDate = new Date("June 30, 2023 00:00:00").getTime();

    // Update the countdown every 1 second
    var countdown = setInterval(function() {
        // Get the current date and time
        var now = new Date().getTime();

        // Find the distance between now and the countdown date
        var distance = countDownDate - now;

        // Calculate time units
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
};
