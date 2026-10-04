function checkBirthday() {

    let name = "Alex";
    let birthdayMonth = 10;
    let birthdayDay = 15;
    let gift = null;
    let plan;

    let today = new Date();
    let currentYear = today.getFullYear();

    let birthday = new Date(
        currentYear,
        birthdayMonth - 1,
        birthdayDay
    );

    if (birthday < today) {
        birthday = new Date(
            currentYear + 1,
            birthdayMonth - 1,
            birthdayDay
        );
    }

    let difference = birthday - today;

    let daysLeft = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    let status;

    if (daysLeft == 0) {
        status = "Today is your birthday!";
    }
    else if (daysLeft <= 7) {
        status = "Your birthday is very close!";
    }
    else {
        status = "Your birthday is coming soon!";
    }

    let message;

    if (daysLeft == 0) {
        message = "Happy Birthday, " + name + "!";
    }
    else if (daysLeft <= 30) {
        message = "Get ready, " + name + "!";
    }
    else {
        message = "Keep waiting, " + name + "!";
    }

    let countdown = "";
    let count = 1;

    while (count <= 5) {
        countdown = countdown + "*";
        count = count + 1;
    }

    document.getElementById("birthday").innerHTML =
        birthdayMonth + "/" + birthdayDay;

    document.getElementById("days").innerHTML =
        daysLeft + " days";

    document.getElementById("status").innerHTML =
        status;

    document.getElementById("message").innerHTML =
        message;

    document.getElementById("countdown").innerHTML =
        countdown;

    document.getElementById("gift").innerHTML =
        gift;

    document.getElementById("plan").innerHTML =
        plan;
}

