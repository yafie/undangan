(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        dayMonth = "07/02/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;

    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {
            const now = new Date().getTime(),
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
                document.getElementById("countdown").style.display = "none";
                document.getElementById("wedding-running").style.display = "block";
                document.getElementById("wedding-done").style.display = "block";
                clearInterval(x);
            }
            //seconds

            var GivenDates = '07/02/2023';

            var GivenDate = '2023-02-07';
            var CurrentDate = new Date();
            GivenDate = new Date(GivenDate);

            if (GivenDate > CurrentDate) {

                if (GivenDates == today) {
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("wedding-running").style.display = "block";
                    document.getElementById("wedding-done").style.display = "none";
                    clearInterval(x);
                } else {
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("wedding-running").style.display = "none";
                    document.getElementById("wedding-done").style.display = "block";
                    clearInterval(x);
                }

            }

        }, 0);

})();