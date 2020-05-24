const countDownTo = new Date("June 19, 2020 14:00:00").getTime();

const count = setInterval(function() {

    const today = new Date().getTime();

    const howLong = countDownTo - today;

    const days = Math.floor(howLong / (1000*60*60*24));
    const hours = Math.floor((howLong % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((howLong % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((howLong % (1000*60)) / 1000);

    document.querySelector("#countdown").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";

    if (howLong < 0) {
        clearInterval(count);
        document.querySelector("#countdown").innerHTML = "The launch is completed!";
    }
}, 1000);